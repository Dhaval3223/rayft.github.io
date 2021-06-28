import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.bookmark || initialState;

export const selectBookmark = createSelector(
  [selectSlice],
  state => state,
);
