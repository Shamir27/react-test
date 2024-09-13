/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E9FE97",
        black: '#111111',
        gray1: '#F6F6F6',
        cyan1: '#C7D0FF'
      },
      fontSize: {
        xs: "12px",
        sm: '14px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': "60px",
      },
      screens: {
        main: "1420px",
        main_min: { min: "1420px" },
        main_md: { min: "920px" },
      },
    },
  },
  plugins: [],
};
