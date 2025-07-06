/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        // 🌿 Branding Colors
        'makaranga-green': '#4CAF50',
        'makaranga-blue': '#2196F3',
        'makaranga-gray': '#757575',

        // 🎨 Gradient Colors
        'gradient-start': '#4CAF50',
        'gradient-end': '#2196F3',
      },

      spacing: {
        '72': '18rem',  // Large spacing
        '84': '21rem',
      },

      fontSize: {
        '4.5xl': '2.5rem', // Between 4xl and 5xl
        '5.5xl': '3rem',   // Between 5xl and 6xl
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, #4CAF50, #2196F3)',
        'gradient-hero': 'linear-gradient(135deg, #4CAF50, #2196F3)',
      },

      animation: {
        'fade-in': 'fadeIn 1s ease-in',
        'slide-in': 'slideIn 1s ease-out',
        'pulse': 'pulse 2s infinite',
        'bounce': 'bounce 2s infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },

  plugins: [],
};