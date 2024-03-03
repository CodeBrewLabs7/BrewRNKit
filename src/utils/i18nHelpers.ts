
import i18n from 'i18next';
import { I18nManager } from 'react-native';
import { Language } from '../typings/global';
import RNRestart from 'react-native-restart'; 
import { setItem } from 'src/services/apiService';
import { LanguageInterface } from '@redux/reducers/settings';
 
export const changeLanguage = (lng: LanguageInterface) => {
  if(i18n.language !== lng.sort_name) {
    setItem('defaultLanguage', lng)
    i18n.changeLanguage(lng.sort_name);
    if(lng.sort_name == 'ar'){
      I18nManager.forceRTL(true)
      RNRestart.restart();
    }else{
      I18nManager.forceRTL(false)
      RNRestart.restart();
    }
  }
};