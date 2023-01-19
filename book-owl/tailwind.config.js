/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
            '0%, 100%': {
                transform: 'rotate(-2deg)'
            },
            '50%': {
                transform: 'rotate(2deg)'
            },
        }
    },
    animation: {
        wiggle: 'wiggle ease-in-out 0.2s',
    },
      fontFamily: {
        'della-respira': ['"Della Respira"'],
        'pacifico':['"Pacifico"'],
      },
      colors: {
        'swamp-green': '#9dab7b',
        'shingle-fawn': '#724e34',
        'shingle-fawn-dark': '#2c1d13',
        'light-brown': '#a16f49',
        'grey': '#ede4db'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
