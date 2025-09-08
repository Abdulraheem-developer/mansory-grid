/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#0ea5e9",
        brandGreen: "#22c55e",
        brandGray: "#0f172a"
      }
    }
  },
  plugins: [],
}

