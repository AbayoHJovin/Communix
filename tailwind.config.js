/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./app.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  content: [
    "./App.{js,ts,jsx,tsx}", // App.js or App.tsx file (or similar main entry files)
    "./components/**/*.{js,ts,jsx,tsx}", // If you have a 'components' folder, include it
    "./screens/**/*.{js,ts,jsx,tsx}", // If you have a 'screens' folder, include it
    "./navigation/**/*.{js,ts,jsx,tsx}", // If you have a 'navigation' folder, include it
    "./assets/**/*.{js,ts,jsx,tsx}" // If you have assets or images
  ],
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
