export interface UserModel {
  id: string;
  userName: string;
  email: string;
  emailConfirmed: boolean;
  passwordHash: string;
  phoneNumber: string;
  phoneNumberConfirmed: boolean;
  twoFactorEnabled: boolean;
  twoFactorSecret?: string;
  twoFactorEnabledOn?: Date;
  last2FAVerification?: Date;
  lockoutEnabled: boolean;
  lockoutEnd?: Date;
  accessFailedCount: number;
  createdOn: Date;
  lastLogin?: Date;
}