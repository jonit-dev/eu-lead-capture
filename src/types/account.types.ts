export interface ILead {
  name: string;
  email: string;
  stateCode: string;
  country: string;
  jobRoles: string[];
  phone?: string;
  city?: string;
}
