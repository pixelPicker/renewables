/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'Arial'],
        Nunito: ['Nunito', 'Arial'],
      }
    },
  },
  plugins: [],
}

