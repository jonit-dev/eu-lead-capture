import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';

import { APIHelper } from '../../../helpers/APIHelper';
import { ICity, IProvince } from '../../../types/form.types';

export const LocationDropdown = () => {
  const classes = useStyles();

  const [locationProvince, setLocationProvince] = useState<string>("");
  const [locationCity, setLocationCity] = useState<string>("");

  // form data
  const [formProvinces, setFormProvinces] = useState<IProvince[]>([]);
  const [formCities, setFormCities] = useState<ICity[]>([]);

  // Load provinces on component start!
  useEffect(() => {
    const fetchProvinces = async () => {
      const response = await APIHelper.request(
        "GET",
        "/places/Brazil?statesOnly=true"
      );

      const provinces: IProvince[] = response.data;
      console.log(response.data);
      setFormProvinces(provinces);
      setLocationProvince(provinces[0].stateCode);
    };

    fetchProvinces();
  }, []);

  // On state select or change, load all cities

  useEffect(() => {
    const fetchCities = async () => {
      const response = await APIHelper.request(
        "GET",
        `/places/Brazil/${locationProvince}?citiesOnly=true`
      );

      const cities: ICity[] = response.data;

      console.log(cities);
      setFormCities(cities);
      setLocationCity(cities[0].name);
    };
    if (locationProvince) {
      fetchCities();
    }
  }, [locationProvince]);

  const renderProvinceItems = () =>
    formProvinces.map((province: IProvince) => (
      <MenuItem value={province.stateCode} key={province.stateCode}>
        {province.stateCode}
      </MenuItem>
    ));

  const renderCityItems = () => {
    return formCities.map((city: ICity) => (
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
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 120,
      width: "100%",
      marginBottom: "1rem",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);
