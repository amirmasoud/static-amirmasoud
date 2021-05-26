// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      orange: colors.orange,
      pink: colors.pink,
    },
    extend: {
      fontFamily: {
        heading: ['Antic Didone', ...defaultTheme.fontFamily.sans],
        sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
        blog: ['Bangers', 'cursive'],
        photo: ['Bungee Shade', 'cursive'],
        drawing: ['Rock Salt', 'cursive'],
        project: ['Lily Script One', 'cursive'],
        about: ['Oleo Script', 'cursive'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-rtl'),
  ],
}
