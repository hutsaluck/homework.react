/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'style': '#000 0 0 1px, #000 0 0 1px, #000 0 0 1px, #000 0 0 1px, #000 0 0 1px, #000 0 0 1px',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}