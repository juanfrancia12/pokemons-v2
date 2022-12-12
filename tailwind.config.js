/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{js,ts,jsx,tsx}"],
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#8e9ba4", // color text secondary - grises
          200: "#19252D", // box shadow cards
          300: "#304A5C", // border color input - selects
          400: "#B7C1C8", // color text primary - blancos
          500: "#273B49", // background input
          600: "#28353E", // background select
          700: "#212E36", // background card
          800: "#1B2831", // background page
          900: "#192229", // header - footer - background bottom ver mas
        },
      },
    },
  },
  plugins: [],
}
