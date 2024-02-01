export type User = {
  email: string;
  password: string;
};

export type UserResponse = {
  name: string;
  email: string;
  token: string;
};

export type ChangePassword = {
  password: string;
  newPassword: string;
  confirmPassword: string;
};
