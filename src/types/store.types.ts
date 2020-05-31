import { ICity, ILocation, IProvince } from './form.types';

export interface IFormStore {
  form: {
    location: ILocation;
    changeLocation: (key: string, value: string) => void;
  };
  formAPIData: {
    provinces: IProvince[] | null;
    cities: ICity[] | null;
    loadProvinces: () => Promise<IProvince[]>;
    loadCities: (province: string) => Promise<ICity[]>;
  };
}
