import { action, observable } from 'mobx';

import { APIHelper } from '../helpers/APIHelper';
import { ICity, IProvince } from '../types/form.types';

export class FormStore {
  @observable selectedCity;
  @observable selectedProvince;
  @observable provinces;
  @observable cities;

  @action
  changeCity = (newCity: string) => {
    this.selectedCity = newCity;
  };

  @action
  changeProvince = (newProvince: string) => {
    this.selectedProvince = newProvince;
  };

  @action
  async loadProvinces() {
    const response = await APIHelper.request(
      "GET",
      "/places/Brazil?statesOnly=true"
    );

    const provinces: IProvince[] = response.data;
    this.provinces = provinces;
    console.log(response.data);

    return provinces;
  }

  async loadCities(province: string) {
    const response = await APIHelper.request(
      "GET",
      `/places/Brazil/${province}?citiesOnly=true`
    );

    const cities: ICity[] = response.data;
    this.cities = cities;
    console.log(response.data);

    return cities;
  }
}
