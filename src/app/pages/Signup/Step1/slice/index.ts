import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { singupSaga } from './saga';
import { SingupState } from './types';

export const initialState: SingupState = {
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    errors:{
        firstname:'',
        lastname:'',
        email:'',
        password:'',
    }
};
const validateEmail = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const ValidPassword = RegExp(
  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
);
const validateFirstName = RegExp(/^[a-zA-Z]+ [a-zA-Z]+$/);

const slice = createSlice({
  name: 'singup',
  initialState,
  reducers: {
    validateForm : (state) => {
      if(!state.firstname)
      {
        state.errors.firstname="This Field is Required";
      }
      if(!state.lastname)
      {
        state.errors.lastname="This Field is Required";
      }
      if(!state.email)
      {
        state.errors.email="This Field is Required";
      }
      if(!state.password)
      {
        state.errors.password="This Field is Required";
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
    FirstName: (state, action: PayloadAction<string>) => {
      state.firstname = action.payload;
    },
    LastName: (state, action: PayloadAction<string>) => {
      state.lastname = action.payload;
    },
  },
});

export const { validateForm,validateEmailAddress, Password ,FirstName , LastName} = slice.actions;

export const useSingupSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: singupSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useSingupSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */