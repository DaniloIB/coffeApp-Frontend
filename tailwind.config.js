/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      backgroundImage :{
        'fondo' : "url('/assets/fondo1.png')",
      },


      backgroundColor: theme=>({
        ...theme('colors'),
        'primary' : '#F68633',
        'secondary' : '#D4E9E2',
        'third' : '#F8F8F8',
        'fourd' : '#F7F6F7',
        'five' : '#F6CE20',
      })
    },
  },
  plugins: [],
}
