import type React from "react"
import Link from "next/link"
import { ArrowLeft, ShieldCheck } from "lucide-react"

interface PageFrameProps {
  title: string
  eyebrow?: string
  children: React.ReactNode
}

export function PageFrame({ title, eyebrow, children }: PageFrameProps) {
  const date = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <div className="min-h-screen" style={{ background: "hsl(214 50% 8%)" }}>

      {/* ── Page hero banner ── */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "hsl(214 54% 6%)",
          borderBottom: "2px solid hsl(172 80% 36% / 0.40)",
        }}
      >
        {/* Teal gradient top stripe */}
        <div
          className="absolute top-0 inset-x-0 h-[4px]"
          aria-hidden
          style={{
            background:
              "linear-gradient(90deg, hsl(172 80% 36%) 0%, hsl(172 85% 46%) 38%, hsl(152 78% 42%) 68%, hsl(207 72% 48%) 100%)",
          }}
        />

        {/* Left teal edge bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          aria-hidden
          style={{
            background: "linear-gradient(180deg, hsl(172 80% 44%), hsl(152 78% 36% / 0.50), transparent)",
          }}
        />

        {/* Diagonal sport lines overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            backgroundImage:
              "repeating-linear-gradient(-55deg, hsl(172 80% 36% / 0.035) 0px, hsl(172 80% 36% / 0.035) 1px, transparent 1px, transparent 40px)",
          }}
        />

        {/* Ambient teal glow top-right */}
        <div
          className="absolute -top-16 -right-16 w-80 h-80 rounded-full pointer-events-none"
          aria-hidden
          style={{
            background: "radial-gradient(circle, hsl(172 80% 36% / 0.13) 0%, transparent 68%)",
          }}
        />

        <div className="relative container mx-auto max-w-5xl px-4 py-10 sm:py-14 pl-7 sm:pl-12">
          <Link
            href="/"
            className="back-to-home-link inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest mb-6"
            aria-label="Return to Elite List Betting Sites UK homepage"
          >
            <ArrowLeft className="w-3 h-3" />
            Back to Rankings
          </Link>

          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-3">
            <span
              className="h-[3px] w-8 rounded-full"
              style={{ background: "hsl(172 80% 44%)" }}
              aria-hidden
            />
            <span
              className="text-[10px] font-bold uppercase tracking-[0.28em]"
              style={{ color: "hsl(172 80% 54%)" }}
            >
              {eyebrow ?? "elitelistbettingsitesuk.com"}
            </span>
          </div>

          <h1
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-balance leading-none mb-4 uppercase"
            style={{ color: "hsl(0 0% 98%)" }}
          >
            {title}
          </h1>

          <div className="flex items-center gap-3 flex-wrap">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wide"
              style={{
                background: "hsl(172 80% 36% / 0.14)",
                border: "1px solid hsl(172 80% 36% / 0.38)",
                color: "hsl(172 80% 54%)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full elite-pulse"
                style={{ background: "hsl(172 80% 48%)" }}
                aria-hidden
              />
              Updated {date}
            </span>
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold"
              style={{ color: "hsl(200 14% 42%)" }}
            >
              <ShieldCheck className="w-3 h-3" style={{ color: "hsl(172 80% 40%)" }} strokeWidth={2} />
              elitelistbettingsitesuk.com
            </span>
          </div>
        </div>
      </div>

      {/* ── Content area ── */}
      <div className="container mx-auto max-w-5xl px-4 py-10 sm:py-14">
        <div className="space-y-5">
          {children}
        </div>

        {/* Bottom 18+ notice */}
        <div
          className="mt-10 flex items-start gap-3 rounded-md px-5 py-4"
          style={{
            background: "hsl(214 52% 6%)",
            border: "1px solid hsl(172 80% 36% / 0.18)",
            borderLeft: "3px solid hsl(172 80% 36%)",
          }}
        >
          <p
            className="text-[11px] leading-relaxed"
            style={{ color: "hsl(200 14% 50%)" }}
          >
            <strong style={{ color: "hsl(200 18% 70%)" }}>18+ only.</strong>{" "}
            elitelistbettingsitesuk.com is an independent editorial comparison site and does not
            accept wagers. All betting activity takes place on UKGC-licensed third-party platforms.
            Gambling involves financial risk — please read our{" "}
            <Link
              href="/responsible-gaming"
              className="underline underline-offset-2 transition-opacity hover:opacity-80"
              style={{ color: "hsl(172 80% 46%)" }}
            >
              Safer Betting
            </Link>{" "}
            guidance before placing a bet.
          </p>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   CONTENT CARD — dark sports theme
───────────────────────────────────────────── */

export function ContentCard({
  title,
  icon,
  accent,
  children,
}: {
  title: string
  icon?: React.ReactNode
  accent?: string
  children: React.ReactNode
}) {
  const accentColor = accent ?? "hsl(172 80% 36%)"

  return (
    <section
      className="rounded-md overflow-hidden"
      style={{
        background: "hsl(214 44% 11%)",
        border: "1px solid hsl(214 32% 19%)",
        boxShadow: "0 2px 16px hsl(214 52% 4% / 0.30)",
      }}
    >
      {/* Card header */}
      <div
        className="flex items-center gap-3 px-5 py-4"
        style={{
          background: "hsl(214 48% 8%)",
          borderBottom: "1px solid hsl(214 32% 17%)",
          borderLeft: `3px solid ${accentColor}`,
        }}
      >
        {icon && (
          <span
            className="flex items-center justify-center w-8 h-8 rounded-md shrink-0"
            style={{
              background: `${accentColor}18`,
              border: `1px solid ${accentColor}38`,
            }}
          >
            <span style={{ color: accentColor }}>{icon}</span>
          </span>
        )}
        {!icon && (
          <span
            className="w-1 h-6 rounded-full shrink-0"
            style={{ background: accentColor }}
            aria-hidden
          />
        )}
        <h2
          className="font-display font-black text-sm sm:text-base uppercase tracking-wide"
          style={{ color: "hsl(200 18% 88%)" }}
        >
          {title}
        </h2>
      </div>

      {/* Card body */}
      <div
        className="px-5 sm:px-6 py-5 text-sm leading-relaxed space-y-3"
        style={{ color: "hsl(200 14% 58%)" }}
      >
        {children}
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   INNER CARD — used within ContentCard bodies
   (replaces old light cream hsl(40 14% 97%) cards)
───────────────────────────────────────────── */

export function InnerCard({
  children,
  accent,
  className,
}: {
  children: React.ReactNode
  accent?: string
  className?: string
}) {
  const color = accent ?? "hsl(214 32% 20%)"
  return (
    <div
      className={className}
      style={{
        background: "hsl(214 48% 9%)",
        border: `1px solid ${color}`,
        borderRadius: "6px",
        padding: "12px 14px",
      }}
    >
      {children}
    </div>
  )
}
