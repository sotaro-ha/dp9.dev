const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./styles/globals.css"
  ],
  options: {
    safelist: {
      standard: [/^bg-/, /^text-/],
    },
  },
  theme: {
    colors: {
      primary: "#0079FF",
      secondary: "#FFA300",
      black: "#333333",
      black2: "#000000",
      white: "#FFFFFF",
      white2: "#FBFBFB",
      gray: "#D9D9D9",
      gray2: "#858897",
      yellow: "#FFB300",
    },
    screens: {
      xs: "400px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        noto: ['"Noto Sans JP"', "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow:
            "1px 1px 0 #000 , -1px -1px 0 #000 , 1px -1px 0 #000 , -1px 1px 0 #000",
        },
        ".text-shadow-hover": {
          textShadow: "none"
        }
      };

      addUtilities(newUtilities);
    },
  ],
};