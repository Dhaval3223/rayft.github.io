import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.singup || initialState;

export const selectSingup = createSelector(
  [selectSlice],
  state => state,
);
