import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ["**/*.{jsx,tsx,css}"],
    exclude: ["node_modules", ".git", ".next"],
  },
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#0862a0",
          light: "#0c8de5",
        },
        secondary: "#80cbff19",
      },
    },
  },
});
