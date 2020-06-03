import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { observer } from 'mobx-react';
import React, { useState } from 'react';
import InputMask from 'react-input-mask';

import { LocationDropdown } from '../components/UI/form/LocationDropdown';
import { PositionsOfInterest } from '../components/UI/form/PositionsOfInterest';
import { Logo } from '../components/UI/Logo';
import { GenericHelper } from '../helpers/GenericHelper';
import { ILead } from '../types/account.types';
import { NicheGroupType } from '../types/groups.types';

export const Register = observer(() => {
  // const { formStore } = useStores();

  const stateCodeParam = GenericHelper.getUrlQueryParamByName("stateCode");
  const cityParam = GenericHelper.getUrlQueryParamByName("city");
  const countryParam = GenericHelper.getUrlQueryParamByName("country");

  console.log(stateCodeParam);
  console.log(cityParam);
  console.log(countryParam);

  const [newLead, setNewLead] = useState<ILead>({
    name: "",
    email: "",
    stateCode: stateCodeParam || "",
    city: cityParam || "",
    country: countryParam || "Brazil",
    professionalArea: NicheGroupType.OUTR,
    phone: "",
    jobRoles: [],
  });

  const classes = useStyles();

  const renderCopyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    console.log(newLead);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Logo />

        <Typography component="h1" variant="h5">
          Acesse nossos Grupos de WhatsApp
        </Typography>

        <p>
          Preencha o cadastro abaixo para acessar nossos grupos de WhatsApp!
        </p>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
              <TextField
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
                  />
                )}
              </InputMask>
            </Grid>
            <Grid item xs={12}>
              {!stateCodeParam && <LocationDropdown />}
            </Grid>

            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
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
                    value={NicheGroupType.OUTR}
                    key={NicheGroupType.OUTR}
                  >
                    Outra Área
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
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <PositionsOfInterest
                onChange={(poi) =>
                  setNewLead({
                    ...newLead,
                    jobRoles: poi,
                  })
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            startIcon={<WhatsAppIcon />}
            onClick={onHandleSubmit}
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
      </div>
      <Box mt={5}>{renderCopyright()}</Box>
    </Container>
  );
});

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
    marginBottom: "1rem",
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
