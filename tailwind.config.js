/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 2s",
        "ping-slow": "ping .8s",
        wiggle: "wiggle .3s ease-in",
        btn: "btn 1s ease-in-out infinite",
        cart: "cart 3s ease-in-out infinite",
      },
      boxShadow: {
        outline: "3px 3px 0 0 #2D3C4C",
      },
      backgroundColor: {
        secondary: "#161D25",
        primary: "#F2F2F5",
      },
      colors: {},
      container: {
        center: true,
        padding: "2rem",
      },
      keyframes: {
        wiggle: {
          "0%": { scale: "0.1" },
          "100%": { scale: "1" },
        },
        btn: {
          "0%,100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
        cart: {
          "0%,100%": { transform: "translateX(100px)" },
          "50%": { transform: "translateY(0)" },
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio", require("@tailwindcss/container-queries")),
  ],
};
