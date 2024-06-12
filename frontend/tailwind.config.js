/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const flowbite = require('flowbite-react/tailwind');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/flowbite-react/lib/esm/**/*.js', flowbite.content()],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [require('flowbite/plugin'), flowbite.plugin()],
};
