/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      default: '#000000',
      primary: 'rgba(36, 13, 87, 1)',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      darkGray: 'rgba(79, 79, 79, 1)',
      envitedGradient: 'linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)',
    },
    extend: {},
  },
  plugins: [],
}
