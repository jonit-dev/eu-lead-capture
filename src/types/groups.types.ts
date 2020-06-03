export interface IGroup {
  stateCode: AvailableStates;
  mainGroups: IGroupItem[];
  nicheGroups: IGroupItem[];
}

export interface IGroupItem {
  name: string;
  url: string;
  status: boolean;
  nicheGroupKey?: NicheGroupType;
}

export enum AvailableStates {
  ES = "ES",
  SP = "SP",
  MG = "MG",
  RJ = "RJ",
}

export enum NicheGroupType {
  ADMIN = "ADMIN",
  ESTET = "ESTET",
  CONSTRUC = "CONSTRUC",
  SAUDE = "SAUDE",
  SEGUR = "SEGUR",
  VEND = "VEND",
  OUTR = "OUTR",
}
