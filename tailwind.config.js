/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#004394",
        "background-light": "#f5f7f8",
        "background-dark": "#0f1823",
      },
    },
  },
  plugins: [],
};