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
              "linear-gradient(180deg, hsl(20 11% 11% / 0.60) 0%, hsl(20 11% 11% / 0.82) 60%, hsl(20 11% 11% / 0.98) 100%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 50% 20%, hsl(38 92% 50% / 0.08) 0%, transparent 65%)",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 sport-lines pointer-events-none opacity-40" aria-hidden />

        {/* Top colour stripe */}
        <div
          className="absolute top-0 inset-x-0 h-[3px] pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, hsl(38 92% 50%) 0%, hsl(38 88% 42%) 50%, hsl(38 92% 50%) 100%)",
          }}
          aria-hidden
        />

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-8 pt-8 md:pt-12 pb-8 md:pb-10">

          {/* Eyebrow pill */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5"
            style={{
              background: "hsl(38 92% 50% / 0.10)",
              border: "1px solid hsl(38 92% 50% / 0.26)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full elite-pulse shrink-0"
              style={{ background: "hsl(38 92% 60%)" }}
              aria-hidden
            />
            <span
              className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.24em]"
              style={{ color: "hsl(38 92% 68%)" }}
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
                color: "hsl(38 92% 60%)",
                textShadow: "0 0 60px hsl(38 92% 50% / 0.45)",
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
              color: "hsl(40 12% 68%)",
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
                    background: "hsl(20 11% 11% / 0.80)",
                    border: `1px solid ${isTeal ? "hsl(38 92% 50% / 0.24)" : "hsl(40 25% 92% / 0.20)"}`,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <Icon
                    className="w-3 h-3 shrink-0"
                    style={{ color: isTeal ? "hsl(38 92% 60%)" : "hsl(40 25% 88%)" }}
                    strokeWidth={2.5}
                    aria-hidden
                  />
                  <span
                    className="text-[9.5px] sm:text-[10px] font-semibold whitespace-nowrap"
                    style={{ color: "hsl(40 10% 78%)" }}
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
                  <span key={`sep-${i}`} style={{ color: "hsl(20 10% 28%)", fontSize: "9px" }} aria-hidden>
                    ·
                  </span>
                )}
                <button
                  key={d.label}
                  type="button"
                  onClick={d.onClick}
                  className="underline underline-offset-2 transition-colors"
                  style={{ fontSize: "9.5px", color: "hsl(40 14% 42%)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "hsl(38 92% 60%)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "hsl(40 14% 42%)")}
                >
                  {d.label}
                </button>
              </>
            ))}
            <span style={{ color: "hsl(20 10% 28%)", fontSize: "9px" }} aria-hidden>·</span>
            <a
              href="https://www.begambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors"
              style={{ fontSize: "9.5px", color: "hsl(40 14% 42%)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "hsl(38 92% 60%)")}
              onMouseLeave={e => (e.currentTarget.style.color = "hsl(40 14% 42%)")}
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
          background: "hsl(20 11% 11%)",
          borderTop: "1px solid hsl(38 92% 50% / 0.16)",
          borderBottom: "1px solid hsl(20 10% 18%)",
        }}
      >
        <div
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, hsl(38 92% 50% / 0.30), transparent)" }}
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
                  borderRight: i < statsRow.length - 1 ? "1px solid hsl(20 10% 18%)" : "none",
                }}
              >
                <span
                  className="font-display font-black leading-none"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 1.35rem)", color: "hsl(38 92% 60%)" }}
                >
                  {stat.value}
                </span>
                <span
                  className="font-sans font-semibold uppercase text-center leading-none"
                  style={{ fontSize: "clamp(6.5px, 0.85vw, 8.5px)", letterSpacing: "0.14em", color: "hsl(40 14% 44%)" }}
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
