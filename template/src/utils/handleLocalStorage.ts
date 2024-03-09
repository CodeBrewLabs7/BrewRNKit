import { saveUserData } from "@redux/reducers/auth";
import { saveDefaultLanguage, saveDefaultTheme } from "@redux/reducers/settings";
import store from "@redux/store";
import i18n from "i18next";
import { UnistylesRuntime } from "react-native-unistyles";
import { getItem } from "src/services/apiService";

const { dispatch } = store;

export const checkLocalStorage = () =>{
     // get user Data
     const userData = getItem("userData");
     if (userData) {
       dispatch(saveUserData(userData));
     }
     // get default theme
     const defaultTheme = getItem("defaultTheme");
     if (defaultTheme) {
       // @ts-ignore
       UnistylesRuntime.setTheme(defaultTheme.myTheme)
       // @ts-ignore
       dispatch(saveDefaultTheme(defaultTheme));
     }
     // get default language
     const defaultLanguage = getItem("defaultLanguage");
     if (defaultLanguage) {
       // @ts-ignore
       i18n.changeLanguage(defaultLanguage.sortName);
       // @ts-ignore
       dispatch(saveDefaultLanguage(defaultLanguage));
     }
}