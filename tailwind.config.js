/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "dark-beige": "#ECE9DE",
        "japan-blue": "#0B52AD",
        "lake-blue": "#A4C5E6",
        "lemon-yellow": "#F2D500",
        "light-beige": "#F5F3F3",
        "light-white": "#FBFBFB",
        brand: {
          light: colors.rose[100],
          DEFAULT: colors.rose[500],
          dark: colors.rose[700],
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}
