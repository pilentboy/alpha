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
        test: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
    },
  },
  plugins: [],
};
