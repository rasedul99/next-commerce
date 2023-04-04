/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",

        black: "#2B4964",
        "grey-darkest": "#626471",
        "grey-darker": "#878c98",
        "grey-dark": "#adb4c2",
        grey: "#d5d9e3",
        "grey-light": "#dee1e8",
        "grey-lighter": "#eaebef",
        "grey-lightest": "#fcfcfc",
        white: "#ffffff",
        primary: "#2b79c1",
        "primary-dark": "#266299",
      },
    },
  },
  plugins: [],
};
