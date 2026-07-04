/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'], hand: ['Kalam', 'cursive'] },
      colors: {
        ink: '#0b0b0f',
        cream: '#faf7f2',
      }
    }
  },
  plugins: [],
}
