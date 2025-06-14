{import('tailwindcss').Config} 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // 1. Add your project's font family for consistency
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      // 2. Define the keyframes for your custom animations
      keyframes: {
        // Animation for the contact form progress bar
        progress: {
          '0%': { transform: ' translateX(-100%) scaleX(0.5)' },
          '50%': { transform: ' translateX(0) scaleX(0.8)' },
          '100%': { transform: ' translateX(100%) scaleX(0.5)' },
        },
        // Animation for project cards and other elements to fade in
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      // 3. Create utility classes from your keyframes
      animation: {
        progress: 'progress 2s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
