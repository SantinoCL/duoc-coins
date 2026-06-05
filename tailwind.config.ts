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
        bg: { DEFAULT: "#08090F", 2: "#0C0E16" },
        surface: {
          DEFAULT: "#12141F",
          2: "#181B28",
          3: "#202434",
          elevated: "#1B1F2E",
        },
        ink: { DEFAULT: "#F3F5FB", dim: "#A3AABF", faint: "#646B82" },
        violet: {
          DEFAULT: "#A855F7",
          hi: "#C291FF",
          deep: "#7C3AED",
          ink: "#2A1B45",
        },
        gold: {
          DEFAULT: "#F5C84C",
          hi: "#FFE29A",
          deep: "#D9A52C",
          ink: "#2E2410",
        },
        signal: { green: "#3FD68B", red: "#FF6B6B" },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        body: ["Sora", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      borderRadius: { sm: "10px", md: "16px", lg: "22px", xl: "30px" },
      backgroundImage: {
        "grad-violet": "linear-gradient(135deg, #C291FF 0%, #A855F7 45%, #7C3AED 100%)",
        "grad-coin": "linear-gradient(135deg, #FFE29A 0%, #F5C84C 50%, #D9A52C 100%)",
        "grad-ink": "linear-gradient(180deg, #0C0E16 0%, #08090F 100%)",
      },
      boxShadow: {
        "glow-violet": "0 0 0 1px rgba(168,85,247,0.35), 0 8px 40px -8px rgba(168,85,247,0.55)",
        soft: "0 20px 60px -20px rgba(0,0,0,0.7)",
      },
      keyframes: {
        dcRise: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "none" },
        },
        dcPop: {
          "0%": { opacity: "0", transform: "scale(.78)" },
          "100%": { opacity: "1", transform: "none" },
        },
        dcPulse: {
          "0%,100%": { filter: "drop-shadow(0 14px 44px rgba(168,85,247,.42))" },
          "50%": { filter: "drop-shadow(0 14px 62px rgba(168,85,247,.72))" },
        },
        dcFloat: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        dcSpin: {
          to: { transform: "rotate(360deg)" },
        },
        dcShimmer: {
          to: { backgroundPosition: "200% center" },
        },
      },
      animation: {
        rise: "dcRise .9s cubic-bezier(.2,.7,.2,1) both",
        pop: "dcPop .8s cubic-bezier(.2,.8,.2,1) both",
        pulse: "dcPulse 4.2s ease-in-out infinite",
        float: "dcFloat 5s ease-in-out infinite",
        spin40: "dcSpin 40s linear infinite",
      },
      maxWidth: { container: "1180px" },
    },
  },
  plugins: [],
};

export default config;
