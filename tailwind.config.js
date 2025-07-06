/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Keep your original content paths
  theme: {
    extend: {
      colors: {
        'makaranga-green': '#4CAF50', // Custom green for branding
        'makaranga-blue': '#2196F3', // Custom blue for accents
        'makaranga-gray': '#757575', // Custom gray for text
        'gradient-start': '#4CAF50', // Start of gradient
        'gradient-end': '#2196F3', // End of gradient
      },
      spacing: {
        '72': '18rem', // Custom spacing for larger sections
        '84': '21rem', // Additional custom spacing
      },
      fontSize: {
        '4.5xl': '2.5rem', // Custom larger font size for headers
        '5.5xl': '3rem', // Even larger for emphasis
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