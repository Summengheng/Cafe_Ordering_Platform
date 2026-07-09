import type { Config } from "tailwindcss";
import { theme } from "./theme/theme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  darkMode: ["class"],
  theme: {
    extends: {
      colors: {
        restaurant: {
          primary: "#2563eb",
          secondary: "#7c3aed",
          background: "#f8fafc",
          surface: "#ffffff",
          success: "#22c55e",
          warning: "#f59e06",
          error: "#ef444",
          text: {
            DEFAULT: "#111827",
            muted: "#6b7280",
          },
          border: "#e5e7eb",
        },
      },
      borderRadius: {
        card: "1rem",
      },
      boxShadow: {
        card: "0 4px 6px rgba(0 1px 2px rgba(0,0,0,0.05))",
      },
    },
  },
} satisfies Config;
