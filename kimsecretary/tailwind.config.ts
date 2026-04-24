import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 브랜드 색상 (필요시 커스터마이징)
      },
      backdropBlur: {
        glass: '15px',
      },
      boxShadow: {
        glass: '0 10px 20px rgba(0, 0, 0, 0.1)',
        'glass-dark': '0 10px 20px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
