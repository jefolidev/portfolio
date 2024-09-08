/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#131217",
        secondary: "#1a1820",
        terciary: "#26252E",
        quartiary: "#1C1922",
        cardPrimary: "#26252E",
        strokeDefault: "#747474",
      },
      fontFamily: {
        maven: ["Maven Pro", "sans-serif"],
        jet: ["JetBrains Mono", "sans-serif"],
        geologica: ["Geologica", "sans-serif"],
      },
      backgroundImage: {
        perfil: "url('./src/pages/assets/fotominhacircle.png')",
        dotted: "url('./src/assets/dotted-background.png')",
      },
    },
  },
  plugins: [],
};
