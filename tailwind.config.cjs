import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{html,js,jsx,scss,css}",
    "./css/**/*.{html,js,jsx,scss,css}",
    "./components/**/*.{html,js,jsx,scss,css}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#ffe5e5",
          100: "#ffb3b3",
          200: "#ff8080",
          300: "#ff4d4d",
          400: "#ff1a1a",
          500: "#e60000",
          600: "#b30000",
          700: "#800000",
          800: "#660000",
          900: "#330000",
        },
        neutral: {
          50: "#ffffff",
          100: "#f9f9f9",
          200: "#f2f2f2",
          300: "#e6e6e6",
          400: "#cccccc",
          500: "#b3b3b3",
          600: "#999999",
          700: "#666666",
          800: "#333333",
          900: "#000000",
        },
        primary: {
          50: "#e7f5ff",
          100: "#cceeff",
          200: "#99ddff",
          300: "#66ccff",
          400: "#33bbff",
          500: "#00aaff",
          600: "#0088cc",
          700: "#006699",
          800: "#004466",
          900: "#002233",
        },
      },
    },
  },
  plugins: [daisyui],
};

export default config;
