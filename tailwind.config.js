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
        MontserratBold: ['MontserratBold', 'Arial'],
        Nunito: ['Nunito', 'Arial'],
      }
    },
  },
  plugins: [],
}

