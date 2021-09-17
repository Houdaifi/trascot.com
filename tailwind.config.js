module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('assets/bg-1.jpg')",
        'hero-pattern2': "url('assets/bg-2.jpg')",
       }
    },
    height: {
      'xxl' : '50rem'
    }
  },
  variants: {
    extend: {
      display: ["group-hover"]
    },
  },
  plugins: [],
}
