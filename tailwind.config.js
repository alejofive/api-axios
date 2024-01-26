/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "rgb(158, 158, 158)",
          200: "rgb(39, 43, 51)",
        },
      },
    },
  },
  plugins: [],
};
