import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import errorMap from 'zod/locales/en.js';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1F2937',
        onPrimary: '#F9FAFB',

        secondary: '#E4EFF0',
        onSecondary: '#1F2937',

        tertiary: '#F9FA00',
        onTertiary: '#1F2937',

        error: '#DC2626',
        onError: '#F9FAFB',

        surface: '#F9FAFB', // Default color for backgrounds
        onSurface: '#1F2937', // Text and icons against any surface color
        onSurfaceVariant: '#6B7280', // Lower-emphasis color for text and icons against any surface color

        surfaceContainerLowest: '#F3F4F6',
        surfaceContainerLow: '#F3F4F6',
        surfaceContainer: '#F9FAFB', // Container Color, use-case see: https://m3.material.io/styles/color/roles#2396f283-2cd1-4138-8452-76cfb500cecd
        surfaceContainerHigh: '#FFFFFF',
        surfaceContainerHighest: '#F9FAFB',

        outline: '#D1D5DB', // Important boundaries, such as a text field outline. Need 3:1 contrast with surface color.
        outlineVariant: '#9CA3AF', // Lower-emphasis boundaries, such as a form field outline

        // Below are the colors deprecated
        warm: '#E11D48',
        grayBackground: 'rgba(217, 217, 217, 0.25)',
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
