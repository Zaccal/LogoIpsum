/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    screens: {
      'xl' : {'max': '992px'},
      'lg' : {'max': '780px'},
      'md' : {'max': '720px'},
      'sm' : {'max': '500px'},
    },
    container: {
      padding: '15px',
      center: true,
    },
    extend: {
      colors: {
        main: '#FF0D38',
        black: '#272727',
        blackTheme: '#0f172a',
        headerColor: '#4D4244',
        hoverColor: '#E20029',
        inputColor: '#747474',
        inputBackground: '#454545'
      },

      boxShadow: {
        'usual': '0px 0px 30px rgba(255, 13, 56, 0.21)'
      },

      inset: {
        'minusFull': '-100%',
      },

    },
  },
  plugins: [],
} 

