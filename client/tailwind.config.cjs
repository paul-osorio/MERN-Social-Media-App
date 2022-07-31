/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "320px",
      tablet: "768px",
      laptop: "1024px",
    },
    extend: {
      boxShadow: {
        dark: "0px 2px 10px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
