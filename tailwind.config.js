/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#333536',
        'secondary': 'rgb(167, 197, 243)'
      },
    },
  },
  plugins: [],
}

