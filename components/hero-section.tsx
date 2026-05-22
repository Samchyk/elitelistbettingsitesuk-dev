"use client"

import Image from "next/image"
import { ShieldCheck, BadgeCheck, Zap, Trophy, Star, TrendingUp } from "lucide-react"

interface VipHeroBannerProps {
  onDisclosureOpen: () => void
  onTermsOpen: () => void
}

const trustPills = [
  { icon: ShieldCheck, label: "UKGC Licensed",      color: "teal"  },
  { icon: BadgeCheck,  label: "Expert Verified",    color: "green" },
  { icon: Zap,         label: "Live Odds",          color: "teal"  },
  { icon: Trophy,      label: "Top Ranked",         color: "green" },
  { icon: Star,        label: "Verified May 2026",  color: "teal"  },
  { icon: TrendingUp,  label: "Monthly Updates",    color: "green" },
]

const statsRow = [
  { value: "47+",    label: "Sites Reviewed" },
  { value: "100%",   label: "UKGC Licensed"  },
  { value: "May 26", label: "Last Updated"   },
  { value: "18+",    label: "UK Adults Only" },
]

export function VipHeroBanner({ onDisclosureOpen, onTermsOpen }: VipHeroBannerProps) {
  return (
    <section
      className="relative overflow-hidden w-full"
      aria-label="Elite List Betting Sites UK — site introduction"
    >
      {/* Background image */}
      <div className="relative" style={{ minHeight: "clamp(260px, 34vw, 380px)" }}>
        <Image
          src="/images/hero-sports-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden
        />

        {/* Overlays */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, hsl(214 55% 4% / 0.55) 0%, hsl(214 55% 4% / 0.82) 60%, hsl(214 55% 4% / 0.98) 100%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 50% 20%, hsl(172 80% 30% / 0.10) 0%, transparent 65%)",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 sport-lines pointer-events-none opacity-40" aria-hidden />

        {/* Top colour stripe */}
        <div
          className="absolute top-0 inset-x-0 h-[3px] pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, hsl(172 80% 36%) 0%, hsl(152 78% 42%) 50%, hsl(207 72% 48%) 100%)",
          }}
          aria-hidden
        />

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-8 pt-8 md:pt-12 pb-8 md:pb-10">

          {/* Eyebrow pill */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5"
            style={{
              background: "hsl(172 80% 36% / 0.10)",
              border: "1px solid hsl(172 80% 36% / 0.32)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full elite-pulse shrink-0"
              style={{ background: "hsl(172 80% 52%)" }}
              aria-hidden
            />
            <span
              className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.24em]"
              style={{ color: "hsl(172 80% 60%)" }}
            >
              UK Regulated&nbsp;&middot;&nbsp;Elite Rankings 2026
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-display font-black uppercase leading-none tracking-tight mb-3"
            style={{ fontSize: "clamp(2.2rem, 7vw, 4.4rem)", letterSpacing: "-0.03em" }}
          >
            <span className="block" style={{ color: "hsl(0 0% 100%)" }}>
              Elite Betting
            </span>
            <span
              className="block"
              style={{
                color: "hsl(172 80% 52%)",
                textShadow: "0 0 60px hsl(172 80% 36% / 0.55)",
              }}
            >
              Sites&nbsp;UK
            </span>
          </h1>

          {/* Descriptor */}
          <p
            className="max-w-[52ch] leading-relaxed mb-6"
            style={{
              fontSize: "clamp(0.78rem, 1.3vw, 0.92rem)",
              color: "hsl(200 16% 60%)",
            }}
          >
            UKGC-licensed bookmakers independently ranked by odds quality, payout speed,
            live betting depth and mobile experience — verified every month.
          </p>

          {/* ── Trust pills — horizontal scrollable row ── */}
          <div
            className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mb-5"
            role="list"
            aria-label="Quality assurance signals"
          >
            {trustPills.map((pill) => {
              const Icon = pill.icon
              const isTeal = pill.color === "teal"
              return (
                <div
                  key={pill.label}
                  role="listitem"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                  style={{
                    background: "hsl(214 50% 7% / 0.80)",
                    border: `1px solid ${isTeal ? "hsl(172 80% 36% / 0.32)" : "hsl(152 78% 42% / 0.26)"}`,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <Icon
                    className="w-3 h-3 shrink-0"
                    style={{ color: isTeal ? "hsl(172 80% 52%)" : "hsl(152 78% 52%)" }}
                    strokeWidth={2.5}
                    aria-hidden
                  />
                  <span
                    className="text-[9.5px] sm:text-[10px] font-semibold whitespace-nowrap"
                    style={{ color: "hsl(200 16% 78%)" }}
                  >
                    {pill.label}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Disclosure row */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            {[
              { label: "Advertiser Disclosure", onClick: onDisclosureOpen },
              { label: "18+ T&Cs Apply",        onClick: onTermsOpen },
            ].map((d, i) => (
              <>
                {i > 0 && (
                  <span key={`sep-${i}`} style={{ color: "hsl(200 10% 24%)", fontSize: "9px" }} aria-hidden>
                    ·
                  </span>
                )}
                <button
                  key={d.label}
                  type="button"
                  onClick={d.onClick}
                  className="underline underline-offset-2 transition-colors"
                  style={{ fontSize: "9.5px", color: "hsl(200 14% 38%)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "hsl(172 80% 52%)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "hsl(200 14% 38%)")}
                >
                  {d.label}
                </button>
              </>
            ))}
            <span style={{ color: "hsl(200 10% 24%)", fontSize: "9px" }} aria-hidden>·</span>
            <a
              href="https://www.begambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors"
              style={{ fontSize: "9.5px", color: "hsl(200 14% 38%)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "hsl(172 80% 52%)")}
              onMouseLeave={e => (e.currentTarget.style.color = "hsl(200 14% 38%)")}
            >
              BeGambleAware.org
            </a>
          </div>

        </div>
      </div>

      {/* ── Stats bar ── */}
      <div
        className="relative w-full"
        style={{
          background: "hsl(214 50% 7%)",
          borderTop: "1px solid hsl(172 80% 36% / 0.20)",
          borderBottom: "1px solid hsl(214 36% 14%)",
        }}
      >
        <div
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, hsl(172 80% 44% / 0.40), transparent)" }}
          aria-hidden
        />
        <div className="container mx-auto max-w-4xl px-4">
          <div
            className="grid grid-cols-4"
            role="list"
            aria-label="Site statistics"
          >
            {statsRow.map((stat, i) => (
              <div
                key={stat.label}
                role="listitem"
                className="flex flex-col items-center justify-center py-3 sm:py-4 gap-0.5"
                style={{
                  borderRight: i < statsRow.length - 1 ? "1px solid hsl(214 32% 16%)" : "none",
                }}
              >
                <span
                  className="font-display font-black leading-none"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 1.35rem)", color: "hsl(172 80% 52%)" }}
                >
                  {stat.value}
                </span>
                <span
                  className="font-sans font-semibold uppercase text-center leading-none"
                  style={{ fontSize: "clamp(6.5px, 0.85vw, 8.5px)", letterSpacing: "0.14em", color: "hsl(200 14% 40%)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
