{import('tailwindcss').Config} 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        progress: {
          '0%': { transform: ' translateX(-100%) scaleX(0.5)' },
          '50%': { transform: ' translateX(0) scaleX(0.8)' },
          '100%': { transform: ' translateX(100%) scaleX(0.5)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        progress: 'progress 2s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
