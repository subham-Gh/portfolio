/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // for dark / light toggle
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4f46e5",
          DEFAULT: "#4338ca",
          dark: "#312e81",
        },
        accent: "#f97316",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15,23,42,0.35)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: 0, transform: "translateX(-30px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease-out forwards",
        "slide-in-left": "slide-in-left 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
