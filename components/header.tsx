import Link from "next/link"
import { BrandIdentity } from "@/components/site-wordmark"
import { ShieldCheck } from "lucide-react"

const navLinks = [
  { href: "/about",              label: "About" },
  { href: "/responsible-gaming", label: "Safer Betting" },
  { href: "/terms",              label: "Terms" },
  { href: "/privacy-policy",     label: "Privacy" },
]

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-40"
      role="banner"
    >
      {/* ── Amber top accent line ── */}
      <div
        className="h-[3px] w-full"
        aria-hidden
        style={{
          background:
            "linear-gradient(90deg, hsl(38 92% 50%) 0%, hsl(38 88% 42%) 50%, hsl(38 92% 50%) 100%)",
        }}
      />

      {/* ── Main header bar ── */}
      <div
        style={{
          background: "hsl(20 11% 11%)",
          borderBottom: "1px solid hsl(38 92% 50% / 0.12)",
          boxShadow: "0 4px 28px hsl(20 11% 6% / 0.65)",
        }}
      >
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between h-[58px] gap-6">

            {/* Brand logo */}
            <Link
              href="/"
              className="hover:opacity-80 transition-opacity shrink-0"
              aria-label="Elite List Betting Sites UK — Home"
            >
              <BrandIdentity variant="header" />
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden md:flex items-center gap-1"
              aria-label="Site navigation"
            >
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-item px-3 py-1.5 rounded-sm text-[11.5px] font-semibold uppercase tracking-wide transition-all"
                  style={{ letterSpacing: "0.06em" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right: 18+ badge */}
            <div
              className="hidden sm:flex items-center gap-2 shrink-0 px-3 py-1.5 rounded-sm"
              style={{
                background: "hsl(38 92% 50% / 0.10)",
                border: "1px solid hsl(38 92% 50% / 0.22)",
              }}
            >
              <ShieldCheck
                className="w-3.5 h-3.5"
                style={{ color: "hsl(38 92% 60%)" }}
                strokeWidth={2}
              />
              <span
                className="font-sans font-bold text-[10px] uppercase tracking-widest"
                style={{ color: "hsl(38 92% 60%)" }}
              >
                18+ Only
              </span>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}
