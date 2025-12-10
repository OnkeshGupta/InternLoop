module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        student: {
          50: '#ecfdf5',
          100: '#d1fae5',
          300: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0ea5a4'
        },
        company: {
          50: '#fff7ed',
          100: '#ffedd5',
          300: '#fcd34d',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309'
        },
        brandNavy: '#0f1724',
        brandDark: '#1a202c'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
        slideUp: 'slideUp 0.6s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.15)',
        glow: '0 0 20px rgba(6, 182, 212, 0.3)'
      }
    }
  },
  plugins: []
}
