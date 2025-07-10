import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const themes = {
  light: {
    name: 'light',
    '--bg-color': '#ffffff',
    '--text-color': '#000000',
  },
  dark: {
    name: 'dark',
    '--bg-color': '#121212',
    '--text-color': '#ffffff',
  },
  blue: {
    name: 'blue',
    '--bg-color': '#e0f7fa',
    '--text-color': '#004d40',
  },
  highContrast: {
    name: 'highContrast',
    '--bg-color': '#000000',
    '--text-color': '#ffea00',
  },
};

export const CustomThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light');

  const setThemeVariables = (themeObj) => {
    Object.entries(themeObj).forEach(([key, value]) => {
      if (key.startsWith('--')) {
        document.documentElement.style.setProperty(key, value);
      }
    });
  };

  useEffect(() => {
    setThemeVariables(themes[themeName]);
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName, availableThemes: Object.keys(themes) }}>
      {children}
    </ThemeContext.Provider>
  );
};
