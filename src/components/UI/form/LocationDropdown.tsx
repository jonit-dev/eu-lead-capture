import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';

import { APIHelper } from '../../../helpers/APIHelper';
import { ICity, ILocation, ILocationForm, IProvince } from '../../../types/form.types';

interface IProps {}

export const LocationDropdown = (props: IProps) => {
  const classes = useStyles();
  const [location, setLocation] = useState<ILocation>({
    province: "",
    city: "",
  });

  const [formData, setFormData] = useState<ILocationForm>({
    provinces: [],
    cities: [],
  });

  // Load provinces on component start!
  useEffect(() => {
    const fetchProvinces = async () => {
      const response = await APIHelper.request(
        "GET",
        "/places/Brazil?statesOnly=true"
      );

      console.log(response.data);
      setFormData({
        provinces: response.data,
        cities: [],
      });
    };

    fetchProvinces();
  }, []);

  const renderProvinceItems = () =>
    formData.provinces.map((province: IProvince) => (
      <MenuItem value={province.stateCode} key={province.stateCode}>
        {province.stateCode}
      </MenuItem>
    ));

  const renderCityItems = () => {
    if (!formData.cities.length) {
      return (
        <MenuItem value={""} key={""}>
          Selecione um estado primeiro!
        </MenuItem>
      );
    }

    return formData.cities.map((city: ICity) => (
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
          value={location.province}
          onChange={(e) =>
            setLocation({
              ...location,
              province: String(e.target.value),
            })
          }
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
          value={location.city}
          onChange={(e) =>
            setLocation({
              ...location,
              city: String(e.target.value),
            })
          }
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
