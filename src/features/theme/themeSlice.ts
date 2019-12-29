import { createSlice } from '@reduxjs/toolkit';

export const ThemeMode = {
  DARK: 'DARK',
  LIGHT: 'LIGHT',
};

const themeSlice = createSlice({
  name: 'themeMode',
  initialState: ThemeMode.LIGHT,
  reducers: {
    setThemeMode(state, action) {
      return action.payload;
    },
  },
});

export const { setThemeMode } = themeSlice.actions;

export default themeSlice.reducer;
