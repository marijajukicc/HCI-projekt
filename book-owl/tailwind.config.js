/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'della-respira': ['"Della Respira"'],
      },
      colors: {
        'swamp-green': '#9dab7b',
        'shingle-fawn': '#724e34',
        'shingle-fawn-dark': '#2c1d13',
        'light-brown': '#a16f49',
      },
    },
  },
  plugins: [],
}
