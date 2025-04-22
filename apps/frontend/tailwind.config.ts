/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable import/no-extraneous-dependencies */
import colors from 'tailwindcss/colors';

import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'selector',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './index.html',
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        theme: colors.lime,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
