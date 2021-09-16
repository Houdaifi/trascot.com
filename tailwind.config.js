module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1531053326607-9d349096d887?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80')",
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
