/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E6A500",      // soft golden yellow
        secondary: "#FBEED7",    // fall beige
        accent: "#C46A00",       // warm orange-brown
        background: "#FFFBF5",   // off-white
      },
      fontFamily: {
        sans: ["Poppins", "Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
