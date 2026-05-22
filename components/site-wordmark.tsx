import { cn } from "@/lib/utils"

type BrandVariant = "header" | "footer"

interface BrandIdentityProps {
  variant?: BrandVariant
  className?: string
}

function EliteShield({ size }: { size: number }) {
  const navyDark  = "#0A1628"
  const navyMid   = "#112244"
  const teal      = "#00C4A8"
  const tealBright= "#00E8C6"
  const green     = "#00D97E"
  const steelBlue = "#2266AA"

  return (
    <svg
      width={size}
      height={Math.round(size * 1.15)}
      viewBox="0 0 40 46"
      fill="none"
      aria-hidden="true"
      style={{ display: "block", flexShrink: 0 }}
    >
      {/* Shield outer */}
      <path
        d="M20 2L4 9V22C4 33 20 44 20 44C20 44 36 33 36 22V9L20 2Z"
        fill={navyMid}
        stroke={teal}
        strokeWidth="1.2"
      />
      {/* Shield inner fill */}
      <path
        d="M20 5.5L7 11.5V22C7 31.5 20 41 20 41C20 41 33 31.5 33 22V11.5L20 5.5Z"
        fill={navyDark}
      />
      {/* Teal top band */}
      <path
        d="M20 5.5L7 11.5L20 12.5L33 11.5L20 5.5Z"
        fill={teal}
        opacity="0.85"
      />
      {/* Steel blue mid-layer accent */}
      <path
        d="M10 22C10 28 14.5 33 20 36C25.5 33 30 28 30 22H10Z"
        fill={steelBlue}
        opacity="0.22"
      />
      {/* E letterform — three bars */}
      <rect x="14" y="16" width="12" height="2.2" rx="0.8" fill={tealBright} />
      <rect x="14" y="21" width="9"  height="2.2" rx="0.8" fill={teal} />
      <rect x="14" y="26" width="12" height="2.2" rx="0.8" fill={tealBright} />
      {/* Green dot accent */}
      <circle cx="29" cy="14" r="2.4" fill={green} />
      {/* Small crown points */}
      <circle cx="20" cy="10" r="1.4" fill={tealBright} />
      <circle cx="14.5" cy="12" r="0.9" fill={teal} opacity="0.80" />
      <circle cx="25.5" cy="12" r="0.9" fill={teal} opacity="0.80" />
      {/* Bottom accent bar */}
      <rect x="11" y="36.5" width="18" height="1.6" rx="0.8" fill={teal} opacity="0.35" />
    </svg>
  )
}

export function BrandIdentity({ variant = "header", className }: BrandIdentityProps) {
  const isHeader = variant === "header"
  const iconSize = isHeader ? 28 : 34
  const teal     = "#00C4A8"
  const green    = "#00D97E"

  return (
    <span
      className={cn("inline-flex items-center select-none", isHeader ? "gap-2.5" : "gap-3", className)}
      aria-label="Elite List Betting Sites UK"
    >
      <EliteShield size={iconSize} />

      <span
        className="flex flex-col leading-none whitespace-nowrap"
        style={{ gap: "3px" }}
      >
        {/* ELITE LIST */}
        <span
          className="font-display font-bold tracking-tight leading-none"
          style={{
            fontSize: isHeader ? "clamp(14px, 1.8vw, 20px)" : "20px",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: teal }}>ELITE</span>
          {" "}
          <span style={{ color: "#e2f0fb" }}>List</span>
        </span>

        {/* BETTING SITES UK */}
        <span
          className="font-sans font-semibold leading-none"
          style={{
            fontSize: isHeader ? "clamp(9px, 1vw, 11px)" : "10.5px",
            color: isHeader ? "hsl(200 18% 70%)" : "hsl(200 14% 56%)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Betting Sites{" "}
          <span style={{ color: green, fontWeight: 700 }}>UK</span>
        </span>
      </span>
    </span>
  )
}
