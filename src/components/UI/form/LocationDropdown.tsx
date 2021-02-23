import { ICity, IProvince } from "@emprego-urgente/shared";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useStores } from "../../../store/store";

export const LocationDropdown = observer(() => {
  const { formStore } = useStores();

  const classes = useStyles();

  const [locationProvince, setLocationProvince] = useState<string>("");
  const [locationCity, setLocationCity] = useState<string>("");

  // form data
  const [formProvinces, setFormProvinces] = useState<IProvince[] | null>([]);
  const [formCities, setFormCities] = useState<ICity[] | null>([]);

  // update store whenever province or city changes

  useEffect(() => {
    formStore.setCity(locationCity);
    formStore.setProvince(locationProvince);
  }, [locationProvince, locationCity, formStore]);

  // Load provinces on component start!
  useEffect(() => {
    const fetchProvinces = async () => {
      const provinces: IProvince[] | null = await formStore.loadProvinces();

      if (provinces) {
        setFormProvinces(provinces);
        setLocationProvince(provinces[0].stateCode);
      }
    };
    fetchProvinces();
  }, [formStore]);

  // On state select or change, load all cities

  useEffect(() => {
    const fetchCities = async () => {
      const cities: ICity[] | null = await formStore.loadCities(
        locationProvince
      );
      if (cities) {
        setFormCities(cities);
        setLocationCity(cities[0].name);
      }
    };
    if (locationProvince) {
      fetchCities();
    }
  }, [locationProvince, formStore]);

  const renderProvinceItems = () =>
    formProvinces?.map((province: IProvince) => (
      <MenuItem value={province.stateCode} key={province.stateCode}>
        {province.stateCode}
      </MenuItem>
    ));

  const renderCityItems = () => {
    return formCities?.map((city: ICity) => (
      <MenuItem value={city.name} key={city.name}>
        {city.name}
      </MenuItem>
    ));
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>Estado</InputLabel>
        <Select
          labelId="state"
          id="state"
          value={locationProvince}
          onChange={(e) => {
            setLocationCity(""); // refresh city (it will be set again once provinces load)
            setLocationProvince(String(e.target.value));
          }}
          label="Estado"
          fullWidth
        >
          {renderProvinceItems()}
        </Select>
      </FormControl>
      <CityContainer>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>Cidade</InputLabel>
          <Select
            labelId="state"
            id="state"
            value={locationCity}
            onChange={(e) => {
              setLocationCity(String(e.target.value));
            }}
            label="Cidade"
            fullWidth
          >
            {renderCityItems()}
          </Select>
        </FormControl>
      </CityContainer>
    </div>
  );
});

const CityContainer = styled.div`
  margin-top: 1rem;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 120,
      width: "100%",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);
