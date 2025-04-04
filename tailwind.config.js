/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'trezor-green': '#1C7B3F',
        'trezor-dark': '#0F1615',
      },
    },
  },
  plugins: [],
};