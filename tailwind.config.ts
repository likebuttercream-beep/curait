import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#f9f9f9",
        foreground: "#111111"
      },
      boxShadow: {
        subtle: "0 10px 30px -20px rgba(0,0,0,0.3)"
      },
      borderRadius: {
        "2xl": "1.5rem"
      }
    }
  },
  plugins: []
};

export default config;
