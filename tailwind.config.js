const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.violet['700'],
      },
      minWidth: {
        300: '300px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
