// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
        blog: ['Bangers', 'cursive'],
        photo: ['Bungee Shade', 'cursive'],
        drawing: ['Rock Salt', 'cursive'],
        project: ['Lily Script One', 'cursive'],
        about: ['Oleo Script', 'cursive'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
