/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        orange: "#FF5555",
      },
    },
    fontFamily: {
      clash: ["Clash Display", "sans-serif"],
    },
  },
  plugins: [],
};
