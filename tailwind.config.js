/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  
    extend: {
      colors: {
        'primary': "#868678",
        'primaryLight': "#908279",
        'light': "#fffaf2",
        'buttonColor': "#096baf",
        'buttonHower':"#102846",
      },
    },
  },
  plugins: [],
}

