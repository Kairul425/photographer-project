/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        button: '#526D82',
        bgone: '#DDE6ED',
        blame: '#9DB2BF',
        bgungu: '#723FDF',
        ungu: '#8294C4',
        card: '#522290',
        forum: '#FF2121',
        footer: '#1C0A34',
      },
      keyframes: {
        animasi: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'bounce-slow': 'bounce 2s linear infinite',
        animasi: 'animasi 6s linear infinite',
      },
    },
  },
  plugins: [],
};
