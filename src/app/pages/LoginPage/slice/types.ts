/* --- STATE --- */
export interface LoginState {
  email: string;
  password: string;
  isLogin: boolean;
  user: null;
  errors: {
    email: string;
    password: string;
  };
}
