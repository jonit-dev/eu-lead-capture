import { APIHelper } from '../helpers/APIHelper';
import { ICity, IProvince } from '../types/form.types';
import { IFormStore } from '../types/store.types';

export const formStore: IFormStore = {
  form: {
    location: {
      city: "",
      province: "",
    },

    changeLocation(key: string, value: string) {
      this.location = {
        ...this.location,
        [key]: value,
      };
    },
  },
  formAPIData: {
    provinces: null,
    cities: null,
    async loadProvinces() {
      const response = await APIHelper.request(
        "GET",
        "/places/Brazil?statesOnly=true"
      );

      const provinces: IProvince[] = response.data;
      this.provinces = provinces;
      console.log(response.data);

      return provinces;
    },
    async loadCities(province: string) {
      const response = await APIHelper.request(
        "GET",
        `/places/Brazil/${province}?citiesOnly=true`
      );

      const cities: ICity[] = response.data;
      this.cities = cities;
      console.log(response.data);

      return cities;
    },
  },

  // get bugsCount() {
  //   return this.bugs.length;
  // },
};
