import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        paper: "#F6F3EC",
        ink: "#141311",
        rule: "#2A2A28",
        rulesoft: "#D7D1C2",
        dispatch: "#D13B2E",
        pass: "#1F7A4C",
        warn: "#B88A1E",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: { tightish: "-0.02em", tighter2: "-0.035em" },
      maxWidth: { prose2: "68ch" },
    },
  },
  plugins: [],
};
export default config;
