import type { Config } from "tailwindcss";

/**
 * Brand bible tokens → Tailwind config.
 * If a value isn't here, it doesn't exist. Edit tokens, not arbitrary values.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0F2A4A",
          800: "#1E3A5F",
          600: "#2E5380",
          100: "#E0EAF5",
        },
        orange: {
          700: "#C8521A",
          600: "#E55D1F",
          500: "#F26B1F",
          100: "#FDE7D9",
        },
        ink: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          700: "#475569",
          900: "#0F172A",
        },
        success: {
          DEFAULT: "#15803D",
          muted: "#DCFCE7",
        },
        error: {
          DEFAULT: "#B91C1C",
          muted: "#FEE2E2",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Brand bible scale — never deviate
        display: ["64px", { lineHeight: "68px", letterSpacing: "-0.025em", fontWeight: "700" }],
        "display-md": ["52px", { lineHeight: "56px", letterSpacing: "-0.025em", fontWeight: "700" }],
        "display-sm": ["40px", { lineHeight: "44px", letterSpacing: "-0.025em", fontWeight: "700" }],
        h1: ["44px", { lineHeight: "48px", letterSpacing: "-0.02em", fontWeight: "700" }],
        h2: ["32px", { lineHeight: "40px", letterSpacing: "-0.015em", fontWeight: "700" }],
        "h2-sm": ["26px", { lineHeight: "32px", letterSpacing: "-0.015em", fontWeight: "700" }],
        h3: ["24px", { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "600" }],
        h4: ["20px", { lineHeight: "28px", letterSpacing: "-0.005em", fontWeight: "600" }],
        "price-lg": ["56px", { lineHeight: "1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px" }],
        body: ["16px", { lineHeight: "26px" }],
        "body-sm": ["14px", { lineHeight: "22px" }],
        label: ["13px", { lineHeight: "16px", letterSpacing: "0.06em", fontWeight: "600" }],
      },
      spacing: {
        // 8px grid (Tailwind's default scale already aligns; these are explicit aliases)
        "section-y": "96px",
        "section-y-mobile": "48px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)",
        "card-hover": "0 4px 6px rgba(15,23,42,0.05), 0 10px 15px rgba(15,23,42,0.08)",
        nav: "0 1px 0 rgba(15,23,42,0.04)",
        featured: "0 4px 12px rgba(242,107,31,0.12)",
      },
      maxWidth: {
        container: "1180px",
        narrow: "760px",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      screens: {
        // Brand bible breakpoints
        sm: "768px",
        md: "1024px",
        lg: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
