/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EC994B",
        secondary: "#D61C4E",
        gray: { light: "#F1EEE9", dark: "#73777B" },
      },
    },
  },
  plugins: [],
};
