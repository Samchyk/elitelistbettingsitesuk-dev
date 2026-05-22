"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Shield, X, CheckCircle2, SlidersHorizontal } from "lucide-react"

export function ConsentNotice() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("eliteCookieConsent")
    if (!stored) {
      const delay = setTimeout(() => setVisible(true), 1400)
      return () => clearTimeout(delay)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("eliteCookieConsent", "accepted")
    setVisible(false)
  }

  const essentialOnly = () => {
    localStorage.setItem("eliteCookieConsent", "essential")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent preferences"
      aria-live="polite"
    >
      {/* ── Gradient top rule ── */}
      <div
        className="h-[3px] w-full"
        aria-hidden
        style={{
          background:
            "linear-gradient(90deg, hsl(172 80% 36%) 0%, hsl(172 85% 50%) 35%, hsl(152 78% 42%) 65%, hsl(207 72% 48%) 100%)",
        }}
      />

      {/* ── Banner body ── */}
      <div
        style={{
          background: "hsl(216 52% 6%)",
          borderTop: "1px solid hsl(172 80% 36% / 0.20)",
          boxShadow: "0 -8px 40px hsl(214 52% 4% / 0.70)",
        }}
      >
        <div className="container mx-auto max-w-6xl px-4 py-4 sm:py-5">

          {/* ── Main row ── */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">

            {/* ── Left: icon + copy ── */}
            <div className="flex items-start gap-4 flex-1 min-w-0">
              {/* Shield icon block */}
              <div
                className="shrink-0 w-10 h-10 flex items-center justify-center rounded-md"
                style={{
                  background: "hsl(172 80% 36% / 0.16)",
                  border: "1.5px solid hsl(172 80% 36% / 0.42)",
                  boxShadow: "0 0 18px hsl(172 80% 36% / 0.20)",
                }}
              >
                <Shield
                  className="w-5 h-5"
                  style={{ color: "hsl(172 80% 52%)" }}
                  strokeWidth={1.8}
                />
              </div>

              <div className="flex-1 min-w-0">
                {/* Heading row */}
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="font-display font-black text-[13px] uppercase tracking-wide"
                    style={{ color: "hsl(200 20% 90%)" }}
                  >
                    Your Privacy
                  </span>
                  <span
                    className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm"
                    style={{
                      background: "hsl(172 80% 36% / 0.14)",
                      border: "1px solid hsl(172 80% 36% / 0.32)",
                      color: "hsl(172 80% 54%)",
                    }}
                  >
                    elitelistbettingsitesuk.com
                  </span>
                </div>

                <p
                  className="font-sans text-[12px] leading-relaxed"
                  style={{ color: "hsl(200 14% 54%)" }}
                >
                  We use essential cookies to keep the site working and optional analytics cookies
                  to understand how visitors use our content.{" "}
                  <Link
                    href="/cookie-policy"
                    className="font-medium underline underline-offset-2 transition-opacity hover:opacity-75"
                    style={{ color: "hsl(172 80% 46%)" }}
                  >
                    Read Cookie Policy
                  </Link>
                </p>

                {/* Expanded detail */}
                {expanded && (
                  <div
                    className="mt-3 grid sm:grid-cols-2 gap-2"
                  >
                    {[
                      {
                        label: "Essential",
                        badge: "Always On",
                        desc: "Required for basic site function — consent record, session continuity. Cannot be disabled.",
                        color: "hsl(172 80% 36%)",
                      },
                      {
                        label: "Analytics",
                        badge: "Optional",
                        desc: "Anonymised page-view and navigation data to improve our rankings content. No personal profiles.",
                        color: "hsl(207 72% 48%)",
                      },
                    ].map((cat) => (
                      <div
                        key={cat.label}
                        className="rounded-md px-3 py-2.5"
                        style={{
                          background: "hsl(214 44% 10%)",
                          border: `1px solid ${cat.color}28`,
                          borderLeft: `2px solid ${cat.color}`,
                        }}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="font-sans font-bold text-[11px]"
                            style={{ color: "hsl(200 18% 80%)" }}
                          >
                            {cat.label}
                          </span>
                          <span
                            className="text-[9px] font-bold uppercase tracking-wide px-1.5 py-px rounded-sm"
                            style={{
                              background: `${cat.color}16`,
                              color: cat.color,
                              border: `1px solid ${cat.color}28`,
                            }}
                          >
                            {cat.badge}
                          </span>
                        </div>
                        <p className="text-[11px] leading-snug" style={{ color: "hsl(200 12% 48%)" }}>
                          {cat.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* ── Right: action buttons ── */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0">

              {/* Manage toggle */}
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md font-sans text-[11px] font-semibold transition-all"
                style={{
                  background: "hsl(214 44% 13%)",
                  border: "1px solid hsl(214 32% 22%)",
                  color: "hsl(200 14% 54%)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "hsl(172 80% 36% / 0.36)"
                  e.currentTarget.style.color = "hsl(200 18% 74%)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "hsl(214 32% 22%)"
                  e.currentTarget.style.color = "hsl(200 14% 54%)"
                }}
                aria-expanded={expanded}
                aria-label="Manage cookie categories"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" strokeWidth={2} />
                Manage
              </button>

              {/* Essential only */}
              <button
                type="button"
                onClick={essentialOnly}
                className="inline-flex items-center justify-center px-4 py-2 rounded-md font-sans text-[12px] font-semibold transition-all"
                style={{
                  background: "hsl(214 44% 13%)",
                  border: "1px solid hsl(172 80% 36% / 0.32)",
                  color: "hsl(200 16% 64%)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "hsl(214 44% 17%)"
                  e.currentTarget.style.color = "hsl(200 18% 80%)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "hsl(214 44% 13%)"
                  e.currentTarget.style.color = "hsl(200 16% 64%)"
                }}
              >
                Essential Only
              </button>

              {/* Accept all — teal CTA */}
              <button
                type="button"
                onClick={acceptAll}
                className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-md font-sans text-[12px] font-black transition-all"
                style={{
                  background: "hsl(172 80% 36%)",
                  color: "hsl(214 52% 6%)",
                  boxShadow: "0 2px 18px hsl(172 80% 36% / 0.38)",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "hsl(172 85% 44%)"
                  e.currentTarget.style.boxShadow = "0 4px 24px hsl(172 80% 36% / 0.55)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "hsl(172 80% 36%)"
                  e.currentTarget.style.boxShadow = "0 2px 18px hsl(172 80% 36% / 0.38)"
                }}
              >
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" strokeWidth={2.4} />
                Accept All
              </button>

              {/* Dismiss X */}
              <button
                type="button"
                onClick={essentialOnly}
                aria-label="Dismiss cookie notice — essential cookies only"
                className="p-2 rounded-md transition-all sm:ml-1"
                style={{
                  background: "hsl(214 44% 13%)",
                  border: "1px solid hsl(214 32% 20%)",
                  color: "hsl(200 12% 40%)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "hsl(172 80% 36% / 0.30)"
                  e.currentTarget.style.color = "hsl(200 16% 62%)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "hsl(214 32% 20%)"
                  e.currentTarget.style.color = "hsl(200 12% 40%)"
                }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
