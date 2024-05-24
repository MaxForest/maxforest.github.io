/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,json}",
  ],  
  safelist: [
    {
      pattern: /text-(gray)-.+/,
    }
  ],
  theme: {
    colors: {
      'forest-green':'rgb(112 173 71)',
      gray: colors.slate,
    },
    extend: {
      animation: {
        'bounce-slow': 'bounce 1.5s ease-in infinite alternate'
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}