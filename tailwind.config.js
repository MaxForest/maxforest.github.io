/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,json}",
  ],  
  safelist: [
    'text-2xl',
    'text-3xl',
    {
      pattern: /text-gray-800/,
    },
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 1.5s ease-in infinite alternate'
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}