
import i18n from "i18next";
import { saveUserData } from "@redux/reducers/auth";
import store from "@redux/store";
import { getItem } from "src/services/apiService";
import { Appearance } from "react-native";
import { saveDefaultLanguage, saveDefaultTheme } from "@redux/reducers/settings";

const { dispatch } = store;

export const checkLocalStorage = () =>{
     //get user Data
     let userData = getItem("userData");
     if (!!userData) {
       dispatch(saveUserData(userData));
     }
     //get default theme
     let defaultTheme = getItem("defaultTheme");
     if (!!defaultTheme) {
       //@ts-ignore
       Appearance.setColorScheme(defaultTheme.myTheme);
       //@ts-ignore
       dispatch(saveDefaultTheme(defaultTheme));
     }
     //get default language
     let defaultLanguage = getItem("defaultLanguage");
     if (!!defaultLanguage) {
       //@ts-ignore
       i18n.changeLanguage(defaultLanguage.sort_name);
       //@ts-ignore
       dispatch(saveDefaultLanguage(defaultLanguage));
     }
}