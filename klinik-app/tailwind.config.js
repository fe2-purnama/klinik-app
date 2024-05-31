/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

export default {
<<<<<<< HEAD
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/flowbite-react/lib/esm/**/*.js'],
=======
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/lib/esm/**/*.js",
    flowbite.content(),
  ],
>>>>>>> d1d32293294956938c6838ed38f539defbcd1907
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '1rem',
    },
  },
<<<<<<< HEAD
  plugins: [require('flowbite/plugin')],
};
=======
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin(),
  ],
}

>>>>>>> d1d32293294956938c6838ed38f539defbcd1907
