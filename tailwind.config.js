/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        72: "18.8rem",
        74: "19.375rem",
        97: "22.625rem",
        100: "31rem",
        200: "71.25rem",
      },
      maxWidth: {
        "xs-2": "8.1rem",
        "xs-3": "7.8rem",
      },
      maxHeight: {
        "xs-2": "10rem"
      },
      lineHeight: {
        11: "3.68rem",
      },
      fontSize: {
        "sm-2": "1rem",
        "sm-3": "0.82rem",
      },
      padding: {
        22: "5.6rem",
        "general-top-padding": "2.9rem",
      },
      borderColor: {
        "bg": '#FCB045',
      },
    },
  },
  plugins: [],
};
