import { UnistylesRuntime } from "react-native-unistyles";
import { setItem } from "src/services/apiService";
import { ThemeMode } from "src/typings/global";

const changeTheme = (mode: ThemeMode) => {
  setItem("defaultTheme", { myTheme: mode });
  UnistylesRuntime.setTheme(mode);
};
export default changeTheme;
