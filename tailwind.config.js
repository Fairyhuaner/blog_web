/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/views/**/*.{vue,js,ts}',
    './src/views/*.vue',
    // './components/**/*.{vue,js,ts}',
    // './layouts/**/*.vue',
    // './pages/**/*.vue',
    // './composables/**/*.{js,ts}',
    // './plugins/**/*.{js,ts}',
    './src/App.{js,ts,vue}'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('daisyui') //
    // require('./build/tailwind/base.js')
  ]
}
