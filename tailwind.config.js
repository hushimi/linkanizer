module.exports = {
  purge: ['./src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {},
  variants: {
    extend: {
      outline: ['focus']
    },
  },
  corePlugins: {
    outline: false
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
