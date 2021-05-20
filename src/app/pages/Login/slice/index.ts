import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { LoginPageState } from './types';

export const initialState: LoginPageState = {
  username: 'defult',
};

const slice = createSlice({
  name: 'loginpage',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.username = action.payload;
    },
    logout: state => {
      state.username = 'defult';
    },
  },
});

export const { actions: loginpageActions } = slice;

export const useLoginpageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useUserSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
