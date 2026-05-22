"use client"

import { X, Megaphone } from "lucide-react"

interface AdvertiserDisclosureModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserDisclosureModal({ isOpen, onClose }: AdvertiserDisclosureModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ background: "hsl(220 20% 3% / 0.80)", backdropFilter: "blur(8px)" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="adv-disclosure-title"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-lg max-h-[92vh] sm:max-h-[88vh] flex flex-col rounded-t-2xl sm:rounded-2xl overflow-hidden"
        style={{
          background: "hsl(220 18% 9%)",
          border: "1px solid hsl(142 76% 42% / 0.28)",
          boxShadow: "0 32px 80px hsl(220 20% 2% / 0.90), 0 0 40px hsl(142 76% 42% / 0.10)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Green accent line */}
        <div
          className="h-[2px] w-full shrink-0"
          style={{ background: "linear-gradient(90deg, #3ECF6A, hsl(43 96% 52%) 55%, transparent)" }}
        />

        {/* Header */}
        <div
          className="px-5 pt-5 pb-4 relative shrink-0"
          style={{ background: "hsl(220 20% 6%)", borderBottom: "1px solid hsl(220 14% 14%)" }}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full transition-colors"
            style={{ background: "hsl(220 16% 14%)", border: "1px solid hsl(220 14% 22%)", color: "rgba(255,255,255,0.50)" }}
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-start gap-3 pr-10">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
              style={{ background: "hsl(142 76% 42% / 0.14)", border: "1px solid hsl(142 76% 42% / 0.28)" }}
            >
              <Megaphone className="w-5 h-5" style={{ color: "#3ECF6A" }} strokeWidth={2} />
            </div>
            <div>
              <h2 id="adv-disclosure-title" className="font-display text-lg font-bold text-white uppercase">
                Advertiser Disclosure
              </h2>
              <p className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: "#3ECF6A", opacity: 0.75 }}>
                How we are funded
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.60)" }}>
          <div
            className="rounded-lg p-4"
            style={{ background: "hsl(220 16% 12%)", border: "1px solid hsl(220 14% 18%)" }}
          >
            <h3 className="text-sm font-bold mb-1.5" style={{ color: "rgba(255,255,255,0.88)" }}>Commercial links</h3>
            <p>
              elitelistbettingsitesuk.com may receive payment when you use outbound links to bookmakers. That income
              supports our hosting costs and independent editorial operation.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold mb-1.5" style={{ color: "rgba(255,255,255,0.88)" }}>Editorial independence</h3>
            <p className="mb-2">Fees do not buy placement. We order and score brands exclusively by:</p>
            <ul className="space-y-1.5">
              {[
                "UKGC licence and regulatory compliance",
                "Odds competitiveness and market depth",
                "Promotional clarity and payout speed",
                "App stability, mobile UX, and customer support quality",
              ].map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <span className="font-bold mt-0.5 shrink-0" style={{ color: "#3ECF6A" }}>&#183;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-lg p-4"
            style={{
              background: "hsl(142 76% 42% / 0.07)",
              border: "1px solid hsl(142 76% 42% / 0.20)",
            }}
          >
            <h3 className="text-sm font-bold mb-1.5" style={{ color: "rgba(255,255,255,0.88)" }}>Your responsibility</h3>
            <p>
              Confirm every offer on the operator&apos;s own site before registering. Only stake funds you can afford to lose.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div
          className="shrink-0 border-t px-5 py-3"
          style={{ borderColor: "hsl(220 14% 14%)", background: "hsl(220 20% 6%)" }}
        >
          <p className="text-center text-xs font-semibold" style={{ color: "rgba(255,255,255,0.42)" }}>
            18+ &middot; UK customers only &middot; Play responsibly &middot; BeGambleAware.org
          </p>
        </div>
      </div>
    </div>
  )
}
