import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          950: '#1A0A04',
          900: '#2C1005',
          800: '#3D1F0D',
          700: '#5C2E14',
          600: '#7A4F35',
          500: '#9B6645',
          400: '#B8845C',
          300: '#C4956A',
          200: '#D4B085',
          100: '#E8D4B8',
          50:  '#F4ECE0',
        },
        cream: {
          900: '#8C7355',
          800: '#A89070',
          700: '#C4A882',
          600: '#D4B896',
          500: '#E0CAA0',
          400: '#EAD9B8',
          300: '#F0E8D5',
          200: '#F5EFE0',
          100: '#FAF7F2',
          50:  '#FEFCF8',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        lato: ['var(--font-lato)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 1s ease-out forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
