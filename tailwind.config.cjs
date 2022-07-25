/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-red": "hsl(10, 79%, 65%)",
        "cyan": "hsl(186, 34%, 60%)",
        "dark-brown": "hsl(25, 47%, 15%)",
        "mid-brown": "hsl(28, 10%, 53%)",
        "cream": "hsl(27, 66%, 92%)",
        "pale-orange": "hsl(33, 100%, 98%)"
      }
    },
  },
  plugins: [],
}
