/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px", 
    },
    extend: {
      colors: {
        brightBlue: "#3d85c6",
        brightWhite: "#ffffff",
        darkOrange: "#a65500",
      },
      fontFamily: {
        "sans": ["Roboto", "sans-serif"],
        "Mono": ["Manrope", "Helvetica","ui-sans-serif","system-ui","sans-serif"]
    }
  },
  plugins: [],
}
}

