export const lightTheme = {
    colors: {
      typography: '#000000',
      background: '#ffffff',
      barStyle:"dark-content"
    },
    margins: {
      sm: 2,
      md: 4,
      lg: 8,
      xl: 12
    }
  } as const
 
  export const darkTheme = {
    colors: {
      typography: '#ffffff',
      background: '#000000',
      barStyle:"light-content"
    },
    margins: {
      sm: 2,
      md: 4,
      lg: 8,
      xl: 12
    }
  } as const
 
  // define other themes