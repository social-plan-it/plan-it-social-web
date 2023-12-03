import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1F2937',
        secondary: '#E4EFF0',
        warm: '#E11D48',
        grayBackground: 'rgba(217, 217, 217, 0.25)',
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;