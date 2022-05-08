module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        lightRed: '#ff8c66',
        softBlue: '#56c2e6',
        lightRedStudy: '#ff5c7c',
        limeGreen: '#4acf81',
        violet: '#7536d3',
        softOrange: '#f1c65b',
        veryDarkBlue: '#0f1424',
        darkBlue: '#1c1f4a',
        desaturatedBlue: '#6f76c8',
        paleBlue: '#bdc1ff'
      },

      fontFamily: {
        'Rubik': ['Rubik', 'sans-serif']
      },
      
    },
  },
  plugins: [],
}