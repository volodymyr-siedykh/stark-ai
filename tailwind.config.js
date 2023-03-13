module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        'main-blue': '#4485FD',
        'black-primary': '#333333',
        'black-secondary': '#505050',
        'black-light': '#6D6D6D',
        'pale-cyan': '#E8F7FE',
        'pale-pink': '#FBE7E8',
        'pale-yellow': '#FEF9E6',
        'pale-green': '#E0F5F0',
        'white-smoke': '#F6FAFD',
      },
    },
  },
  plugins: [],
};