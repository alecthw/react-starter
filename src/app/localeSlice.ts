import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export const reducerName = 'locale';

const initialState: string = 'zh-CN';

export const localeSlice = createSlice({
  name: reducerName,
  initialState,

  reducers: {
    changeLocale: (state: string, action: PayloadAction<string>) => {
      state += action.payload;
    },
  },

  selectors: {
    selectLocale: (locale) => locale,
  },
});

export const { changeLocale } = localeSlice.actions;

export const { selectLocale } = localeSlice.selectors;
