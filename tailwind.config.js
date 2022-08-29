/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        notes: "repeat(auto-fill,minmax(270px,1fr))",
      },
    },
  },
  plugins: [],
};
