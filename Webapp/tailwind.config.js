const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        blob: "blob 10s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
      colors: colors,
      colors: {
        backgroundC: "#6042F5",
        mainTextC: "#FAE09B",
        primaryC: "#FFFF",
        secondaryC: "#f7f9fb",
        shC: "#64748B",
        ghC: "#475569",
        phC: "#F1F5F9",
        pcC: "#1E293B",
        fC: "#334155",
        dPrimary: "#0e1526",
        dSecondary: "#1c2739",
        dHeading: "#18142c",
        dHeadingC: "#94A3B8",
      },
      rotate: {
        350: "350deg",
        20: "20deg",
      },
    },
    colors: colors,
    container: {
      center: true,
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
};
