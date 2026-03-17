/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f0fafa',
          100: '#d9f1f0',
          200: '#b3e4e2',
          300: '#7dd0cc',
          400: '#4dbfbb',
          500: '#5db7b3',  // Color piscines santanyi original
          600: '#3d9d99',
          700: '#2e7e7a',
          800: '#245f5c',
          900: '#1a4543',
          950: '#0f2928',
        },
        dark: '#25262a',
        pool: '#5db7b3',
      },
      fontFamily: {
        sans: ['Quicksand', 'system-ui', 'sans-serif'],
        display: ['Quicksand', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [
    // @tailwindcss/typography, @tailwindcss/forms
  ],
};
