import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      borderRadius: {
        '2xl': '1.5rem'
      },
      boxShadow: {
        subtle: '0 10px 30px -15px rgba(0,0,0,0.2)'
      },
      colors: {
        brand: {
          black: '#0A0A0A',
          white: '#FFFFFF',
          gray: '#F5F5F5'
        }
      }
    }
  },
  plugins: []
};

export default config;
