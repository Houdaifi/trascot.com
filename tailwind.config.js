module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('assets/bg-1.jpg')",
        'hero-pattern2': "url('assets/bg-2.jpg')",
        'a-propos-img1': "url('assets/boiling.jpg')",
        'a-propos-img2': "url('assets/bilboard.jpg')",
       },
    }
  },
  variants: {
    extend: {
      display: ["group-hover"]
    },
  },
  plugins: [],
}
