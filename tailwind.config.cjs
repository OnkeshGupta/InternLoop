module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        18: '4.5rem'
      },
      colors: {
        harvard: { DEFAULT: '#7D0A0A' },
        neutralSoft: '#F5F5F7',
        premiumAccent: '#C4A484',
        deepAccent: '#101820',

        studentPrimary: '#0055FF',
        studentSecondary: '#EAF1FF',
        studentAccent: '#112233',
        studentSuccess: '#1DBF73',

        companyPrimary: '#0B132B',
        companySecondary: '#1C2541',
        companyAccent: '#3A506B',
        companyHighlight: '#5BC0BE',

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
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'Poppins', 'ui-sans-serif', 'system-ui']
      },
      borderRadius: {
        xl14: '14px',
        md8: '8px'
      },
      boxShadow: {
        'soft-card': '0 8px 30px rgba(16, 24, 40, 0.06)',
        'soft-card-strong': '0 16px 48px rgba(16, 24, 40, 0.10)',
        'glow-accent': '0 8px 30px rgba(196,164,132,0.12)'
      },
      keyframes: {
        bgFade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        hoverLift: {
          '0%': { transform: 'translateY(0)', boxShadow: '0 8px 30px rgba(16,24,40,0.06)' },
          '100%': { transform: 'translateY(-6px)', boxShadow: '0 16px 48px rgba(16,24,40,0.10)' }
        },
        barFill: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--fill-width, 50%)' }
        },
        fadeSlide: {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        'bg-fade': 'bgFade 400ms ease-out both',
        'lift-slow': 'hoverLift 220ms cubic-bezier(.2,.9,.2,1) both',
        'bar-fill': 'barFill 900ms cubic-bezier(.2,.9,.2,1) both',
        'fade-slide': 'fadeSlide 360ms ease-out both'
      }
    }
  },
  plugins: []
}
