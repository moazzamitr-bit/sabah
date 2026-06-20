import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: "var(--green-deep)",
          DEFAULT: "var(--green)",
          light: "var(--green-light)",
          gold: "var(--gold)",
          ink: "var(--text)",
          muted: "var(--text-muted)",
          canvas: "var(--background)",
          surface: "var(--surface)",
        },
      },
      boxShadow: {
        soft: "0 18px 50px rgba(27, 94, 32, 0.10)",
        card: "0 12px 34px rgba(29, 71, 35, 0.08)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
