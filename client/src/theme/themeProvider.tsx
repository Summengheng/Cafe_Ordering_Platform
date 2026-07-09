import { createContext, useContext, type ReactNode } from "react";
import type { ThemeType } from "./theme";
import { theme } from "./theme";

const ThemeContext = createContext<ThemeType | undefined>(undefined);

interface CustomThemeProviderProps {
  children: ReactNode;
}

export const CustomThemeProvider = ({ children }: CustomThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("use theme must be used within CustomThemeProvider");
  }
  return context;
};
