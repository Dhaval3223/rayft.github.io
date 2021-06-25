import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { loginSaga } from './saga';
import { LoginState } from './types';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export const initialState: LoginState = {
  email: '',
  password: '',
  user: null,
  isLogin: false,
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
    validateForm : (state) => {
      if(!state.email)
      {
        state.errors.email="This Field is Required";
      }
      else if(!state.password)
      {
        state.errors.password="This Field is Required";
      }
      else
      {
          axios.post("https://private-16b8d3-rayftnew.apiary-mock.com/login");
      }
    },
    validateEmailAddress: (state, action: PayloadAction<string>) => {
      state.email = action.payload;

      state.errors.email = validateEmail.test(state.email)
        ? ''
        : 'enter valid email';
    },
    Password: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
      state.errors.password = ValidPassword.test(state.password)
        ? ''
        : 'min 8 letter password, with at least a symbol, upper and lower case letters and a number';
    },
    login: (state, action: PayloadAction<any>) => {
      state.isLogin = true;
      state.user = action.payload;
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
