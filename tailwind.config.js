/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "6rem",
        },
      },
      colors: {
        primary: "#22e7da",
      },
      boxShadow: {
        navShadow: "0px 1px 8px 1px rgba(0,0,0,0.24)",
      },
      fontFamily: {
        yekan: ["YekanBakh"],
      },
    },
  },
  plugins: [],
};
