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
        'lblue': '#18406b',
        'lgreen': '#C6F9E9',
        'grey': '#777777',
        'dblue': '#4b5981',
      },

      screens:{
        'lg': '1024px',
        'md': '768px',
        'sm': '500px'
      },

      backgroundImage: {
        'banner-bg': 'url("./edupit-img/banner-bg.jpg")',
        'banner-img1': 'url("./edupit-img/banner-img1.png")',
        'banner-img2': 'url("./edupit-img/banner-img2.png")',
        'course-bg': 'url("./edupit-img/course-bg.png")',
      },

      keyframes: {
        sliding1: {
          from: {
            left: '0',
          },
          to: {
            left: '100%',
          },
        },
        sliding2: {
          from: {
            right: '0',
          },
          to: {
            right: '100%'
          },
        },
      },

      animation: {
        sliding1: 'sliding1 3s linear infinite',
        sliding2: 'sliding2 3s linear infinite',
      },

      fontFamily: {
        'Raleway' :['Raleway', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

