/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
      'vt323':["VT323", 'monospace' ],
      },  

      screens: {
        'xs':"600px",
        '3xl': "2560px",
      },

      colors: {
        red: {
          DEFAULT: "rgba(231, 52, 39, 1)",
        },
        purple: {
          DEFAULT: "rgba(171, 95, 201, 1)",
        },
        bg_color: {
          DEFAULT: "rgba(4, 8, 66, 1)",
        },
        gradient_blue_purple: {
          0: "rgba(77, 45, 183, 1)",    
          50: "rgba(157, 68, 192, 1)",
          100: "rgba(236, 83, 176, 1)",
        },
        gradient_purple_fade: {
          0: "rgba(157, 68, 192, 1)",    
          50: "rgba(157, 68, 192, 1)",
          100: "rgba(157, 68, 192, .5)",
        },
      },


    },
  },
  plugins: [
     require('tailwindcss-image-rendering')(),
  ],
}
