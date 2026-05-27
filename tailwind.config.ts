import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-barlow)", "system-ui", "sans-serif"],
        display: ["var(--font-oswald)", "Impact", "sans-serif"],
      },
      colors: {
        background:  "hsl(var(--background))",
        foreground:  "hsl(var(--foreground))",
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        border:  "hsl(var(--border))",
        input:   "hsl(var(--input))",
        ring:    "hsl(var(--ring))",
        charcoal: {
          DEFAULT: "hsl(var(--charcoal))",
          mid:     "hsl(var(--charcoal-mid))",
          light:   "hsl(var(--charcoal-light))",
          border:  "hsl(var(--charcoal-border))",
        },
        amber: {
          primary:  "hsl(var(--amber-primary))",
          mid:      "hsl(var(--amber-mid))",
          light:    "hsl(var(--amber-light))",
          dim:      "hsl(var(--amber-dim))",
        },
        cream: {
          DEFAULT: "hsl(var(--cream))",
          mid:     "hsl(var(--cream-mid))",
          dark:    "hsl(var(--cream-dark))",
        },
        rose: {
          DEFAULT: "hsl(var(--rose))",
          dim:     "hsl(var(--rose-dim))",
        },
        /* Legacy aliases for any remaining references */
        vip: {
          green:  "hsl(38 92% 50%)",
          mid:    "hsl(38 88% 42%)",
          bright: "hsl(38 92% 58%)",
          light:  "hsl(38 80% 66%)",
        },
        gold: {
          DEFAULT: "hsl(40 25% 92%)",
          bright:  "hsl(40 30% 95%)",
          dim:     "hsl(40 15% 72%)",
          light:   "hsl(40 25% 92%)",
        },
        elite: {
          teal:         "hsl(38 92% 50%)",
          "teal-mid":   "hsl(38 88% 42%)",
          "teal-bright":"hsl(38 92% 58%)",
          "teal-light": "hsl(38 80% 66%)",
          green:        "hsl(40 25% 92%)",
          "green-bright":"hsl(40 30% 95%)",
          "green-dim":  "hsl(40 15% 72%)",
          "green-light":"hsl(40 25% 92%)",
        },
        claret: {
          DEFAULT: "hsl(38 92% 50%)",
          bright:  "hsl(38 88% 42%)",
          light:   "hsl(38 80% 66%)",
        },
      },
      borderRadius: {
        "2xl": "calc(var(--radius) * 2.5)",
        xl:    "calc(var(--radius) * 2)",
        lg:    "calc(var(--radius) * 1.5)",
        md:    "var(--radius)",
        sm:    "calc(var(--radius) - 2px)",
      },
      boxShadow: {
        card:          "0 2px 12px hsl(20 11% 11% / 0.35)",
        "card-hover":  "0 6px 32px hsl(38 92% 50% / 0.15), 0 2px 8px hsl(20 11% 11% / 0.25)",
        "teal-glow":   "0 4px 22px hsl(38 92% 50% / 0.30)",
        "green-glow":  "0 4px 22px hsl(40 25% 92% / 0.30)",
        "steel-glow":  "0 4px 22px hsl(38 92% 50% / 0.25)",
        modal:         "0 24px 64px hsl(20 11% 11% / 0.55), 0 4px 24px hsl(38 92% 50% / 0.12)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
