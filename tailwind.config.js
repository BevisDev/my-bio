/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
      },
      colors: {
        primary: "#F62682",
        second: "#f7f5f2",
      },
    },
  },
  plugins: [],
};
