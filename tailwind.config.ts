import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#09090b",
          soft: "#111116",
          raised: "#18181f",
        },
        bone: {
          DEFAULT: "#f5f4f0",
          dim: "#cbc5b8",
          faint: "#7e7a72",
        },
        amber: {
          glow: "#fbbf24",
          deep: "#f59e0b",
        },
        violet: {
          glow: "#a78bfa",
          deep: "#7c3aed",
        },
        line: "#27252f",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "scroll-bounce": {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(6px)", opacity: "0.4" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        marquee: "marquee 32s linear infinite",
        blink: "blink 1s step-end infinite",
        "scroll-bounce": "scroll-bounce 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
