const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', './public/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0ED3CF',
        teal: colors.teal
      },
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/forms'),],
}
