/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '650px',
        lg: '1000px'
      },
      fontFamily: {
        ubuntu: ['Ubuntu', ' sans-serif']
      },
      backgroundImage: {
        side: "url('./assets/images/bg-sidebar-desktop.svg')",
        'sm-side': "url('./assets/images/bg-sidebar-mobile.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      spacing: {
        side: '375px',
        form: '645px',
        19: '4.7rem',
        184: '36.5rem',
        92: '23.5rem',
        930: '930px',
        600: '600px'
      },
      colors: {
        'blue-marine': 'hsl(213, 96%, 18%)',
        'blue-purplish': 'hsl(228, 100%, 84%)',
        'blue-light': 'hsl(206, 94%, 87%)',
        'blue-purple': 'rgb(141, 137, 209)',
        'blue-purple-light': 'rgb(248, 249, 255)',
        'red-strawberry': 'hsl(354, 84%, 57%)',
        'gray-cool': 'hsl(231, 11%, 63%)',
        'gray-light': 'hsl(229, 24%, 87%)',
        magnolia: 'hsl(217, 100%, 97%)',
        alabaster: 'hsl(231, 100%, 99%)',
        white: 'hsl(0, 0%, 100%)'
      }
    }
  },
  plugins: []
}
