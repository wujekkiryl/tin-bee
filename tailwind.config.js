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
      textSecondary: '#3B3C3E',
      borderSecondary: '#BCBCBD',
      placeholderText: '#5B5C5E',
      placeholderBackground: '#EEEFF0',
      white: '#FFFFFF',
      blue: '#0F75B8',
      purple: '#6B3C9B',
    },
    extend: {
      boxShadow: {
        box: '0px 1px 5px rgba(0, 0, 0, 0.05), 0px -1px 5px rgba(0, 0, 0, 0.05)',
        bottomWhite: '0px 0px 30px 20px #FFF',
      },
    },
  },
  plugins: [],
};
