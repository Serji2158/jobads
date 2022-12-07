/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fiord': '#3a4562',
        'waikawa-gray': '#55699e',
        'ebony-clay': '#2a3047',
        'catskill-white': '#e6e9f2',
        'athens-gray': '#eff0f5',
        'manatee': '#878d9d',
        'oxford-blue': '#38415d',
        'pickled-bluewood': '#384564',
        'supernova': '#ffcf00',
        'limed-oak': '#988b49',
        'raven': '#70778b',
        'indigo': '#5876c5',
      },      
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}
