/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit']
      },
      dropShadow: {
        'blue': '0 20px 50px rgba(8,_112,_184,_0.7)'
      }
    },
  },
  plugins: [],
};


