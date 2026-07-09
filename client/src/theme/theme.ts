import { colors } from "./colors";

export const theme = {
  colors,

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },

  radius: {
    none: "0",
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },

  shadow: {
    sm: "0 1px 2px rgba(0,0,0,0.05)",
    md: "0 4px 6px rgba(0,0,0,0.01)",
    lg: "0 10px 15px rgba(0,0,0,0.15)",
  },
};

export type ThemeType = typeof theme;
