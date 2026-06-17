/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: "#0A0C09",
          surface: "#111410",
          card: "#161A13",
          border: "#1E2419",
          borderGold: "#8B6914",
          gold: "#C9963A",
          goldLight: "#E8B85A",
          goldPale: "#F5E4BC",
          sage: "#4A7C3F",
          sageMid: "#6BA05A",
          sageLight: "#A8C99A",
          text: "#F0EDD8",
          textMuted: "#8A8A7A",
          textDim: "#4A4A3A",
          red: "#C0392B",
        }
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["'Outfit'", "sans-serif"],
      },
      keyframes: {
        'fade-slide-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-gold': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.5)', boxShadow: '0 0 20px #C9963A' },
        },
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'fade-slide-up': 'fade-slide-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'marquee': 'marquee 25s linear infinite',
        'pulse-gold': 'pulse-gold 2s infinite',
        'spin-slow': 'spin-slow 10s linear infinite',
      }
    },
  },
  plugins: [],
}
