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
    },
  },
  plugins: [],
} satisfies Config;
