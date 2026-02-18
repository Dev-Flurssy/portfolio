import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: {
          light: '#A78BFA',
          DEFAULT: '#8B5CF6',
          medium: '#7C3AED',
          dark: '#6D28D9',
        },
        teal: {
          light: '#5EEAD4',
          DEFAULT: '#14B8A6',
          medium: '#0D9488',
          dark: '#0F766E',
        },
      },
    },
  },
  plugins: [],
};
export default config;
