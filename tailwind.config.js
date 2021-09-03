module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'lightBlue': '#66FCF1',
        'blue': '#45A29E',
        'lightGray': '#C5C6C7',
        'darkGray': '#1F2833',
        'black': '#0B0C10',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}