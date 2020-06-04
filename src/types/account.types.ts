import { NicheGroupType } from './groups.types';

export interface ILead {
  name: string;
  email: string;
  stateCode?: string;
  country: string;
  jobRoles: string[];
  professionalArea: NicheGroupType | string;
  phone?: string;
  city?: string;
}
