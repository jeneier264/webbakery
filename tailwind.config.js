/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f7ede2", // beige
        secondary: "#f5cac3", // pink 
        contrast1 : "#84a59d", // green
        contrast2: "#f28482", // bright pink
        contrast3: "#f6bd60", // yellow
        contrast4: '#f5cac3', // pale pink
        constrast5: "#f7d5a1", //pale green
        disabled: "#e5e5e5", // gray

      },
      fontFamily: {
        reem: ["Reem Kufi", "sans-serif"],
        sen: ["Sen", "sans-serif"],
        
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [  ],
}
