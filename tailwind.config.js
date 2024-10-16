/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,tsx,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        stardom: ['stardom', 'sans'],
        satoshi: ['satoshi', 'sans']
      }
    }
  },
  plugins: []
}
