export interface ILead {
  name: string;
  email: string;
  stateCode: string;
  country: string;
  jobRoles: string[];
  professionalArea?: string;
  phone?: string;
  city?: string;
}
