const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        "ted-red": "#e62b1e",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
