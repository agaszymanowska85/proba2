/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};
