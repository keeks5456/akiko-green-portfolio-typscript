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
    extend: {
      colors: {
       'background': '#BF932A', // your desired color
       'text': 'white', // your desired color
     },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
