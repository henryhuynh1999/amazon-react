/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 2s",
        "ping-slow": "ping .8s",
      },
      boxShadow: {
        outline: "3px 3px 0 0 #2D3C4C",
      },
      container: {
        center: true,
        padding: "10rem",
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
