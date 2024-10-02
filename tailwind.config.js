/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
        'sixtyfour': ['"Sixtyfour Convergence"', 'sans-serif'],
        'freckle': ['"Freckle Face"', 'cursive'],
        'griffy': ['"Griffy"', 'cursive'],
        'syncopate': ['"Syncopate"', 'sans-serif'],
        'audiowide': ['"Audiowide"', 'sans-serif'],
        'monoton': ['"Monoton"', 'cursive'],
      },
    },
  },
  plugins: [],
}