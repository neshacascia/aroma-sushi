/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        gold: 'rgb(168, 134, 77)',
      },
      backgroundImage: {
        header: "url('/assets/header-bg.jpg')",
      },
      width: {
        aboutImg: '300px',
        menuImg: '70px',
        desktopMenuImg: '100px',
        instagram: '250px',
      },
      height: {
        logo: '120px',
        menuImg: '70px',
        desktopMenuImg: '100px',
        instagram: '250px',
      },
      fontFamily: {
        heading: ['Poppins'],
      },
      borderWidth: {
        line: '0.5px',
        button: '1px',
      },
      boxShadow: {
        btnHover: '0 10px 20px rgba(0, 0, 0, 0.2)',
        btnActive: '0 5px 10px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
