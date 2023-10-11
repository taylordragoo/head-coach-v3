const resolve = require('path').resolve
import flowbite from 'flowbite/plugin';
// const plugin = require('tailwindcss/plugin')
// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    resolve(__dirname, 'index.html'),
    resolve(__dirname, 'src/**/*.{vue,ts}'),
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ],
        'sans': [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ]
      },
      colors: {
        primary: {"50":"#f6f5f5","100":"#d8d2c9","200":"#cf454c", "250": "#9dc9ba","300":"#93c5fd","400":"#60a5fa","500":"#00aeef","600":"#2563eb","700":"#232C64","800":"#232C64","900":"#232C64","950":"#012d6b"}
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
  ],
}
