import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const themes = {
  light: {
    name: 'light',
    '--bg-color': '#e0e0e0', // softer gray
    '--text-color': '#1a1a1a', // darker text
    '--icon-color': '#3d3d3d', // muted dark icon
    '--focus-progress-color': '#388e3c',          // Deep green
    '--focus-progress-trail-color': '#9e9e9e',    // Neutral gray
    '--break-progress-color': '#81c784',          // Soft green
    '--break-progress-trail-color': '#c8c8c8',
    '--homepage-bg': '#f0f0f0',
  },
  blue: {
    name: 'blue',
    '--bg-color': '#bbdefb', // toned-down sky blue
    '--text-color': '#08306b', // deeper navy
    '--icon-color': '#0d47a1', // richer blue
    '--focus-progress-color': '#1565c0',          // Strong blue
    '--focus-progress-trail-color': '#90caf9',    // Lighter blue
    '--break-progress-color': '#64b5f6',          // Soft blue
    '--break-progress-trail-color': '#bbdefb',
    '--homepage-bg': '#e3f2fd',
  },
  orange: {
    name: 'orange',
    '--bg-color': '#ffe0b2', // warm light orange
    '--text-color': '#bf360c', // deep burnt orange
    '--icon-color': '#ef6c00', // mid-bright accent
    '--focus-progress-color': '#ef6c00',          // Bold orange
    '--focus-progress-trail-color': '#ffcc80',    // Light orange
    '--break-progress-color': '#ffb74d',          // Softer orange
    '--break-progress-trail-color': '#ffe0b2',
    '--homepage-bg': '#fff3e0',
  },
  green: {
    name: 'green',
    '--bg-color': '#c8e6c9', // gentle leafy green
    '--text-color': '#1b5e20', // dark forest green
    '--icon-color': '#2e7d32',
    '--focus-progress-color': '#2e7d32',          // Dark leafy green
    '--focus-progress-trail-color': '#a5d6a7',    // Mid green
    '--break-progress-color': '#66bb6a',          // Softer green
    '--break-progress-trail-color': '#c8e6c9',
    '--homepage-bg': '#e8f5e9',
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
