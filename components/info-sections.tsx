"use client"

import Image from "next/image"
import { useState } from "react"
import {
  FlaskConical,
  SlidersHorizontal,
  Compass,
  Ticket,
  ShieldCheck,
  Brain,
  ChevronDown,
  Star,
  Zap,
  Trophy,
  Lock,
  HelpCircle,
  BookOpen,
  Scale,
  ShieldAlert,
} from "lucide-react"

/* ─────────────────────────────────────────────
   EDITORIAL DATA — fully unique copy
───────────────────────────────────────────── */

const editorialItems = [
  {
    icon: FlaskConical,
    tag: "Methodology",
    num: "01",
    title: "Our Testing Process: Real Money, Real Results",
    body: "Every bookmaker on this list has been tested by our team using live funded accounts — not demo environments. We deposit real money, place genuine bets across Premier League fixtures, Cheltenham racing and Six Nations rugby, then withdraw funds and time every step. No operator earns a place here through sponsorship or paid placement.",
    accent: "teal" as const,
    highlight: "Funded accounts only — zero demo testing",
  },
  {
    icon: SlidersHorizontal,
    tag: "Scoring System",
    num: "02",
    title: "Five Pillars That Determine the Elite Score",
    body: "Our Elite Score combines: odds value vs. the market average across 12 major sports; live-betting depth including in-play markets per match; cash-out reliability during high-traffic events; mobile app performance across iOS and Android on 4G and Wi-Fi; and withdrawal completion time across bank transfer, card and e-wallet methods.",
    accent: "green" as const,
    highlight: "12 sports tested — all major UK events",
  },
  {
    icon: Compass,
    tag: "Selection Guide",
    num: "03",
    title: "Which Bookmaker Actually Suits Your Style",
    body: "A punter who studies form and bets on horse racing needs something completely different from a football accumulator builder or a live in-play trader. Our reviews include a dedicated 'Best For' section for each operator — so instead of picking by brand name or welcome offer, you pick by what you actually do.",
    accent: "steel" as const,
    highlight: "Matched to your betting style — not ad spend",
  },
  {
    icon: Ticket,
    tag: "Bonus Reality Check",
    num: "04",
    title: "Welcome Offers: What the Headline Hides",
    body: "A £30 free-bet offer sounds attractive. But factor in the minimum odds, the free-bet token expiry window, maximum withdrawal limits from bonus winnings, and whether the token stake is returned — and the real value is often far lower. We calculate effective offer value using standardised testing conditions so comparisons are meaningful.",
    accent: "teal" as const,
    highlight: "Effective bonus value — not advertised headline",
  },
  {
    icon: ShieldCheck,
    tag: "Regulation",
    num: "05",
    title: "UKGC Licensing: What the Badge Actually Guarantees",
    body: "Every site on this list holds a current UK Gambling Commission licence. That means your deposited funds are held in segregated accounts separate from the operator's operational capital, all fixed-odds products are independently audited, and you have access to a formal Alternative Dispute Resolution service if a complaint cannot be resolved directly.",
    accent: "green" as const,
    highlight: "100% UKGC licensed — verified before listing",
  },
  {
    icon: Brain,
    tag: "Responsible Gambling",
    num: "06",
    title: "Control Tools You Should Set Before Your First Bet",
    body: "Every UKGC operator must offer deposit limits, loss limits, session reminders and self-exclusion — free, at any time, no justification needed. We strongly recommend setting a weekly deposit limit before placing a single bet. GAMSTOP enables simultaneous self-exclusion across all licensed UK operators via a single registration at gamstop.co.uk.",
    accent: "steel" as const,
    highlight: "Set your deposit limit before you start",
  },
]

/* ─────────────────────────────────────────────
   FAQ DATA — unique questions, rewritten answers
───────────────────────────────────────────── */

const faqCategories = [
  { id: "all", label: "All" },
  { id: "trust", label: "Trust & Safety" },
  { id: "bonuses", label: "Bonuses" },
  { id: "betting", label: "Betting" },
  { id: "account", label: "Account" },
]

const faqItems = [
  {
    cat: "trust",
    q: "How do I verify a bookmaker's UKGC licence is active?",
    a: "Visit gamblingcommission.gov.uk and use the Public Register search. Enter the operator's trading name or licence number. A live licence will show status 'Active' alongside its conditions. We check every operator on this list at least monthly — but always verify independently before depositing.",
  },
  {
    cat: "trust",
    q: "What happens to my money if a bookmaker shuts down?",
    a: "UKGC-licensed operators are required to hold customer funds in segregated accounts, separate from company operating funds. The level of protection (Basic, Medium, or High) is disclosed in each operator's licence conditions and shown in their responsible gambling section. Higher protection means funds are held in dedicated trust accounts.",
  },
  {
    cat: "bonuses",
    q: "Why does the welcome offer value on your list differ from the bookmaker's homepage?",
    a: "We calculate effective value after applying wagering requirements, free-bet token expiry, minimum odds, and stake-return conditions. A headline '£50 in free bets' with a 3× wagering requirement at minimum 1/1 odds and a 7-day expiry window has a practical value of roughly £16–£22. Our figures reflect what you can realistically withdraw.",
  },
  {
    cat: "bonuses",
    q: "Can I claim welcome offers at more than one bookmaker?",
    a: "Yes — welcome offers are generally available to first-time account holders at each individual operator. There is no restriction on opening accounts at multiple UKGC-licensed sites, and doing so is a common approach among experienced bettors. Each account has its own identity verification process.",
  },
  {
    cat: "betting",
    q: "Which sport offers the best odds value on UK betting sites?",
    a: "In our testing, football (Premier League and Championship) consistently delivers the tightest margins across the listed operators. Horse racing prices vary significantly and are often best on sites offering Best Odds Guaranteed for UK and Irish racing. For US sports, margins tend to be wider — always compare across at least two sites before placing.",
  },
  {
    cat: "betting",
    q: "Is in-play betting available on all bookmakers on the list?",
    a: "Yes — every operator on the Elite List offers live in-play markets. The depth varies: the top three ranked operators provide in-play coverage for 40+ sports with sub-10-second price refresh rates. We note in each individual review whether the bookmaker uses streaming or data-only live visualisations.",
  },
  {
    cat: "account",
    q: "How long does identity verification take at UK bookmakers?",
    a: "Most major UKGC operators complete automated ID checks within 2–5 minutes using document scanning and facial recognition. Where manual review is triggered, the standard timescale is 24 hours. Operators are required to complete verification before any withdrawal is processed, regardless of when the account was opened.",
  },
  {
    cat: "account",
    q: "How do I self-exclude from all UK bookmakers simultaneously?",
    a: "Register at gamstop.co.uk. GAMSTOP triggers self-exclusion across every UKGC-licensed operator from a single application — no need to contact each site individually. Exclusion periods are six months, one year or five years. It takes effect within 24 hours and covers both online and telephone betting accounts.",
  },
]

/* ─────────────────────────────────────────────
   ACCENT MAP
───────────────────────────────────────────── */

const accentMap = {
  teal: {
    tag:        "hsl(172 80% 52%)",
    tagBg:      "hsl(172 80% 36% / 0.10)",
    tagBorder:  "hsl(172 80% 36% / 0.28)",
    iconColor:  "hsl(172 80% 56%)",
    bar:        "hsl(172 80% 38%)",
    numColor:   "hsl(172 80% 36% / 0.18)",
    glow:       "hsl(172 80% 36% / 0.12)",
    cardBorder: "hsl(172 80% 36% / 0.20)",
    highlight:  "hsl(172 80% 36% / 0.08)",
    highlightBorder: "hsl(172 80% 36% / 0.30)",
  },
  green: {
    tag:        "hsl(152 78% 52%)",
    tagBg:      "hsl(152 78% 42% / 0.10)",
    tagBorder:  "hsl(152 78% 42% / 0.26)",
    iconColor:  "hsl(152 78% 56%)",
    bar:        "hsl(152 78% 38%)",
    numColor:   "hsl(152 78% 42% / 0.18)",
    glow:       "hsl(152 78% 42% / 0.11)",
    cardBorder: "hsl(152 78% 42% / 0.18)",
    highlight:  "hsl(152 78% 42% / 0.08)",
    highlightBorder: "hsl(152 78% 42% / 0.28)",
  },
  steel: {
    tag:        "hsl(207 72% 62%)",
    tagBg:      "hsl(207 72% 48% / 0.10)",
    tagBorder:  "hsl(207 72% 48% / 0.26)",
    iconColor:  "hsl(207 72% 64%)",
    bar:        "hsl(207 72% 44%)",
    numColor:   "hsl(207 72% 48% / 0.18)",
    glow:       "hsl(207 72% 48% / 0.11)",
    cardBorder: "hsl(207 72% 48% / 0.18)",
    highlight:  "hsl(207 72% 48% / 0.08)",
    highlightBorder: "hsl(207 72% 48% / 0.28)",
  },
} as const

type AccentKey = keyof typeof accentMap

/* ─────────────────────────────────────────────
   SPORT SECTION BANNER
───────────────────────────────────────────── */

function SportBanner({
  src,
  eyebrow,
  title,
  titleAccent,
  sub,
  icon: Icon,
  stats,
}: {
  src: string
  eyebrow: string
  title: string
  titleAccent: string
  sub: string
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  stats: { label: string; value: string; icon: React.ComponentType<{ className?: string; strokeWidth?: number }> }[]
}) {
  return (
    <div className="relative overflow-hidden rounded-lg mb-8" style={{ minHeight: "110px" }}>
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width:1280px) 100vw, 1024px"
        className="object-cover object-center scale-105"
        aria-hidden
        priority
      />
      {/* Dark overlay with diagonal tint */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(108deg, hsl(214 55% 4% / 0.98) 0%, hsl(214 50% 6% / 0.93) 48%, hsl(207 55% 9% / 0.72) 100%)",
        }}
        aria-hidden
      />
      {/* Diagonal sport lines */}
      <div className="absolute inset-0 sport-lines pointer-events-none" aria-hidden />
      {/* Bottom gradient rule */}
      <div
        className="absolute bottom-0 inset-x-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, hsl(172 80% 38%), hsl(152 78% 42%) 50%, transparent)" }}
        aria-hidden
      />
      {/* Left teal edge bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{ background: "linear-gradient(180deg, hsl(172 80% 48%), hsl(152 78% 38%))" }}
        aria-hidden
      />
      {/* Right glow */}
      <div
        className="absolute -top-16 right-0 w-96 h-96 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, hsl(172 80% 36% / 0.12) 0%, transparent 65%)" }}
        aria-hidden
      />

      {/* Main content row */}
      <div className="relative z-10 pl-7 pr-5 sm:pl-10 sm:pr-8 py-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        {/* Left: icon + text */}
        <div className="flex items-start gap-4 flex-1">
          <div
            className="hidden sm:flex items-center justify-center w-12 h-12 rounded-md shrink-0"
            style={{
              background: "hsl(172 80% 36% / 0.14)",
              border: "1.5px solid hsl(172 80% 36% / 0.36)",
            }}
          >
            <Icon className="w-6 h-6" style={{ color: "hsl(172 80% 54%)" }} strokeWidth={1.7} />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full elite-pulse" style={{ background: "hsl(172 80% 50%)" }} aria-hidden />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: "hsl(172 80% 54%)" }}>
                {eyebrow}
              </span>
            </div>
            <h2
              className="font-display font-black tracking-tight uppercase text-balance leading-tight"
              style={{ fontSize: "clamp(1.05rem, 2.6vw, 1.55rem)", color: "hsl(0 0% 98%)" }}
            >
              {title}{" "}
              <span style={{ color: "hsl(172 80% 52%)" }}>{titleAccent}</span>
            </h2>
            <p className="text-[11px] mt-1 max-w-md" style={{ color: "hsl(200 16% 48%)" }}>
              {sub}
            </p>
          </div>
        </div>

        {/* Right: micro stats */}
        <div className="hidden sm:flex items-center gap-0 rounded-md overflow-hidden shrink-0" style={{ border: "1px solid hsl(214 32% 19%)" }}>
          {stats.map(({ label, value, icon: SIcon }, i) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center px-5 py-2.5"
              style={{
                background: i % 2 === 0 ? "hsl(214 48% 9%)" : "hsl(214 44% 11%)",
                borderRight: i < stats.length - 1 ? "1px solid hsl(214 32% 19%)" : "none",
              }}
            >
              <SIcon className="w-3.5 h-3.5 mb-1" style={{ color: "hsl(172 80% 46%)" }} strokeWidth={1.8} />
              <p className="font-display font-black text-[13px] leading-none" style={{ color: "hsl(172 80% 52%)" }}>
                {value}
              </p>
              <p className="text-[9px] uppercase tracking-wide mt-0.5" style={{ color: "hsl(200 14% 42%)" }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   EDITORIAL CARD
───────────────────────────────────────────── */

function EditorialCard({ item, index }: { item: (typeof editorialItems)[0]; index: number }) {
  const a = accentMap[item.accent]
  const Icon = item.icon
  const isOdd = index % 2 !== 0

  return (
    <article
      className="card-lift group relative overflow-hidden"
      style={{
        background: "hsl(214 44% 10%)",
        border: `1px solid ${a.cardBorder}`,
        borderRadius: "10px",
        borderTop: `2px solid ${a.bar}`,
      }}
      aria-label={item.title}
    >
      {/* Corner glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          [isOdd ? "right" : "left"]: 0,
          width: "160px",
          height: "100px",
          background: `radial-gradient(ellipse at ${isOdd ? "top right" : "top left"}, ${a.glow} 0%, transparent 70%)`,
        }}
        aria-hidden
      />

      <div className="relative z-10 p-5">
        {/* Top row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div
              className="w-10 h-10 flex items-center justify-center rounded-md shrink-0"
              style={{
                background: a.tagBg,
                border: `1.5px solid ${a.tagBorder}`,
              }}
            >
              <Icon className="w-5 h-5" style={{ color: a.iconColor }} strokeWidth={1.7} />
            </div>
            <div>
              {/* Tag */}
              <span
                className="inline-block text-[9px] font-bold uppercase tracking-[0.22em] mb-0.5"
                style={{
                  color: a.tag,
                  background: a.tagBg,
                  border: `1px solid ${a.tagBorder}`,
                  padding: "2px 7px",
                  borderRadius: "3px",
                }}
              >
                {item.tag}
              </span>
              <h3
                className="font-display font-black tracking-tight leading-tight uppercase"
                style={{ fontSize: "clamp(0.80rem, 1.4vw, 0.93rem)", color: "hsl(200 18% 92%)" }}
              >
                {item.title}
              </h3>
            </div>
          </div>
          {/* Large number */}
          <span
            className="font-display font-black leading-none select-none shrink-0 hidden sm:block"
            style={{ fontSize: "2.8rem", color: a.numColor, letterSpacing: "-0.05em", lineHeight: 1 }}
            aria-hidden
          >
            {item.num}
          </span>
        </div>

        {/* Body text */}
        <p
          className="font-sans text-[13px] sm:text-[13.5px] leading-relaxed mb-4"
          style={{ color: "hsl(200 14% 56%)" }}
        >
          {item.body}
        </p>

        {/* Highlight callout */}
        <div
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-md"
          style={{
            background: a.highlight,
            border: `1px solid ${a.highlightBorder}`,
          }}
        >
          <Zap className="w-3.5 h-3.5 shrink-0" style={{ color: a.iconColor }} strokeWidth={2} />
          <span
            className="font-display font-bold text-[11px] uppercase tracking-[0.16em]"
            style={{ color: a.tag }}
          >
            {item.highlight}
          </span>
        </div>
      </div>
    </article>
  )
}

/* ─────────────────────────────────────────────
   EDITORIAL PANEL (exported)
───────────────────────────────────────────── */

export function EditorialPanel() {
  return (
    <section className="mt-16 sm:mt-24" aria-label="How we review and rank UK bookmakers">
      <SportBanner
        src="/images/editorial-bg.jpg"
        eyebrow="Editorial Guide"
        title="How We Review &amp; Rank"
        titleAccent="UK Bookmakers"
        sub="Real-money testing, independent scoring — no paid placements, no exceptions."
        icon={BookOpen}
        stats={[
          { label: "Test Accounts", value: "Funded", icon: Star },
          { label: "Sports Covered", value: "12+",  icon: Trophy },
          { label: "UKGC Only",     value: "100%",  icon: Lock },
        ]}
      />

      {/* 2-column grid on desktop, 1 column mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {editorialItems.map((item, i) => (
          <EditorialCard key={item.num} item={item} index={i} />
        ))}
      </div>

      {/* Age restriction + disclaimer bar */}
      <div
        className="mt-6 flex flex-col sm:flex-row items-center gap-4 px-5 py-4 rounded-lg"
        style={{
          background: "hsl(214 50% 7%)",
          border: "1px solid hsl(172 80% 36% / 0.14)",
          borderLeft: "3px solid hsl(172 80% 38%)",
        }}
      >
        <div
          className="flex items-center justify-center w-9 h-9 rounded-md shrink-0 font-display font-black text-[13px]"
          style={{
            background: "hsl(172 80% 36% / 0.14)",
            border: "1.5px solid hsl(172 80% 36% / 0.32)",
            color: "hsl(172 80% 52%)",
          }}
        >
          18+
        </div>
        <p
          className="font-sans text-[10.5px] sm:text-[11px] leading-relaxed text-center sm:text-left"
          style={{ color: "hsl(200 14% 42%)" }}
        >
          Content &copy; elitelistbettingsitesuk.com. All offers and rankings are intended for adults aged 18+ in Great
          Britain. Promotions are subject to change — verify full current terms on each operator&apos;s own website before
          registering. Commercial affiliate links may be present; they do not influence placement or Elite Score.
        </p>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   FAQ ITEM
───────────────────────────────────────────── */

const faqAccents = [
  "hsl(172 80% 38%)",
  "hsl(152 78% 38%)",
  "hsl(207 72% 44%)",
  "hsl(172 80% 38%)",
  "hsl(152 78% 38%)",
  "hsl(207 72% 44%)",
  "hsl(172 80% 38%)",
  "hsl(152 78% 38%)",
]

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  const accent = faqAccents[index % faqAccents.length]

  return (
    <div
      style={{
        borderBottom: "1px solid hsl(214 32% 16%)",
        transition: "background 0.18s ease",
        background: open ? "hsl(214 44% 11%)" : "transparent",
      }}
    >
      <button
        type="button"
        className="w-full flex items-center gap-4 py-4 px-5 text-left group"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {/* Index number */}
        <span
          className="font-display font-black tabular-nums text-[11px] shrink-0 w-8 text-right hidden sm:block"
          style={{ color: accent, letterSpacing: "-0.02em", opacity: 0.9 }}
          aria-hidden
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        {/* Question */}
        <span
          className="flex-1 font-display font-bold text-[12.5px] sm:text-[13px] leading-snug tracking-tight uppercase"
          style={{ color: open ? "hsl(200 20% 95%)" : "hsl(200 18% 82%)", transition: "color 0.18s ease" }}
        >
          {q}
        </span>
        {/* Toggle icon */}
        <span
          className="shrink-0 w-6 h-6 flex items-center justify-center rounded-sm transition-all duration-200"
          style={{
            background: open ? accent : "hsl(214 44% 15%)",
            border: `1.5px solid ${open ? accent : "hsl(214 32% 24%)"}`,
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
          aria-hidden
        >
          <ChevronDown
            className="w-3.5 h-3.5"
            style={{ color: open ? "hsl(214 50% 6%)" : "hsl(200 16% 52%)" }}
            strokeWidth={2.5}
          />
        </span>
      </button>

      {open && (
        <div
          className="px-5 pb-5 pt-0 sm:pl-[4.5rem]"
          style={{ borderLeft: `3px solid ${accent}` }}
        >
          <p
            className="font-sans text-[13px] sm:text-[13.5px] leading-relaxed"
            style={{ color: "hsl(200 14% 58%)" }}
          >
            {a}
          </p>
        </div>
      )}
    </div>
  )
}

/* ─────────────────────────────────────────────
   FAQ SECTION (exported)
───────────────────────────────────────────── */

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filtered = activeCategory === "all"
    ? faqItems
    : faqItems.filter((f) => f.cat === activeCategory)

  return (
    <section className="mt-16 sm:mt-24" aria-label="Frequently asked questions">
      <SportBanner
        src="/images/rankings-bg.jpg"
        eyebrow="FAQ"
        title="Frequently Asked"
        titleAccent="Questions"
        sub="Licensing, bonuses, responsible gambling and account management — answered honestly."
        icon={HelpCircle}
        stats={[
          { label: "Questions",    value: "8",     icon: HelpCircle },
          { label: "Categories",   value: "4",     icon: Scale },
          { label: "Responsible",  value: "First", icon: ShieldAlert },
        ]}
      />

      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {faqCategories.map((cat) => {
          const active = cat.id === activeCategory
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className="text-[11px] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full transition-all duration-150"
              style={{
                background: active ? "hsl(172 80% 36%)" : "hsl(214 44% 13%)",
                color: active ? "hsl(214 50% 6%)" : "hsl(200 16% 58%)",
                border: active ? "1.5px solid hsl(172 80% 38%)" : "1.5px solid hsl(214 32% 20%)",
                boxShadow: active ? "0 2px 12px hsl(172 80% 36% / 0.28)" : "none",
              }}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      {/* Accordion container */}
      <div
        className="rounded-lg overflow-hidden"
        style={{
          background: "hsl(214 44% 9%)",
          border: "1px solid hsl(214 32% 18%)",
          borderTop: "2px solid hsl(172 80% 36%)",
        }}
      >
        {filtered.length === 0 ? (
          <p className="py-10 text-center text-[13px]" style={{ color: "hsl(200 14% 44%)" }}>
            No questions in this category.
          </p>
        ) : (
          filtered.map((item, i) => (
            <FaqItem key={item.q} q={item.q} a={item.a} index={i} />
          ))
        )}
      </div>

      {/* GAMSTOP CTA strip */}
      <div
        className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 px-5 py-4 rounded-lg"
        style={{
          background: "hsl(214 50% 7%)",
          border: "1px solid hsl(152 78% 42% / 0.16)",
          borderLeft: "3px solid hsl(152 78% 38%)",
        }}
      >
        <div className="flex items-center gap-3">
          <ShieldAlert className="w-5 h-5 shrink-0" style={{ color: "hsl(152 78% 50%)" }} strokeWidth={1.8} />
          <p
            className="font-sans text-[11.5px] sm:text-[12px] leading-relaxed"
            style={{ color: "hsl(200 14% 52%)" }}
          >
            <strong style={{ color: "hsl(152 78% 54%)", fontWeight: 700 }}>Need to take a break?</strong>{" "}
            GAMSTOP provides free self-exclusion across all UKGC-licensed operators.
            Register at{" "}
            <a
              href="https://www.gamstop.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
              style={{ color: "hsl(172 80% 50%)" }}
            >
              gamstop.co.uk
            </a>{" "}
            or call the National Gambling Helpline on{" "}
            <strong style={{ color: "hsl(0 0% 88%)" }}>0808 8020 133</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}
