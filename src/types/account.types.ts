import { NicheGroupType } from './groups.types';

export interface IUser {
  name: string;
  email: string;
  stateCode?: string;
  country: string;
  genericPositions: string[];
  professionalArea: NicheGroupType | string;
  phone?: string;
  city?: string;
  type: UserType | string;
  password: string;
  passwordConfirmation: string;
}

export enum UserType {
  JobSeeker = "JobSeeker",
  Company = "Company",
  RecruitmentCompany = "RecruitmentCompany",
  Staff = "Staff",
  Admin = "Admin",
}
