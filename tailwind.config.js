/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#FFF3c5',
        secondary: '#D1D175',
        accent: '#382020',
        'accent-alternate': '#A6B7E5',
      },
    },
  },
  plugins: [],
};
