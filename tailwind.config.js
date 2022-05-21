const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Uber Move", ...defaultTheme.fontFamily.sans],
        'uberbold':['Uber Move Bold'],
        'uberlight':['Uber Move Light'],
        'ubermedium':['Uber Move Medium'],
        'ubertext':['Uber Move Text'],
      },
    },
  },
  plugins: [],
};
