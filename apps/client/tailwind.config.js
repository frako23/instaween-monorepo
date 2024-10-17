/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pumpkinOrange: "#F75F1C",
        black: "#000000",
        darkPurple: "#881EE4",
        ghostGreen: "#85E21F",
        sweetYellowCorn: "#FFD401",
      },
    },
  },
  plugins: [],
};
