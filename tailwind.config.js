// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };




/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   'museo': ['"Museo Sans"', 'sans-serif'],
      // },
      colors: {
        'mainBg': '#521B26'
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        
        '.primary-heading': {
         
          fontWeight: '300',
          fontSize: '35px',      // Default for 0px to 639px
          lineHeight: '43px',  
          textTransform: 'uppercase',

          '@screen sm': {
            fontSize: '35px',
            lineHeight: '37.45px',
          },
          '@screen md': {
            fontSize: '40px',
            lineHeight: '40px',
          },
          '@screen lg': {
            fontSize: '40px',
            lineHeight: '43px',
          },
          '@screen xl': {
            fontSize: '50px',
            lineHeight: '53px',
          },
        },
        '.secondary-heading': {
         
          fontWeight: '400',
          fontSize: '35px',      // Default for 0px to 639px
          lineHeight: '43px',  
          textTransform: 'uppercase',

          '@screen sm': {
            fontSize: '35px',
            lineHeight: '37.45px',
          },
          '@screen md': {
            fontSize: '40px',
            lineHeight: '40px',
          },
          '@screen lg': {
            fontSize: '40px',
            lineHeight: '43px',
          },
          '@screen xl': {
            fontSize: '50px',
            lineHeight: '53px',
          },
        },
      });
    },
  ],
};

