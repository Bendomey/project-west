const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#FBE7DB",
          100: "#FBE7DB",
          200: "#F8CBB9",
          300: "#ECA392",
          400: "#D97D71",
          500: "#C04946",
          600: "#A5333A",
          700: "#8A2332",
          800: "#6F162A",
          900: "#5C0D26", // initial
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
