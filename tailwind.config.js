/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", './js/**/*.js',],
  theme: {
    screens: {
      sm: '400px',
      md: '600px',
      lg: '976px',
      xl: '1440px'
    },
    fontSize: {
      xsm: '8px',
      sm: '11px',
      base: '14px',
      mid: '18px',
      midder: '20px',
      xl: '25px',
      xxl: '30px',
    },
    extend: {
      colors: {
        orange: "hsl(26, 100%, 55%)",
        paleOrange: "hsl(25, 100%, 70%)",
        veryDarkBlue: "hsl(220, 13%, 13%)",
        darkGrayishBlue:" hsl(219, 9%, 45%)",
        grayishBlue: "hsl(220, 14%, 75%)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",
        black: "hsl(0, 0%, 0%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
}

