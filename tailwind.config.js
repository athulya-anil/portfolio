export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5B642",      // main gold accent (used across buttons, glow, underline)
        secondary: "#FFF8E1",    // soft cream background (navbar / sections)
        accent: "#E5A932",       // deeper amber for hover states
        textAccent: "#B97A00",   // warm brown for subtitles and tag text
        dark: "#1A1A1A",         // primary dark text
        lightGray: "#EAEAEA",    // subtle borders / dividers
      },
      boxShadow: {
        glow: "0 0 25px rgba(245,182,66,0.6)", // consistent card & icon hover glow
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
