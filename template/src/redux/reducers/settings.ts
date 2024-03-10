/* eslint-disable */

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LanguageInterface {
  name: string;
  sortName: string;
}

export interface ThemeInterface {
  myTheme: string;
}

export interface SettingsState {
  languages: Array<LanguageInterface>;
  defaultLanguage: LanguageInterface;
  defaultTheme: ThemeInterface;
}

const supportedLanguages: Array<LanguageInterface> = [
  { name: "English", sortName: "en" },
  { name: "Arabic", sortName: "ar" },
  { name: "French", sortName: "fr" },
];

const initialState: SettingsState = {
  languages: supportedLanguages,
  defaultLanguage: supportedLanguages[0],
  defaultTheme: { myTheme: "light" },
};

const settingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    saveDefaultLanguage: (state, action: PayloadAction<LanguageInterface>) => {
      const languageExists = state.languages.some(
        (lang) => lang.sortName === action.payload.sortName,
      );
      if (languageExists) {
        state.defaultLanguage = action.payload;
      } else {
        console.error("Language not found in the list.");
      }
    },
    saveDefaultTheme: (state, action: PayloadAction<ThemeInterface>) => {
      state.defaultTheme = action.payload;
    },
  },
});

export const { saveDefaultLanguage, saveDefaultTheme } = settingSlice.actions;

export default settingSlice.reducer;
