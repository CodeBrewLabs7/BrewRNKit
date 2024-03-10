import type { LanguageInterface } from "@redux/reducers/settings";
import i18n from "i18next";
import { I18nManager } from "react-native";
import RNRestart from "react-native-restart";
import { setItem } from "src/services/apiService";

const changeLanguage = (lng: LanguageInterface) => {
  if (i18n.language === lng.sortName) {
    return;
  }
  setItem("defaultLanguage", lng);
  i18n.changeLanguage(lng.sortName);
  const isArabic = lng.sortName === "ar";
  I18nManager.forceRTL(isArabic);
  RNRestart.restart();
};

export default changeLanguage;
