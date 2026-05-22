"use client"

import { useState } from "react"
import { Star, ChevronDown, ChevronUp, ExternalLink, Trophy, Award, TrendingUp, Shield } from "lucide-react"
import type { BettingSite } from "../types"
import Link from "next/link"

interface BookmakerCardProps {
  site: BettingSite
  rank: number
}

const TIER_CONFIG: Record<number, {
  label: string
  icon: typeof Trophy
  accentColor: string
  accentGradient: string
  badgeBg: string
  badgeColor: string
  glowColor: string
  rankColor: string
}> = {
  1: {
    label: "Elite Pick",
    icon: Trophy,
    accentColor: "hsl(172 80% 38%)",
    accentGradient: "linear-gradient(180deg, hsl(172 80% 44%), hsl(172 80% 28%))",
    badgeBg: "hsl(172 80% 36%)",
    badgeColor: "hsl(214 55% 5%)",
    glowColor: "hsl(172 80% 36% / 0.22)",
    rankColor: "hsl(172 80% 52%)",
  },
  2: {
    label: "Top Ranked",
    icon: Award,
    accentColor: "hsl(152 78% 38%)",
    accentGradient: "linear-gradient(180deg, hsl(152 84% 46%), hsl(152 78% 26%))",
    badgeBg: "hsl(152 78% 34%)",
    badgeColor: "hsl(214 55% 5%)",
    glowColor: "hsl(152 78% 38% / 0.16)",
    rankColor: "hsl(152 80% 50%)",
  },
  3: {
    label: "Highly Rated",
    icon: TrendingUp,
    accentColor: "hsl(207 72% 44%)",
    accentGradient: "linear-gradient(180deg, hsl(207 80% 56%), hsl(207 72% 30%))",
    badgeBg: "hsl(207 72% 40%)",
    badgeColor: "hsl(0 0% 100%)",
    glowColor: "hsl(207 72% 44% / 0.14)",
    rankColor: "hsl(207 80% 60%)",
  },
}

const DEFAULT_TIER = {
  label: "",
  icon: Shield,
  accentColor: "hsl(214 32% 28%)",
  accentGradient: "linear-gradient(180deg, hsl(214 32% 32%), hsl(214 32% 20%))",
  badgeBg: "hsl(214 32% 26%)",
  badgeColor: "hsl(200 14% 80%)",
  glowColor: "hsl(214 32% 22% / 0.10)",
  rankColor: "hsl(200 14% 54%)",
}

function StarRating({ score, size = 12 }: { score: number; size?: number }) {
  const filledStars = score / 2
  return (
    <div className="flex gap-px" role="img" aria-label={`Rating: ${score} out of 10`}>
      {[...Array(5)].map((_, i) => {
        const fill = Math.max(0, Math.min(1, filledStars - i))
        return (
          <span key={i} className="relative shrink-0" style={{ width: size, height: size }}>
            <Star
              className="absolute inset-0"
              style={{ width: size, height: size, color: "hsl(214 32% 26%)" }}
              fill="currentColor"
              strokeWidth={0}
            />
            <Star
              className="absolute inset-0"
              style={{
                width: size,
                height: size,
                color: "hsl(172 80% 48%)",
                clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)`,
              }}
              fill="currentColor"
              strokeWidth={0}
            />
          </span>
        )
      })}
    </div>
  )
}

function ScoreCircle({ score }: { score: number }) {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-full shrink-0"
      style={{
        width: 52,
        height: 52,
        background: "hsl(214 50% 7%)",
        border: "2px solid hsl(172 80% 36% / 0.36)",
        boxShadow: "0 0 12px hsl(172 80% 36% / 0.14)",
      }}
      aria-label={`Score: ${score} out of 10`}
    >
      <span
        className="font-display font-black leading-none"
        style={{ fontSize: "1.1rem", color: "hsl(172 80% 54%)" }}
      >
        {score.toFixed(1)}
      </span>
      <span
        className="text-[8px] font-bold uppercase tracking-wide leading-none mt-0.5"
        style={{ color: "hsl(200 14% 46%)" }}
      >
        /10
      </span>
    </div>
  )
}

function RankColumn({
  rank,
  tier,
}: {
  rank: number
  tier: typeof TIER_CONFIG[number] | typeof DEFAULT_TIER
}) {
  const Icon = tier.icon
  const hasTier = rank <= 3
  return (
    <div
      className="flex flex-col items-center justify-center gap-1 shrink-0"
      style={{
        width: 52,
        background: "hsl(214 55% 6%)",
        borderRight: `1px solid hsl(214 32% 16%)`,
      }}
    >
      {/* Rank number */}
      <span
        className="font-display font-black leading-none"
        style={{ fontSize: "1.4rem", color: tier.rankColor }}
      >
        {rank < 10 ? `0${rank}` : rank}
      </span>
      {/* Tier icon if top 3 */}
      {hasTier && (
        <div
          className="flex items-center justify-center w-5 h-5 rounded-full"
          style={{
            background: tier.badgeBg,
            color: tier.badgeColor,
          }}
          aria-hidden
        >
          <Icon className="w-2.5 h-2.5" strokeWidth={2.5} />
        </div>
      )}
    </div>
  )
}

function TierBadge({
  tier,
}: {
  tier: typeof TIER_CONFIG[number] | typeof DEFAULT_TIER
}) {
  const Icon = tier.icon
  return (
    <div
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm text-[8px] font-bold uppercase tracking-[0.16em] whitespace-nowrap"
      style={{
        background: `${tier.badgeBg}22`,
        color: tier.badgeColor === "hsl(214 55% 5%)" ? tier.accentColor : tier.badgeColor,
        border: `1px solid ${tier.badgeBg}55`,
      }}
    >
      <Icon className="w-2 h-2 shrink-0" aria-hidden />
      {tier.label}
    </div>
  )
}

export function BookmakerCard({ site, rank }: BookmakerCardProps) {
  const [termsExpanded, setTermsExpanded] = useState(false)
  const tier = TIER_CONFIG[rank] ?? DEFAULT_TIER
  const isTopPick = rank === 1
  const hasTier = rank <= 3
  const termsText = site.terms ?? ""

  return (
    <article
      className={`relative overflow-hidden card-lift ${isTopPick ? "card-featured" : ""}`}
      style={{
        background: isTopPick
          ? "hsl(214 48% 13%)"
          : rank % 2 === 0
          ? "hsl(214 44% 11%)"
          : "hsl(214 42% 10%)",
        border: `1px solid ${isTopPick ? "hsl(172 80% 36% / 0.32)" : "hsl(214 32% 19%)"}`,
        borderRadius: "12px",
        boxShadow: isTopPick
          ? `0 0 0 1px hsl(172 80% 36% / 0.18), 0 4px 24px ${tier.glowColor}`
          : "none",
      }}
      aria-label={`${site.name}${hasTier ? ` — ${tier.label}` : ""}`}
    >
      {/* Left tier accent stripe */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl"
        style={{ background: tier.accentGradient }}
        aria-hidden
      />

      {/* ── Desktop (lg+) ── */}
      <div className="hidden lg:flex items-stretch min-h-[88px] pl-[3px]">

        {/* Rank column */}
        <RankColumn rank={rank} tier={tier} />

        {/* Logo */}
        <div
          className="flex flex-col items-center justify-center border-r px-5 py-4 gap-2"
          style={{
            width: 180,
            background: "hsl(214 50% 7%)",
            borderColor: "hsl(214 32% 16%)",
          }}
        >
          <img
            src={site.logo || "/placeholder.svg"}
            alt={`${site.name} logo`}
            className="max-h-[44px] max-w-[130px] w-auto object-contain"
          />
          {/* Badge moved here, under logo */}
          {hasTier && <TierBadge tier={tier} />}
        </div>

        {/* Offer */}
        <div
          className="flex-1 flex flex-col items-start justify-center px-6 py-4 border-r gap-1"
          style={{ borderColor: "hsl(214 32% 16%)" }}
        >
          <p
            className="text-[9px] font-bold uppercase tracking-[0.20em]"
            style={{ color: "hsl(200 14% 44%)" }}
          >
            Welcome Offer
          </p>
          <p
            className="font-display font-black leading-tight uppercase"
            style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.15rem)", color: "hsl(0 0% 97%)" }}
          >
            {site.bonus}
          </p>
          <p
            className="text-sm font-semibold leading-tight"
            style={{ color: "hsl(172 80% 52%)" }}
          >
            {site.welcomeOffer}
          </p>
        </div>

        {/* Score */}
        <div
          className="flex flex-col items-center justify-center gap-1.5 px-5 py-4 border-r"
          style={{ borderColor: "hsl(214 32% 16%)", minWidth: 110 }}
        >
          <ScoreCircle score={site.score} />
          <StarRating score={site.score} size={11} />
          <span className="text-[9px]" style={{ color: "hsl(200 14% 44%)" }}>
            {site.reviews.toLocaleString("en-GB")} reviews
          </span>
        </div>

        {/* CTA */}
        <div
          className="flex flex-col items-center justify-center gap-2 px-5 py-4"
          style={{ minWidth: 148 }}
        >
          <Link
            href={site.link}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className={`w-full flex items-center justify-center gap-1.5 font-bold text-[13px] px-4 py-2.5 transition-all ${
              isTopPick ? "btn-gold" : "btn-primary"
            }`}
            style={{ borderRadius: "999px" }}
            aria-label={`Claim ${site.name} welcome offer — opens in new tab`}
          >
            Claim Offer
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
          <p className="text-[9px] text-center" style={{ color: "hsl(200 14% 44%)" }}>
            New customers only
          </p>
        </div>
      </div>

      {/* ── Tablet ── */}
      <div className="hidden md:flex lg:hidden items-stretch min-h-[80px] pl-[3px]">
        <RankColumn rank={rank} tier={tier} />
        <div
          className="flex flex-col items-center justify-center border-r px-4 py-3 gap-1.5"
          style={{ width: 150, background: "hsl(214 50% 7%)", borderColor: "hsl(214 32% 16%)" }}
        >
          <img
            src={site.logo || "/placeholder.svg"}
            alt={`${site.name} logo`}
            className="max-h-[40px] max-w-[110px] w-auto object-contain"
          />
          {hasTier && <TierBadge tier={tier} />}
        </div>
        <div
          className="flex-1 flex flex-col justify-center px-4 py-3 border-r gap-0.5"
          style={{ borderColor: "hsl(214 32% 16%)" }}
        >
          <p
            className="font-display text-sm font-black leading-tight uppercase"
            style={{ color: "hsl(0 0% 97%)" }}
          >
            {site.bonus}
          </p>
          <p className="text-xs font-semibold" style={{ color: "hsl(172 80% 50%)" }}>
            {site.welcomeOffer}
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-center gap-1.5 px-4 py-3"
          style={{ minWidth: 120 }}
        >
          <ScoreCircle score={site.score} />
          <StarRating score={site.score} size={10} />
          <Link
            href={site.link}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className={`w-full flex items-center justify-center gap-1 font-bold text-xs py-2 transition-all ${
              isTopPick ? "btn-gold" : "btn-primary"
            }`}
            style={{ borderRadius: "999px" }}
            aria-label={`Claim ${site.name} offer`}
          >
            Claim
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden pl-[3px]">
        {/* Top row: logo + offer */}
        <div className="flex items-stretch min-h-[68px]">
          <RankColumn rank={rank} tier={tier} />
          <div
            className="flex items-center justify-center border-r px-3 py-3 shrink-0"
            style={{ width: 100, background: "hsl(214 50% 7%)", borderColor: "hsl(214 32% 16%)" }}
          >
            <img
              src={site.logo || "/placeholder.svg"}
              alt={`${site.name} logo`}
              className="max-h-[38px] max-w-[80px] w-auto object-contain"
            />
          </div>
          <div className="flex-1 min-w-0 flex flex-col justify-center px-3 py-3 gap-0.5">
            {/* Inline badge on mobile */}
            {hasTier && (
              <div className="mb-1">
                <TierBadge tier={tier} />
              </div>
            )}
            <p
              className="font-display font-black leading-tight uppercase text-sm"
              style={{ color: "hsl(0 0% 97%)" }}
            >
              {site.bonus}
            </p>
            <p className="text-xs font-semibold leading-tight" style={{ color: "hsl(172 80% 50%)" }}>
              {site.welcomeOffer}
            </p>
          </div>
        </div>

        {/* Bottom row: score + CTA */}
        <div
          className="flex items-center justify-between gap-3 border-t px-3 py-2.5"
          style={{ borderColor: "hsl(214 32% 16%)" }}
        >
          <div className="flex items-center gap-2.5">
            <ScoreCircle score={site.score} />
            <div className="flex flex-col gap-0.5">
              <StarRating score={site.score} size={11} />
              <span className="text-[9px]" style={{ color: "hsl(200 14% 46%)" }}>
                {site.reviews.toLocaleString("en-GB")} reviews
              </span>
            </div>
          </div>
          <Link
            href={site.link}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className={`shrink-0 flex items-center gap-1.5 font-bold text-sm px-4 py-2.5 transition-all ${
              isTopPick ? "btn-gold" : "btn-primary"
            }`}
            style={{ borderRadius: "999px" }}
            aria-label={`Claim ${site.name} offer`}
          >
            Claim Offer
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Terms row */}
      {termsText && (
        <div
          className="border-t px-4 py-1.5 pl-[calc(3px+1rem)]"
          style={{
            borderColor: "hsl(214 32% 15%)",
            background: "hsl(214 50% 6%)",
          }}
        >
          <div className="flex items-start justify-between gap-2">
            <p
              className={`text-[10px] leading-snug flex-1 ${!termsExpanded ? "line-clamp-1" : ""}`}
              style={{ color: "hsl(200 14% 42%)" }}
            >
              <span
                className="font-semibold uppercase tracking-wider mr-1 text-[9px]"
                style={{ color: "hsl(200 14% 52%)" }}
              >
                T&Cs:
              </span>
              {termsText}
            </p>
            {termsText.length > 80 && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setTermsExpanded(!termsExpanded)
                }}
                className="shrink-0 transition-colors"
                style={{ color: "hsl(200 14% 48%)" }}
                aria-label={termsExpanded ? "Collapse terms" : "Expand terms"}
                aria-expanded={termsExpanded}
              >
                {termsExpanded ? (
                  <ChevronUp className="w-3.5 h-3.5" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </button>
            )}
          </div>
        </div>
      )}
    </article>
  )
}
