/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        surface: '#ebffe7',
        'surface-dim': '#cae0c8',
        'surface-bright': '#ebffe7',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#e4fae1',
        'surface-container': '#def4db',
        'surface-container-high': '#d8eed6',
        'surface-container-highest': '#d3e8d0',
        'on-surface': '#0e1f10',
        'on-surface-variant': '#424842',
        'inverse-surface': '#233524',
        'inverse-on-surface': '#e1f7de',
        outline: '#727971',
        'outline-variant': '#c2c8bf',
        'surface-tint': '#44664a',
        primary: '#44664a',
        'on-primary': '#ffffff',
        'primary-container': '#7a9e7e',
        'on-primary-container': '#13341c',
        'inverse-primary': '#aad0ad',
        secondary: '#85532e',
        'on-secondary': '#ffffff',
        'secondary-container': '#febb8e',
        'on-secondary-container': '#794925',
        tertiary: '#615e57',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#98958c',
        'on-tertiary-container': '#2f2e27',
        error: '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',
        'primary-fixed': '#c6ecc8',
        'primary-fixed-dim': '#aad0ad',
        'on-primary-fixed': '#00210b',
        'on-primary-fixed-variant': '#2d4e33',
        'secondary-fixed': '#ffdcc6',
        'secondary-fixed-dim': '#fbb88b',
        'on-secondary-fixed': '#301400',
        'on-secondary-fixed-variant': '#693c19',
        'tertiary-fixed': '#e7e2d8',
        'tertiary-fixed-dim': '#cac6bd',
        'on-tertiary-fixed': '#1d1c16',
        'on-tertiary-fixed-variant': '#494740',
        background: '#ebffe7',
        'on-background': '#0e1f10',
        'surface-variant': '#d3e8d0'
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
        full: '9999px'
      },
      spacing: {
        xs: '4px',
        lg: '24px',
        base: '8px',
        'container-padding': '20px',
        gutter: '16px',
        md: '16px',
        sm: '12px',
        xl: '32px',
        xxl: '64px'
      },
      fontFamily: {
        h1: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        'body-md': ['Inter', 'system-ui', 'sans-serif'],
        'label-caps': ['Inter', 'system-ui', 'sans-serif'],
        'h1-mobile': ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        h2: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        'body-lg': ['Inter', 'system-ui', 'sans-serif'],
        h3: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        'body-sm': ['Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        h1: ['32px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'body-md': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'label-caps': ['12px', { lineHeight: '1.2', letterSpacing: '0.05em', fontWeight: '600' }],
        'h1-mobile': ['28px', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.5', fontWeight: '400' }],
        h3: ['20px', { lineHeight: '1.3', fontWeight: '600' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }]
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
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
