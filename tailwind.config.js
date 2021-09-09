module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF8C00',
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
