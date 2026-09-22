/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#040609',
          900: '#06090e',
          850: '#090d15',
          800: '#0d131f',
          700: '#141d2e',
          600: '#1e2b42',
        },
        gold: {
          50: '#fffdf5',
          100: '#fef9e7',
          200: '#fcf1c5',
          300: '#f9e394',
          400: '#f5cd58',
          500: '#d4af37',
          600: '#b89228',
          700: '#94711e',
          800: '#795a1d',
          900: '#674a1d',
          950: '#3c290b',
        },
        champagne: {
          50: '#faf8f5',
          100: '#f4efe8',
          200: '#ebdccf',
          300: '#dfc4af',
          400: '#cfa68b',
          500: '#c28b6d',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft-depth': '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(212, 175, 55, 0.1)',
        'card-hover': '0 24px 48px -12px rgba(212, 175, 55, 0.18), 0 0 1px 1px rgba(212, 175, 55, 0.25)',
        'gold-glow': '0 0 25px rgba(245, 158, 11, 0.35)',
        'gold-glow-lg': '0 0 45px rgba(212, 175, 55, 0.45)',
        'inner-bezel': 'inset 0 1px 1px rgba(255, 255, 255, 0.15), 0 4px 20px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.88', transform: 'scale(1.02)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
