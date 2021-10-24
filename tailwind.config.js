module.exports = {
  purge: [
    "./src/components/*.js", "./src/pages/*.js"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'splash-image': "url('../img/splash-image_dark.jpg')"
      },
      fontFamily: {
        'display': ['Cirka'],
        'body': ['Pangram'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
