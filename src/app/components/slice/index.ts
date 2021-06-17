import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { counterSaga } from './saga';
import { CounterState } from './types';

export const initialState: CounterState = {
  counter: 0,
};

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    increment: state => {
      state.counter += 1;
    },
    decrement: state => {
      state.counter -= 1;
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload;
    },
  },
});

export const { actions: counterActions } = slice;

export const useCounterSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: counterSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useCounterSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
