import { action, observable } from 'mobx';

import { APIHelper } from '../helpers/APIHelper';
import { IUser } from '../types/account.types';
import { ICity, IProvince } from '../types/form.types';

export class FormStore {
  @observable selectedCity;
  @observable selectedProvince;
  @observable provinces;
  @observable cities;
  @observable positionsOfInterest;

  @action
  changeCity = (newCity: string) => {
    this.selectedCity = newCity;
  };

  @action
  changeProvince = (newProvince: string) => {
    this.selectedProvince = newProvince;
  };

  @action
  async addNewLead(newLead: IUser) {
    const response = await APIHelper.request("POST", "/leads/save", newLead);

    return response.data;
  }

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

  @action
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

  @action
  async loadPositionsOfInterest() {
    const response = await APIHelper.request("GET", `/sectors/keywords/all`);

    const positionsOfInterest: string[] = response.data.keywords;
    this.positionsOfInterest = positionsOfInterest;

    return positionsOfInterest;
  }
}
