/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        orange: "#FF5555",
      },
      backgroundImage: {
        banner: "url('./banner.png')",
      },
    },
    fontFamily: {
      clash: ["Clash Display", "sans-serif"],
    },
  },
  plugins: [],
};
