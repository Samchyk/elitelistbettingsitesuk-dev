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
        navy: {
          DEFAULT: "hsl(var(--navy))",
          mid:     "hsl(var(--navy-mid))",
          soft:    "hsl(var(--navy-soft))",
          border:  "hsl(var(--navy-border))",
        },
        elite: {
          teal:         "hsl(var(--elite-teal))",
          "teal-mid":   "hsl(var(--elite-teal-mid))",
          "teal-bright":"hsl(var(--elite-teal-bright))",
          "teal-light": "hsl(var(--elite-teal-light))",
          green:        "hsl(var(--elite-green))",
          "green-bright":"hsl(var(--elite-green-bright))",
          "green-dim":  "hsl(var(--elite-green-dim))",
          "green-light":"hsl(var(--elite-green-light))",
        },
        steel: {
          DEFAULT: "hsl(var(--steel-blue))",
          mid:     "hsl(var(--steel-blue-mid))",
          light:   "hsl(var(--steel-blue-light))",
        },
        /* Legacy aliases for any remaining references */
        vip: {
          green:  "hsl(var(--elite-teal))",
          mid:    "hsl(var(--elite-teal-mid))",
          bright: "hsl(var(--elite-teal-bright))",
          light:  "hsl(var(--elite-teal-light))",
        },
        gold: {
          DEFAULT: "hsl(var(--elite-green))",
          bright:  "hsl(var(--elite-green-bright))",
          dim:     "hsl(var(--elite-green-dim))",
          light:   "hsl(var(--elite-green-light))",
        },
        claret: {
          DEFAULT: "hsl(var(--steel-blue))",
          bright:  "hsl(var(--steel-blue-mid))",
          light:   "hsl(var(--steel-blue-light))",
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
        card:          "0 2px 12px hsl(214 50% 8% / 0.35)",
        "card-hover":  "0 6px 32px hsl(172 80% 36% / 0.20), 0 2px 8px hsl(214 50% 8% / 0.25)",
        "teal-glow":   "0 4px 22px hsl(172 80% 36% / 0.35)",
        "green-glow":  "0 4px 22px hsl(152 78% 42% / 0.35)",
        "steel-glow":  "0 4px 22px hsl(207 72% 48% / 0.30)",
        modal:         "0 24px 64px hsl(214 50% 8% / 0.55), 0 4px 24px hsl(172 80% 36% / 0.14)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
