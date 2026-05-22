"use client"

import { useState, useEffect } from "react"
import { X, ExternalLink, Trophy, ShieldCheck, Zap, Star, Clock, CreditCard, ChevronRight, Award } from "lucide-react"
import Link from "next/link"
import type { BettingSite } from "../types"

interface Top3ModalProps {
  bettingSites: BettingSite[]
  casinoSites: BettingSite[]
}

function ScoreRing({ score }: { score: number }) {
  const pct = (score / 10) * 100
  const r = 28
  const circ = 2 * Math.PI * r
  const dash = (pct / 100) * circ
  return (
    <div className="relative flex items-center justify-center" style={{ width: 72, height: 72 }}>
      <svg width={72} height={72} style={{ transform: "rotate(-90deg)", position: "absolute" }}>
        <circle cx={36} cy={36} r={r} fill="none" stroke="hsl(214 32% 22%)" strokeWidth={5} />
        <circle
          cx={36} cy={36} r={r} fill="none"
          stroke="hsl(172 80% 38%)" strokeWidth={5}
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
        />
      </svg>
      <div className="flex flex-col items-center leading-none" style={{ zIndex: 1 }}>
        <span className="text-base font-black" style={{ color: "hsl(172 80% 52%)" }}>{score.toFixed(1)}</span>
        <span className="text-[8px] font-bold uppercase tracking-wide" style={{ color: "hsl(172 80% 40%)" }}>/10</span>
      </div>
    </div>
  )
}

function StarRow({ score }: { score: number }) {
  const starRating = score / 2
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => {
        const fill = Math.max(0, Math.min(1, starRating - i))
        return (
          <svg key={i} width={12} height={12} viewBox="0 0 20 20" style={{ flexShrink: 0 }}>
            <polygon points="10,1 12.9,7 19.5,7.6 14.5,12 16.2,18.5 10,15 3.8,18.5 5.5,12 0.5,7.6 7.1,7" fill="hsl(214 32% 22%)" />
            <polygon points="10,1 12.9,7 19.5,7.6 14.5,12 16.2,18.5 10,15 3.8,18.5 5.5,12 0.5,7.6 7.1,7" fill="hsl(172 80% 48%)" style={{ clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)` }} />
          </svg>
        )
      })}
    </div>
  )
}

export function Modal({ bettingSites, casinoSites: _casinoSites }: Top3ModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 8000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  if (!isOpen) return null

  const topSite = bettingSites[0]

  const features = [
    { icon: ShieldCheck, label: "UKGC Licensed",    sub: "Fully regulated" },
    { icon: Zap,         label: "Fast Payouts",      sub: "Within 24 hours" },
    { icon: Clock,       label: "Live Betting",      sub: "1000+ markets" },
    { icon: CreditCard,  label: "Easy Deposit",      sub: "10+ methods" },
  ]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5"
      style={{ background: "hsl(222 47% 11% / 0.75)", backdropFilter: "blur(10px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false) }}
    >
      <div
        className="relative w-full"
        style={{ maxWidth: 420 }}
      >
        {/* Close */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute -top-3 -right-3 z-[60] flex h-8 w-8 items-center justify-center rounded-full transition-all hover:scale-110"
          style={{ background: "hsl(0 0% 100%)", border: "2px solid hsl(210 18% 86%)", color: "hsl(222 30% 40%)", boxShadow: "0 4px 12px hsl(222 47% 11% / 0.18)" }}
          aria-label="Close modal"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <div
          className="rounded-2xl overflow-hidden flex flex-col"
          style={{
            background: "hsl(214 44% 10%)",
            boxShadow: "0 40px 80px hsl(214 55% 4% / 0.50), 0 0 0 1px hsl(172 80% 36% / 0.20)",
            border: "1px solid hsl(172 80% 36% / 0.18)",
          }}
        >
          {/* ── HERO BANNER ── */}
          <div
            className="relative px-5 pt-5 pb-4 text-center overflow-hidden"
            style={{ background: "linear-gradient(135deg, hsl(214 55% 4%) 0%, hsl(214 50% 8%) 100%)" }}
          >
            {/* Diagonal sport lines */}
            <div className="absolute inset-0 pointer-events-none sport-lines" />
            {/* Teal ambient glow */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-40 pointer-events-none"
              style={{ background: "radial-gradient(ellipse, hsl(172 80% 36% / 0.20) 0%, transparent 70%)" }} />

            {/* Teal eyebrow pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-2.5"
              style={{ background: "hsl(172 80% 36% / 0.14)", border: "1px solid hsl(172 80% 36% / 0.34)" }}>
              <Award className="w-3 h-3" style={{ color: "hsl(172 80% 52%)" }} />
              <span className="text-[9px] font-bold uppercase tracking-[0.16em]" style={{ color: "hsl(172 80% 56%)" }}>
                Elite Pick 2026 &mdash; #1 Ranked UK Site
              </span>
            </div>

            <h2 className="text-xl font-black uppercase tracking-tight leading-tight mb-0.5"
              style={{ color: "hsl(0 0% 100%)" }}>
              {topSite?.name}
            </h2>
            <p className="text-[11px] font-medium" style={{ color: "hsl(200 14% 56%)" }}>
              Verified by elitelistbettingsitesuk.com experts
            </p>

            {/* Teal bottom edge */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px]"
              style={{ background: "linear-gradient(90deg, transparent, hsl(172 80% 36%), transparent)" }} />
          </div>

          {/* ── SPLIT ROW: Logo+Score | Offer Box ── */}
          <div className="flex gap-0" style={{ borderBottom: "1px solid hsl(214 32% 16%)" }}>

            {/* Left: logo + score */}
            <div className="flex flex-col items-center justify-center gap-2.5 px-4 py-4 shrink-0"
              style={{ width: 120, background: "hsl(214 50% 7%)", borderRight: "1px solid hsl(214 32% 18%)" }}>
              <div className="flex items-center justify-center rounded-lg px-3 py-2 w-full"
                style={{ background: "hsl(214 44% 10%)", border: "1px solid hsl(214 32% 20%)", minHeight: 44 }}>
                <img
                  src={topSite?.logo || "/placeholder.svg"}
                  alt={topSite?.name || ""}
                  className="max-w-full object-contain"
                  style={{ maxHeight: 32 }}
                />
              </div>
              <ScoreRing score={topSite?.score ?? 9.8} />
              <StarRow score={topSite?.score ?? 9.8} />
              <span className="text-[9px] font-semibold" style={{ color: "hsl(200 14% 48%)" }}>
                {topSite?.reviews?.toLocaleString("en-GB")} reviews
              </span>
            </div>

            {/* Right: offer details */}
            <div className="flex-1 flex flex-col justify-center px-4 py-4 gap-2">
              {/* Rank badge */}
              <div className="flex items-center gap-1.5">
                <div className="flex items-center justify-center w-5 h-5 rounded-full font-black text-[9px]"
                  style={{ background: "hsl(172 80% 36%)", color: "hsl(214 55% 4%)" }}>
                  1
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: "hsl(172 80% 50%)" }}>
                  Top Rated Bookmaker
                </span>
              </div>

              {/* Bonus */}
              <div className="rounded-lg px-3 py-2.5"
                style={{ background: "hsl(172 80% 36% / 0.08)", border: "1px solid hsl(172 80% 36% / 0.22)" }}>
                <p className="text-[10px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: "hsl(172 80% 48%)" }}>
                  Welcome Offer
                </p>
                <p className="text-lg font-black leading-tight uppercase" style={{ color: "hsl(0 0% 97%)" }}>
                  {topSite?.bonus}
                </p>
                <p className="text-[10px] font-medium mt-0.5" style={{ color: "hsl(200 14% 52%)" }}>
                  {topSite?.welcomeOffer}
                </p>
              </div>

              {/* Payment methods */}
              <div className="flex flex-wrap gap-1">
                {(topSite?.paymentMethods ?? []).slice(0, 3).map((m) => (
                  <span key={m} className="text-[8px] font-semibold px-1.5 py-0.5 rounded"
                    style={{ background: "hsl(214 44% 14%)", border: "1px solid hsl(214 32% 20%)", color: "hsl(200 14% 56%)" }}>
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── FEATURE GRID 2×2 ── */}
          <div className="grid grid-cols-2 gap-px p-px" style={{ background: "hsl(214 32% 16%)" }}>
            {features.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-2.5 px-3 py-2.5"
                style={{ background: "hsl(214 44% 10%)" }}>
                <div className="flex items-center justify-center w-7 h-7 rounded-md shrink-0"
                  style={{ background: "hsl(172 80% 36% / 0.10)", border: "1px solid hsl(172 80% 36% / 0.24)" }}>
                  <Icon className="w-3.5 h-3.5" style={{ color: "hsl(172 80% 50%)" }} strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold leading-none truncate" style={{ color: "hsl(0 0% 92%)" }}>{label}</p>
                  <p className="text-[9px] leading-none mt-0.5" style={{ color: "hsl(200 14% 50%)" }}>{sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── CTA SECTION ── */}
          <div className="px-4 pt-3 pb-2" style={{ background: "hsl(214 48% 8%)", borderTop: "1px solid hsl(214 32% 16%)" }}>
            <Link
              href={topSite?.link || "#"}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex items-center justify-center gap-2 w-full rounded-md font-black text-[13px] uppercase tracking-wide py-3.5 transition-all hover:opacity-90 active:scale-[0.98]"
              style={{
                background: "hsl(172 80% 36%)",
                color: "hsl(214 55% 4%)",
                boxShadow: "0 4px 20px hsl(172 80% 36% / 0.35)",
              }}
            >
              <Trophy className="w-4 h-4" />
              Claim Elite Offer Now
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <div className="flex items-center justify-between mt-2 mb-1">
              <Link href="/terms" className="flex items-center gap-1 text-[9px] font-semibold underline underline-offset-2"
                style={{ color: "hsl(172 80% 46%)" }}>
                Full T&Cs <ChevronRight className="w-2.5 h-2.5" />
              </Link>
              <Link href="/" className="flex items-center gap-1 text-[9px] font-semibold underline underline-offset-2"
                style={{ color: "hsl(200 14% 50%)" }}>
                View all sites <ChevronRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          </div>

          {/* ── DISCLAIMER ── */}
          <div className="px-4 py-2.5" style={{ borderTop: "1px solid hsl(214 32% 14%)", background: "hsl(214 50% 7%)" }}>
            <p className="text-center text-[8.5px] leading-relaxed" style={{ color: "hsl(200 14% 44%)" }}>
              18+ &mdash; New customers only &mdash; T&Cs apply &mdash; Gamble responsibly &mdash;{" "}
              <a href="https://www.begambleaware.org" className="underline underline-offset-2"
                style={{ color: "hsl(172 80% 46%)" }} target="_blank" rel="noreferrer">
                BeGambleAware.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
