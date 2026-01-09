/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0B',
        panel: '#111113',
        text: '#E7E3DA',
        muted: '#A9A39A',
        sepia: '#A67C52',
        'sepia-hover': '#C49A6C',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Oswald', 'Roboto Condensed', 'sans-serif'],
      },
      letterSpacing: {
        'wide': '0.05em',
        'wider': '0.1em',
        'widest': '0.15em',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
