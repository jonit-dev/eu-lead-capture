import { ILocation } from './form.types';

export interface IAppContext {
  form: IFormContext | null;
}

export interface IFormContext {
  location: ILocation;
}
