// ThemeContext.jsx

import { createContext, useState } from "react";

// Create the context
export const ThemeContext = createContext();

// Theme provider component
export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode((prev) => !prev);
  }

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}