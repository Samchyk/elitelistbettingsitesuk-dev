"use client"

import Link from "next/link"
import { BrandIdentity } from "@/components/site-wordmark"
import { ShieldCheck, Phone, ExternalLink } from "lucide-react"

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/responsible-gaming", label: "Safer Betting" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/privacy-policy", label: "Privacy Policy" },
]

const safetyOrgs = [
  { href: "https://www.begambleaware.org/", src: "/gamble.webp", alt: "BeGambleAware — Free Safer Gambling Advice", bg: "#000000" },
  { href: "https://www.gamstop.co.uk/", src: "/gamstop.png", alt: "GamStop — National Self-Exclusion Scheme", bg: "#ffffff" },
  { href: "https://gordonmoody.org.uk/", src: "/gordon.png", alt: "Gambling Therapy — Online Support", bg: "#000000" },
  { href: "https://www.gamblingcommission.gov.uk/", src: "/commission.png", alt: "UK Gambling Commission — Regulatory Body", bg: "#ffffff" },
  { href: "https://www.gamcare.org.uk/", src: "/gamecare.svg", alt: "GamCare — Support for Gambling Harm", bg: "#ffffff" },
]

const standards = [
  { label: "UKGC Licensed Operators Only", color: "hsl(172 80% 44%)" },
  { label: "Funded Account Testing", color: "hsl(152 78% 44%)" },
  { label: "Independent Editorial Rankings", color: "hsl(207 72% 52%)" },
  { label: "Monthly Review Cycle", color: "hsl(172 80% 44%)" },
]

export function SiteFooter() {
  return (
    <footer role="contentinfo">

      {/* ── National helpline strip ── */}
      <div
        style={{
          background: "hsl(214 50% 7%)",
          borderTop: "3px solid hsl(172 80% 36%)",
        }}
      >
        <div className="container mx-auto max-w-6xl px-4 py-5">
          <a
            href="tel:08088020133"
            className="flex flex-col sm:flex-row items-center justify-center gap-3 group"
            aria-label="Call National Gambling Helpline on 0808 8020 133"
          >
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0"
                style={{
                  background: "hsl(172 80% 36% / 0.16)",
                  border: "1px solid hsl(172 80% 36% / 0.38)",
                }}
              >
                <Phone className="w-4 h-4" style={{ color: "hsl(172 80% 52%)" }} strokeWidth={2} />
              </div>
              <span
                className="font-sans font-bold text-[11px] uppercase tracking-widest"
                style={{ color: "hsl(200 16% 58%)" }}
              >
                National Gambling Helpline — Free &amp; Confidential
              </span>
            </div>
            <span
              className="font-display font-black text-[22px] tracking-tight group-hover:opacity-75 transition-opacity"
              style={{ color: "hsl(172 80% 46%)" }}
            >
              0808 8020 133
            </span>
          </a>
        </div>
      </div>

      {/* ── Main dark footer body ── */}
      <div style={{ background: "hsl(214 54% 5%)" }}>

        {/* Top teal-to-blue gradient bar */}
        <div
          className="h-[2px]"
          aria-hidden
          style={{
            background:
              "linear-gradient(90deg, hsl(172 80% 36%) 0%, hsl(152 78% 42%) 50%, hsl(207 72% 44%) 80%, transparent 100%)",
          }}
        />

        <div className="container mx-auto max-w-6xl px-4 pt-10 pb-8">

          {/* ── Top content grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1.8fr] gap-8 mb-10">

            {/* Brand + description */}
            <div className="flex flex-col gap-4">
              <Link href="/" aria-label="Elite List Betting Sites UK — Return to homepage">
                <BrandIdentity variant="footer" />
              </Link>
              <p
                className="font-sans text-[12px] leading-relaxed"
                style={{ color: "hsl(200 14% 50%)" }}
              >
                elitelistbettingsitesuk.com publishes independent editorial rankings of
                UKGC-licensed bookmakers. We hold no player funds, place no bets, and
                accept no paid ranking placements.
              </p>
              {/* Standards chips */}
              <div className="flex flex-wrap gap-2 mt-1">
                {standards.map((s) => (
                  <span
                    key={s.label}
                    className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-sm"
                    style={{
                      background: `${s.color}10`,
                      border: `1px solid ${s.color}28`,
                      color: s.color,
                    }}
                  >
                    <ShieldCheck className="w-3 h-3 shrink-0" strokeWidth={2} />
                    {s.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="flex flex-col gap-3">
              <p
                className="font-display font-black uppercase tracking-widest text-[10px]"
                style={{ color: "hsl(172 80% 46%)" }}
              >
                Site Links
              </p>
              <div
                className="h-[2px] w-8 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, hsl(172 80% 36%), hsl(152 78% 40%))",
                }}
                aria-hidden
              />
              <nav className="flex flex-col gap-2" aria-label="Footer site navigation">
                {quickLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-sans text-[13px] footer-nav-link w-fit inline-flex items-center gap-1.5 group"
                  >
                    <span
                      className="w-1 h-1 rounded-full shrink-0 transition-colors"
                      style={{ background: "hsl(172 80% 36% / 0.40)" }}
                      aria-hidden
                    />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Editorial standards */}
            <div className="flex flex-col gap-3">
              <p
                className="font-display font-black uppercase tracking-widest text-[10px]"
                style={{ color: "hsl(172 80% 46%)" }}
              >
                Our Standards
              </p>
              <div
                className="h-[2px] w-8 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, hsl(172 80% 36%), hsl(152 78% 40%))",
                }}
                aria-hidden
              />
              <p
                className="font-sans text-[12px] leading-relaxed"
                style={{ color: "hsl(200 14% 50%)" }}
              >
                Every bookmaker is evaluated using genuine funded accounts. Elite Scores reflect
                real-world performance across odds quality, payout speed, live betting depth and
                support responsiveness. A position on the Elite List cannot be purchased.
              </p>
              <div
                className="rounded-sm px-3 py-2.5"
                style={{
                  background: "hsl(214 48% 9%)",
                  border: "1px solid hsl(172 80% 36% / 0.16)",
                  borderLeft: "2px solid hsl(172 80% 36%)",
                }}
              >
                <p
                  className="font-sans text-[11px] leading-relaxed"
                  style={{ color: "hsl(200 10% 38%)" }}
                >
                  Referral revenue is earned through affiliate arrangements with licensed operators
                  — editorial rankings remain entirely independent.
                </p>
              </div>
            </div>

          </div>

          {/* ── Divider ── */}
          <div
            className="h-px mb-8"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(214 34% 16%), transparent)",
            }}
            aria-hidden
          />

          {/* ── Safer gambling support organisations ── */}
          <div className="mb-6">
            <p
              className="font-sans text-[10px] font-bold uppercase tracking-[0.24em] text-center mb-4"
              style={{ color: "hsl(200 14% 38%)" }}
            >
              Safer Betting Support Organisations
            </p>
            <div
              className="flex flex-wrap items-center justify-center gap-3"
              aria-label="Support organisations"
            >
              {safetyOrgs.map((org) => (
                <Link
                  key={org.alt}
                  href={org.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center px-4 py-2 rounded-sm transition-all hover:opacity-70"
                  style={{
                    background: org.bg,
                    border: "1px solid hsl(214 30% 18%)",
                  }}
                  aria-label={org.alt}
                >
                  <img
                    src={org.src}
                    alt={org.alt}
                    className="h-6 w-auto object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* ── Divider ── */}
          <div
            className="h-px mb-6"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(214 34% 14%), transparent)",
            }}
            aria-hidden
          />

          {/* ── Legal disclaimer ── */}
          <div
            className="px-5 py-4 mb-5 rounded-sm"
            style={{
              background: "hsl(214 52% 5%)",
              borderLeft: "3px solid hsl(172 80% 36%)",
              border: "1px solid hsl(172 80% 36% / 0.14)",
              borderLeftWidth: "3px",
            }}
          >
            <p
              className="font-sans text-[10px] sm:text-[11px] leading-relaxed"
              style={{ color: "hsl(200 14% 42%)" }}
            >
              <strong style={{ color: "hsl(200 18% 66%)" }}>18+ only.</strong>{" "}
              Betting involves financial risk — always gamble responsibly and within your personal
              means. Every operator listed on this site holds a valid UK Gambling Commission
              licence. Welcome bonuses are subject to change without notice; operator T&amp;Cs
              apply in full at all times. elitelistbettingsitesuk.com earns revenue through
              affiliate partnerships with licensed operators; this has no bearing on our
              independent editorial rankings.
            </p>
          </div>

          {/* ── Copyright ── */}
          <p
            className="font-sans text-[10px] text-center"
            style={{ color: "hsl(200 10% 30%)" }}
          >
            &copy; {new Date().getFullYear()} elitelistbettingsitesuk.com &middot; 18+ &middot;
            United Kingdom &middot;{" "}
            <a
              href="mailto:info@elitelistbettingsitesuk.com"
              className="transition-opacity hover:opacity-70"
              style={{ color: "hsl(172 80% 36% / 0.60)" }}
            >
              info@elitelistbettingsitesuk.com
            </a>
          </p>

        </div>
      </div>
    </footer>
  )
}
