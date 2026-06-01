/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
        serif: ['Fraunces', 'serif'],
      },
      colors: {
        link: '#1f1e1e', paper: '#f5f2ec',
        accent: '#d4522a', muted: '#6b6560',
      },
    },
  },
  plugins: [],
}