/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        overTwo: "2/1",
        video: "16 / 9",
        height: "1/2",
      },
      colors: {
        blue: "#4eaff3",
        navy: "#1e3a53",
        green: "#1b685f",
        primary: {
          100: "#FF6363",
          200: "#F7FBFC",
          300: "#fbbb24",
          400: "#A2A7B3",
          500: "#fafafa",
        },
        secondary: {
          100: "#808285",
          200: "#27323F",
          300: "#48515b",
          400: "#9CA7AB",
          500: "#666666",
        },
        button: {
          100: "#27323f",
        },
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
      space: ({ theme }) => ({
        ...theme("spacing"),
      }),
      spacing: {
        half: "30%",
        thrice: "75%",
        quater: "90%",
        55: "55%",
        45: "45%",
        44.5: "20rem",
        extraLgW: "600px",
        extraLgH: "400px",
        900: "900px",
        18: "4.5rem",
        13: "3.25rem",
        5: "1.189rem",
        8: "2.2rem",
        22: "5.5rem",
        50: "12.5rem",
        68: "16.59rem",
        74: "17.25rem",
        76: "18.5rem",
        78: "19rem",
        82: "20.5rem",
        84: "21.5rem",
        90: "22.2rem",
        92: "23.2rem",
        94: "23.6rem",
        97: "24rem",
        98: "25.5625rem",
        100: "30rem",
        200: "720px",
        150: "600px",
        "-1": "-1rem",
        "-1.5": "-1.5rem",
        "-2": "-2rem",
      },
      fontSize: {
        "4.5xl": ["2.32rem", { lineHeight: "3rem" }],
        "2.5xl": ["1.7rem", { lineHeight: "2.5rem" }],
      },
      minHeight: {
        px: "1px",
        0: "0px",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
        18: "4.5rem",
        13: "3.25rem",
        8: "2.2rem",
        22: "5.5rem",
        74: "17.25rem",
        76: "18.5rem",
        78: "19rem",
        82: "20.5rem",
        84: "21.5rem",
        90: "22.2rem",
        92: "23.2rem",
        94: "23.6rem",
        98: "25.5625rem",
        100: "30rem",
        200: "720px",
      },
    },
  },
  plugins: [],
};
