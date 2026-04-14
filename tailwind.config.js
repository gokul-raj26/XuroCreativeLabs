/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050812',
        bg2: '#080E1F',
        neon: '#E6F21D',
        electric: '#1F3CDE',
        cta: '#FF3B2F',
        muted: '#7080B0',
        text: '#E8EEFF'
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif']
      },
      boxShadow: {
        electric: '0 0 30px rgba(31, 60, 222, 0.45)',
        neon: '0 0 35px rgba(230, 242, 29, 0.3)',
        cta: '0 0 28px rgba(255, 59, 47, 0.4)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' }
        },
        spinSlow: {
          to: { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.4s ease-in-out infinite',
        spinSlow: 'spinSlow 18s linear infinite'
      }
    }
  },
  plugins: []
};
