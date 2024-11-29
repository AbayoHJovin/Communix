/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontFamily: {
        poppinsBlack: ["Poppins-Black"],
        poppinsBold: ["Poppins-Bold"],
        poppinsExtrabold: ["Poppins-ExtraBold"],
        poppinsExtralight: ["Poppins-ExtraLight"],
        poppinsLight: ["Poppins-Light"],
        poppinsMedium: ["Poppins-Medium"],
        poppinsRegular: ["Poppins-Regular"],
        poppinsSemibold: ["Poppins-SemiBold"],
        poppinsThin: ["Poppins-Thin"],
      },
    },
  },
  plugins: [],
};
