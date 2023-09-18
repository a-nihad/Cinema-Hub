/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#212529",
          200: "#121212",
          300: "#000000",
        },
        yellow: "#F4C518",
        blue: "#5798EE",
      },
    },
  },
  plugins: [],
};
