module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,svg}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0ED3CF",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
