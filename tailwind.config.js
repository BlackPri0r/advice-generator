/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      gb: "hsl(var(--gb))",
      dgb: "hsl(var(--dgb))",
      db: "hsl(var(--db))",
      lg: "hsl(var(--lg))",
      ng: "hsl(var(--ng))",
    },

    extend: {},
  },
  plugins: [],
}