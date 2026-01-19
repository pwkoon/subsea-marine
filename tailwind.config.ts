import { cp } from 'fs';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#1C2E4A',
        mediumBlue: '#52677D',
        lightBlue: '#BDC4D4',
        yellow: '#D1CFC9',
        darkGrey: '#0F1A2B',
      },
    },
  },
  plugins: [],
};

export default config;
