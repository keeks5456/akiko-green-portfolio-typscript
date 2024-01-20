import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
     'salsa': ['Salsa', 'cursive']
   },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    },
      fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      colors: {
      //  'background': 'rgba(236,220,171,1)', // your desired color
      'background': '#F5F5F5',
       'text': 'black', // your desired color
     },
     boxShadow: {
       lightGold: '12px 7px 0px 3px rgba(236,220,171,1)',
   
     },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'background-image': "url('/images/temp-eyes.jpeg')"
      },
    },
  },
  variants:[],
  plugins: [],
}





// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   theme: {
//     screens: {
//       'tablet': '640px',
//       // => @media (min-width: 640px) { ... }

//       'laptop': '1024px',
//       // => @media (min-width: 1024px) { ... }

//       'desktop': '1280px',
//       // => @media (min-width: 1280px) { ... }
//     },
//   }
// }
export default config
