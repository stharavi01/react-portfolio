/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: '#111',
      lightBlack: '#202020',
      lightWhite: '#aaa',
      darkWhite: '#777',
      gray: '#e1e1e1',
      darkGray: '#505050',
      white: '#FFFFFF',
      softOrange: '##03AED2',
    },
    extend: {
      fontFamily: {
        // Custom-name: ["actual name (in src prop)" in index.css]
        'OpenSauce-Bold': ['OpenSauce-Bold', 'sans-serif'],
        'OpenSauce-Light': ['OpenSauce-Light', 'sans-serif'],
        'BebasNeue': ['Bebas Neue', 'sans-serif'],
        'MontrealMedium': ['PP Neue Montreal Medium', 'sans-serif'],
        'MontrealBold': ['PP Neue Montreal Bold', 'sans-serif'],
      },

    },
  },
  plugins: [],
}

