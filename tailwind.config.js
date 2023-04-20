/** @type {import('tailwindcss').Config} */
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
    },
    colors: {
      "dark-beige": "#ECE9DE",
      "japan-blue": "#0B52AD",
      "lake-blue": "#A4C5E6",
      "lemon-yellow": "#F2D500",
      "light-beige": "#F5F3F3",
      "light-white": "#FBFBFB",
    },
  },
  plugins: [],
}
