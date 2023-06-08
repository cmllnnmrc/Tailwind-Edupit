/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#0EB582',
        'dark': '#2A374C',
        'light': '#FFFFFF',
        'dgrey': '#444',
        'lblue': '#18406b'
      },

      screens:{
        'lg': '1024px',
        'md': '768px',
        'sm': '500px'
      },

      backgroundImage: {
        'banner-bg': 'url("./edupit-img/banner-bg.jpg")'
      },
    },
  },
  plugins: [],
}

