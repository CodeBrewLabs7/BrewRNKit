import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LanguageInterface {
  name: string;
  sort_name: string;
}

export interface ThemeInterface {
  myTheme: string
}

export interface SettingsState {
  languages: LanguageInterface[];
  defaultLanguage: LanguageInterface;
  defaultTheme: ThemeInterface;
}

const supportedLanguages: LanguageInterface[] = [
  { name: "English", sort_name: "en" },
  { name: "Arabic", sort_name: "ar" },
  { name: "French", sort_name: "fr" },
];

const initialState: SettingsState = {
  languages: supportedLanguages,
  defaultLanguage: supportedLanguages[0],
  defaultTheme: {myTheme:"light"},
};

const settingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    saveDefaultLanguage: (state, action: PayloadAction<LanguageInterface>) => {
      const languageExists = state.languages.some(
        (lang) => lang.sort_name === action.payload.sort_name
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

export const { saveDefaultLanguage,saveDefaultTheme } = settingSlice.actions;

export default settingSlice.reducer;
