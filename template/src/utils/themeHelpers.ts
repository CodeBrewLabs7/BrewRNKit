import { ThemeMode } from "src/typings/global";
import { Appearance } from "react-native";
import { setItem } from "src/services/apiService";
import { UnistylesRuntime } from "react-native-unistyles";

export const changeTheme = (mode: ThemeMode) => {
  setItem("defaultTheme", {myTheme: mode});
  UnistylesRuntime.setTheme(mode)
  // Appearance.setColorScheme(mode);
};
