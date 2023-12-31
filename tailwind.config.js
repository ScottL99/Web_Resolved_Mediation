/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "410px",
      sm: "720px",
      lg: "1024px",
      xl: "1440px",
      xxl: "1920px",
      sp: "2020px",
    },

    extend: {
      fontFamily: {
        HN_Regular: ["HN01", "sans-serif"],
        HN_Bold: ["HN02", "sans-serif"],
        HN_CondensedBold: ["HN05", "sans-serif"],
        HN_UltraLight: ["HN06", "sans-serif"],
        HN_Light: ["HN08", "sans-serif"],
        HN_CondensedBlack: ["HN10", "sans-serif"],
        HN_Medium: ["HN11", "sans-serif"],
        HN_Thin: ["HN13", "sans-serif"],
      },
      colors: {
        orange: "#ea5626",
        gray: "#e6e6e6",
        brown: "#452516",
        lightOrange: "#EC663B",
        darkOrange: "#EB3426",
        charcoal: "#6d6e71",
      },
    },
  },
  plugins: [],
};
