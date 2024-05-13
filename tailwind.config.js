/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 1.5s ease-in infinite alternate',
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}