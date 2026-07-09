/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0a0a0a",
        panel: "#101217",
        accent: "#33d6ff",
        mint: "#7cf2c3",
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(51, 214, 255, 0.35), 0 22px 70px rgba(9, 78, 112, 0.35)",
      },
    },
  },
  plugins: [],
}
