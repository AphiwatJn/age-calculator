/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        purple: "hsl(259, 100%, 65%)",
        lightRed: "hsl(0, 100%, 67%)",
        White: "hsl(0, 0%, 100%)",
        Off_white: "hsl(0, 0%, 94%)",
        Light_grey: "hsl(0, 0%, 86%)",
        Smokey_grey: "hsl(0, 1%, 44%)",
        Off_black: "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
