export interface IGroup {
  stateCode: AvailableStates;
  mainGroups: IGroupItem[];
  nicheGroups: IGroupItem[];
}

export interface IGroupItem {
  name: string;
  url: string;
  status: boolean;
}

export enum AvailableStates {
  ES = "ES",
  SP = "SP",
  MG = "MG",
  RJ = "RJ",
}
