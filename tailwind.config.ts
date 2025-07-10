// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        rubberBand: {
          '0%': { transform: 'scale3d(1,1,1)' },
          '30%': { transform: 'scale3d(1.25,.75,1)' },
          '40%': { transform: 'scale3d(.75,1.25,1)' },
          '50%': { transform: 'scale3d(1.15,.85,1)' },
          '65%': { transform: 'scale3d(.95,1.05,1)' },
          '75%': { transform: 'scale3d(1.05,.95,1)' },
          '100%': { transform: 'scale3d(1,1,1)' },
        },
      },
      animation: {
        'rubber-band': 'rubberBand 1s ease',
      },
    },
  },
  plugins: [],
};