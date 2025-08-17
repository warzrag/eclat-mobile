import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: "#d4af37",
        "gold-dark": "#b8941f",
        "gray-light": "#f5f5f0",
        "gray-dark": "#333333",
      },
    },
  },
  plugins: [],
};
export default config;