/* eslint-disable @typescript-eslint/no-var-requires */
/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },

  plugins: [
    require('daisyui'),
    require('tailwindcss-animate'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],

  daisyui: {
    themes: [
      {
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#F9A109',
          secondary: '#80485B',
        },
      },
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#F9A109',
          secondary: '#80485B',
        },
      },
    ],
  },
};
