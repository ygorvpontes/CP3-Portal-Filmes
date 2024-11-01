// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1e1e2f',  // um tom de cinza escuro mais contrastante
        primary: '#3b82f6',      // azul para botões ou links
        textPrimary: '#e5e5e7',  // cor do texto principal
        secondary: '#a1a1aa',    // texto secundário
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


