const constantsColors = {
  danger: "#dc3545",
  grey: "#B0B0B0",
  black: "#000000",
  white: "#ffffff",
  blue: "#001EB9",
  light: "#f8f9fa",
};
export const lightTheme = {
  colors: {
    ...constantsColors,
    typography: "#000000",
    background: "#ffffff",
    barStyle: "dark-content",
    opacity50: "rgba(1,1,1,0.5)",
    textInputColor: "rgba(217, 217, 217,0.2)",
    placeholder: "rgba(1,1,1,0.52)",
    darkwhite: "#000000",
  },
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
} as const;

export const darkTheme = {
  colors: {
    ...constantsColors,
    typography: "#ffffff",
    background: "#000000",
    barStyle: "light-content",
    opacity50: "rgba(201, 201, 201,0.5)",
    textInputColor: "#000000",
    placeholder: "#f8f9fa",
    darkwhite: "#ffffff",
  },
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
} as const;
