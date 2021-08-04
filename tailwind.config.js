module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      translate: ['active', 'group-hover'],
      scale: ['active', 'group-hover'],
      display: ['hover', 'focus', 'group-hover'],
      ringWidth: ['hover', 'active', 'group-hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
