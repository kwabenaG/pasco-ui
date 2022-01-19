module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'xs' : '480px',
      'sm': "640px",
      'md': "768px",
      'lg': "1024px",
      'xl': "1280px",
      '2xl': '1536px'
      
    },
    extend: {
      backgroundImage: {
        "pasco-bg": "url('/images/bg-student2.png')",
        "reason-bg": "url('/images/bg-reason.jpg')"
      },
      colors: {
        'front-page-text-color': '#F04444',
      },
      fontFamily: {
        'front-page-text-font': ['Lato', 'sans-serif'],
      }  // add custom fonts
      
    },
    
  },
  plugins: [],
}
