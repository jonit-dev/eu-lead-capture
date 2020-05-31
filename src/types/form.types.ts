export interface ILocation {
  province: string;
  city: string;
}
export interface ILocationForm {
  provinces: IProvince[];
  cities: ICity[];
}

export interface IProvince {
  stateName: string;
  stateCode: string;
}

export interface ICity {
  name: string;
}
