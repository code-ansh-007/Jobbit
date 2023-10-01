/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./components/**/**/*.{js, jsx, ts, tsx}", // Include nested files in components
    "./app/**/**/*.{js, jsx, ts, tsx}", // Include nested files in app
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
