import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { bookmarkSaga } from './saga';
import { BookmarkState } from './types';

export const initialState: BookmarkState = {
  bookmarks:[
    {
      id:''
    }
  ],
};

const slice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    bookmark(state,action: PayloadAction<string>) {
      state.bookmarks.push({id:action.payload})
    },
  },
});

export const { bookmark } = slice.actions;

export const useBookmarkSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: bookmarkSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useBookmarkSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */