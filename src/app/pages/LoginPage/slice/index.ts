import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { loginSaga } from './saga';
import { LoginState } from './types';

export const initialState: LoginState = {
  email: '',
  password: '',
  errors: {
    email: '',
    password: '',
  },
};

const validateEmail = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
);
const ValidPassword = RegExp(
  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
);

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    validateEmailAddress: (state, action: PayloadAction<string>) => {
      state.email = action.payload;

      state.errors.email =
        state.email === ''
          ? 'Username Cannot be Empty'
          : validateEmail.test(state.email)
          ? ''
          : 'Email is not valid';
      console.log(state.errors.email);
    },
    Password: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
      state.errors.password =
        state.password === ''
          ? 'Password Cannot be Empty'
          : ValidPassword.test(state.password)
          ? ''
          : 'Your password must be at least 8 characters, with at least a symbol, upper and lower case letters and a number';
      console.log(state.errors.password);
    },
  },
});

export const { validateEmailAddress, Password } = slice.actions;

export const useLoginSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useLoginSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
