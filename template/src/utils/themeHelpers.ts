import { ThemeMode } from "src/typings/global";
import { Appearance } from "react-native";
import { setItem } from "src/services/apiService";

export const changeTheme = (mode: ThemeMode) => {
  setItem("defaultTheme", {myTheme: mode});
  Appearance.setColorScheme(mode);
};
