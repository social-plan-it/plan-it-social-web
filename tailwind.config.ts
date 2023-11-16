import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1F2937',
        secondary: '#E4EFF0',
        warm: '#E11D48',
        grayBackground: 'rgba(217, 217, 217, 0.25);',
      },
      gridTemplateColumns: {
        'auto-fill-events': 'repeat(auto-fill, minmax(22rem, 1fr))',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
