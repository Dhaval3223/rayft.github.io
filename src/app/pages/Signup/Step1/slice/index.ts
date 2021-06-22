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
const slice = createSlice({
  name: 'singup',
  initialState,
  reducers: {
    validateEmailAddress : (state,action: PayloadAction<string>)=>
    {
      state.email=action.payload;
      state.errors.email = validateEmail.test(state.email) ? "true" : 'false';
      console.log(state.errors.email);
    }
  },
});

export const { actions: singupActions } = slice;

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