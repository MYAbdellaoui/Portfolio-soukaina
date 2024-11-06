module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      signature: ["Great Vibes", "cursive"],
    },
    colors: {
      gray: "#818181",
      "light-gray": "#D9D9D9",
      black: "#17191b",
      primary: "#d39a8e", // blue
      // primary: '#007FFF', // light blue
      // primary: '#E76F00', // orange
      white: "#FFFFFF",
      transparent: "transparent",
    },
    extend: {
      backgroundImage: () => ({
        "hero-pattern": 'url("")',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
