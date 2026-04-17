import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          50: '#f5ffe0',
          100: '#e8ffc2',
          200: '#d4ff8a',
          300: '#c0f54d',
          400: '#b4f020',
          500: '#A8F000',
          600: '#8ac400',
          700: '#6e9d00',
          800: '#587d00',
          900: '#3d5700',
          950: '#1f2d00',
        },
      },
    },
  },
  plugins: [],
};
export default config;
