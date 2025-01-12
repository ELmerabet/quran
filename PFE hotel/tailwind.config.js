/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alqalam: ["AlQalamQuran", "serif"], // Register the AlQalam font
      },
    },
  },
  plugins: [],
};
