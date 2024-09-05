/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './libs/**/*.{html,ts}'],
  theme: {
    fontFamily: {
      sans: ['"Inter"', 'sans-serif'],
    },
    colors: {
      textPrimary: '#1B1C1E',
    },
    extend: {},
  },
  plugins: [],
};
