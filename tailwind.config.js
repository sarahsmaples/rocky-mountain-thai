/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.njk", "./src/**/*.html", "./src/**/*.md"],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#141e21',
        'accent': '#ccbc89',
        'light-blue': '#4a9db8',
      },
      fontFamily: {
        'cormorant': ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
};
