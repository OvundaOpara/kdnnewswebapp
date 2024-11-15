/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D7DFE4",
        primary2:"#182126",
        primary3: "#22313A",  
        primary4: "#02090D",
        primary5: "#D1E0EB9E",
        primary6: "#D9D9D9",
        primary7: "#22313A",
        buttonsColor: "#CF0807",
        background: "#02090D",
        Modalbackground: "#6C6B6B",
        outline1: "#8CCE9D"
    },
      animation: {
        'fade-in-down': 'fade-in-down 0.3s ease-out',
      },
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}