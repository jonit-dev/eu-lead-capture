import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Alert from '@material-ui/lab/Alert';
import * as EmailValidator from 'email-validator';
import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import styled from 'styled-components';

import { LocationDropdown } from '../components/UI/form/LocationDropdown';
import { PositionsOfInterest } from '../components/UI/form/PositionsOfInterest';
import { Logo } from '../components/UI/Logo';
import { GenericHelper } from '../helpers/GenericHelper';
import { GroupHelper } from '../helpers/GroupHelper';
import { ValidationHelper } from '../helpers/ValidationHelper';
import { useStores } from '../store/store';
import { ILead, UserType } from '../types/account.types';
import { NicheGroupType } from '../types/groups.types';

export const Register = observer(() => {
  const { formStore } = useStores();

  const stateCodeParam = GenericHelper.getUrlQueryParamByName("stateCode");
  const cityParam = GenericHelper.getUrlQueryParamByName("city");

  useEffect(() => {
    if (stateCodeParam) {
      formStore.setProvince(stateCodeParam);
    }

    if (cityParam) {
      formStore.setCity(cityParam);
    }
  }, [formStore, stateCodeParam, cityParam]);

  const [newLead, setNewLead] = useState<ILead>({
    email: "",
    country: GenericHelper.getUrlQueryParamByName("country") || "Brazil",
    professionalArea:
      GenericHelper.getUrlQueryParamByName("professionalArea") ||
      NicheGroupType.SELECIONE,
    jobRoles: [],
    type: UserType.JobSeeker,
    phone: "",
  });

  const [emailError, setEmailError] = useState<boolean>(false);

  const classes = useStyles();

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    newLead.jobRoles = formStore.selectedPositionsOfInterest;

    if (!newLead.jobRoles.length) {
      alert("Por favor, selecione ao menos uma vaga/posição de interesse!");
      return;
    }

    // CLIENT-SIDE VALIDATION ========================================

    const invalidFields = ValidationHelper.validateKeyValue(newLead, {
      optionalFields: ["phone"],
      fieldLabels: {
        email: "E-mail",
      },
    });

    if (invalidFields) {
      alert(
        `Os seguintes campos estão inválidos: ${invalidFields}. Por favor, retorne e corrija antes de prosseguir.`
      );
      return;
    }

    // check for email validation

    if (!EmailValidator.validate(newLead.email)) {
      setEmailError(true);
      return;
    }

    const groupLink = GroupHelper.getGroupLink(
      formStore.selectedProvince,
      newLead.professionalArea
    );

    if (!groupLink) {
      console.log(
        `Nenhum grupo disponivel para o estado de ${formStore.selectedProvince}. Tente novamente em outro estado.`
      );
      return;
    }

    newLead.stateCode = formStore.selectedProvince;
    newLead.city = formStore.selectedCity;

    const addNewLeadStatus = await formStore.addNewLead(newLead);

    console.log(addNewLeadStatus);

    console.log(`Redirecting user to: ${groupLink}`);

    GenericHelper.windowOpen(groupLink);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedType = (event.target as HTMLInputElement).value;

    setNewLead({
      ...newLead,
      type: selectedType,
    });
  };

  const onRenderAlertText = () => {
    switch (newLead.type) {
      case UserType.Company:
      case UserType.RecruitmentCompany:
        return (
          <>
            Selecione para quais vagas sua empresa geralmente recruta (maior
            demanda), e iremos lhe avisar quando algum candidato compatível se
            cadastrar!
          </>
        );
      case UserType.JobSeeker:
        return (
          <>
            Adicione a maior quantidade possível de vagas de seu interesse, pois{" "}
            <strong> iremos lhe avisar por email</strong> assim que uma surgir!
          </>
        );
      default:
        return (
          <>
            Adicione a maior quantidade possível de vagas de seu interesse, pois{" "}
            <strong> iremos lhe avisar por email</strong> assim que uma surgir!
          </>
        );
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <MainContainer className={classes.paper}>
        <Logo />

        <Typography component="h1" variant="h5">
          Cadastre-se para os Grupos de WhatsApp
        </Typography>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">O que procura?</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={newLead.type}
                  onChange={handleTypeChange}
                >
                  <FormControlLabel
                    value="JobSeeker"
                    control={<Radio />}
                    label="Procuro Emprego ou Serviço"
                  />
                  <FormControlLabel
                    value="Company"
                    control={<Radio />}
                    label="Sou Empresa"
                  />
                  <FormControlLabel
                    value="RecruitmentCompany"
                    control={<Radio />}
                    label="Sou Empresa de RH"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Alert severity="info">{onRenderAlertText()}</Alert>
              <PositionsOfInterest userType={newLead.type} />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Sua Área Profissional</InputLabel>
                <Select
                  labelId="professionalArea"
                  id="professionalArea"
                  value={newLead.professionalArea}
                  onChange={(e) => {
                    setNewLead({
                      ...newLead,
                      professionalArea: String(e.target.value),
                    });
                  }}
                  label="Sua Área Profissional"
                  fullWidth
                >
                  <MenuItem
                    value={NicheGroupType.SELECIONE}
                    key={NicheGroupType.SELECIONE}
                  >
                    Selecione a sua Área...
                  </MenuItem>

                  <MenuItem
                    value={NicheGroupType.ADMIN}
                    key={NicheGroupType.ADMIN}
                  >
                    Administração & Atendimento
                  </MenuItem>
                  <MenuItem
                    value={NicheGroupType.ESTET}
                    key={NicheGroupType.ESTET}
                  >
                    Beleza & Estética
                  </MenuItem>
                  <MenuItem
                    value={NicheGroupType.CONSTRUC}
                    key={NicheGroupType.CONSTRUC}
                  >
                    Construção, Indústria & Logística
                  </MenuItem>
                  <MenuItem
                    value={NicheGroupType.SAUDE}
                    key={NicheGroupType.SAUDE}
                  >
                    Limpeza, Saúde & Cuidados
                  </MenuItem>
                  <MenuItem
                    value={NicheGroupType.SEGUR}
                    key={NicheGroupType.SEGUR}
                  >
                    Segurança & Patrimônio
                  </MenuItem>
                  <MenuItem
                    value={NicheGroupType.VEND}
                    key={NicheGroupType.VEND}
                  >
                    Vendas & Comércio
                  </MenuItem>
                  <MenuItem
                    value={NicheGroupType.OUTR}
                    key={NicheGroupType.OUTR}
                  >
                    <strong>
                      Outra Área (Nenhuma das Anteriores - Grupo Geral)
                    </strong>
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Nome"
                name="name"
                onChange={(e) =>
                  setNewLead({
                    ...newLead,
                    name: e.target.value,
                  })
                }
              />
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                error={emailError}
                helperText={
                  emailError &&
                  "Confira se seu e-mail foi digitado corretamente!"
                }
                variant="outlined"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
                onChange={(e) =>
                  setNewLead({
                    ...newLead,
                    email: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <InputMask
                mask="(99) 99999-9999"
                value={newLead.phone}
                onChange={(e) =>
                  setNewLead({
                    ...newLead,
                    phone: e.target.value,
                  })
                }
              >
                {() => (
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="phone"
                    label="Celular"
                    name="phone"
                    helperText="Para acesso ao grupo e recebimento de vagas"
                  />
                )}
              </InputMask>
            </Grid>
            {!stateCodeParam && (
              <Grid item xs={12}>
                <LocationDropdown />
              </Grid>
            )}

            {/* <Grid item xs={12}>
              <TextField
                label="Crie uma senha"
                type="password"
                fullWidth
                variant="outlined"
                value={newLead.password}
                onChange={(e) => {
                  setNewLead({
                    ...newLead,
                    password: String(e.target.value),
                  });
                }}
                helperText={"Sua nova senha para o site empregourgente.com"}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Confirme sua nova senha"
                type="password"
                fullWidth
                variant="outlined"
                value={newLead.passwordConfirmation}
                onChange={(e) => {
                  setNewLead({
                    ...newLead,
                    passwordConfirmation: String(e.target.value),
                  });
                }}
                helperText={"Sua nova senha para o site empregourgente.com"}
              />
            </Grid> */}
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            startIcon={<WhatsAppIcon />}
            onClick={onHandleSubmit}
            size="large"
          >
            Acessar Grupo
          </Button>
          {/* <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </MainContainer>
      <Box mt={5}>{renderCopyright()}</Box>
    </Container>
  );
});

const renderCopyright = () => {
  return (
    <CopyrightContainer>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
          Emprego Urgente
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </CopyrightContainer>
  );
};

const MainContainer = styled.div`
  margin-top: 1rem;
`;

const CopyrightContainer = styled.div`
  margin-bottom: 2rem;
`;

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formControl: {
    minWidth: 120,
    width: "100%",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
