/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Be Vietnam Pro", "sans-serif"],
      },
      colors: {
        primary: "#F62682",
        second: "#f7f5f2",
        thirth: "#222438",
        fourth: "#323239",
      },
    },
  },
  plugins: [],
};
