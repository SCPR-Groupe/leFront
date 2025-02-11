/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        sombre : '#333647',
        jaune : '#fec15f',
        blanc : '#e8e9eb',
      }
    },
  },
  plugins: [],
}