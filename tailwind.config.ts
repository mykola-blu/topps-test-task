import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

export default {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#df5460',
        secondary: '#e6848c',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
} satisfies Config
