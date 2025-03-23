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
      colors: {},
    },
  },
  plugins: [daisyui],
};

export default config;
