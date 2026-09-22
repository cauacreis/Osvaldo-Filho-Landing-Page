/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        clinical: {
          navy: '#0b192c',
          dark: '#0e1726',
          teal: '#088395',
          deep: '#0a4d68',
          cyan: '#05bfdb',
          surface: '#f8fafc',
          muted: '#64748b',
          border: '#e2e8f0',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#d4af37',
          600: '#c5a059',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft-depth': '0 20px 40px -15px rgba(11, 25, 44, 0.08), 0 0 1px 1px rgba(11, 25, 44, 0.04)',
        'card-hover': '0 24px 48px -12px rgba(8, 131, 149, 0.14), 0 0 1px 1px rgba(8, 131, 149, 0.1)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'teal-glow': '0 0 30px rgba(8, 131, 149, 0.25)',
        'inner-bezel': 'inset 0 1px 1px rgba(255, 255, 255, 0.6), 0 4px 20px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
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
      }
    },
  },
  plugins: [],
}
