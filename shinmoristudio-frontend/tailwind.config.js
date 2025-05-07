/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fell: ['"IM Fell English SC"', 'serif'],
        cinzel: ['"Cinzel Decorative"', 'serif'],
      },
      blur: {
        xs: '1px'
      }
    },
  },
  plugins: [],
}

