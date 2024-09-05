/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    './libs/**/*.{html,ts}',
    './node_modules/@angular/material/**/*.{css,scss}',
  ],
  theme: {
    fontFamily: {
      sans: ['"Inter"', 'sans-serif'],
    },
    colors: {
      textPrimary: '#1B1C1E',
      placeholderText: '#5B5C5E',
      placeholderBackground: '#EEEFF0',
    },
    extend: {},
  },
  plugins: [],
};
