module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0ED3CF",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
