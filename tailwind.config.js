const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          DEFAULT: '#8447ff',
          dark: '#6336bf',
          darkest: '#422480',
        },
        secondary: {
          DEFAULT: '#ea54ff',
          dark: '#b03fbf',
          darkest: '#762a80',
        },
        error: {
          DEFAULT: '#ff331f',
        },

        black: colors.black,
        white: colors.white,
        gray: {
          dark: '#BDBDBD',
          light: '#E0E0E0',
        },
        red: colors.red,
        yellow: colors.amber,
        green: colors.emerald,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.violet,
        pink: colors.pink,
      },
    },
  },
  plugins: [],
};
