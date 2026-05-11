/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',      // Bleu-noir très foncé
        secondary: '#3B82F6',    // Bleu vif
        accent: '#06B6D4',       // Cyan moderne
        success: '#10B981',      // Vert émeraude
        warning: '#F59E0B',      // Amber
        danger: '#EF4444',       // Rouge
        // Nouveaux : gradients friendly
        'gradient-start': '#0F172A',
        'gradient-mid': '#1E40AF',
        'gradient-end': '#06B6D4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'sm-glow': '0 1px 3px 0 rgba(3, 102, 214, 0.1)',
        'md-glow': '0 4px 6px -1px rgba(3, 102, 214, 0.15)',
        'lg-glow': '0 10px 15px -3px rgba(3, 102, 214, 0.2)',
        'xl-glow': '0 20px 25px -5px rgba(3, 102, 214, 0.25)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.12)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};
