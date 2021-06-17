import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.counter || initialState;

export const selectCounter = createSelector([selectSlice], state => state);
