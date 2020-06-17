export interface ILead {
  platform: PlatformType | string;
  email: string;
  stateCode?: string;
  country: string;
  jobRoles: string[];
  professionalArea: string;
  phone?: string;
  city?: string;
  type: UserType | string;
}

export enum PlatformType {
  WhatsApp = "whatsapp",
  Telegram = "telegram",
}

export enum UserType {
  JobSeeker = "JobSeeker",
  Company = "Company",
  RecruitmentCompany = "RecruitmentCompany",
  Staff = "Staff",
  Admin = "Admin",
}
