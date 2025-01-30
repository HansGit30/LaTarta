/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat:["Montserrat", "sans-serif"],
        outfit:["Outfit", "san-serif"],
        poppin:["Poppins", "san-serif"],
        cormorant:["Cormorant Garamond", "san-serif"],
        quicksand:["Quicksand", "san-serif"]
      }
    },
  },
  plugins: [],
}

