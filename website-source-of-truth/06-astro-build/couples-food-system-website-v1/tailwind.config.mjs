/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF6EE',
          dark: '#F5F0E6'
        },
        sage: {
          DEFAULT: '#7A9E7E',
          dark: '#5A7E5E',
          light: '#9ABE9E'
        },
        terracotta: {
          DEFAULT: '#E8A87C',
          dark: '#C88A5C',
          light: '#F8C89C'
        },
        text: {
          primary: '#2C3E2D',
          secondary: '#6B7B6C'
        },
        border: '#E5E1DA',
        error: '#E07A5F',
        success: '#7A9E7E'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    }
  },
  plugins: []
};
