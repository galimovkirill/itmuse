module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1200px",
      },
    },

    colors: {
      white: "#fff",
      black: "#000",
      green: {
        500: "#1eae5a",
      },
      orange: {
        500: "#fd7f23",
        550: "#fd7614",
      },
      gray: {
        500: "#e1e1e1",
      },
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
