/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b0f1a',
        surface: '#121826',
        surface2: '#1a2236',
        accent: {
          from: '#7c3aed',
          via: '#3b82f6',
          to: '#06b6d4',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
