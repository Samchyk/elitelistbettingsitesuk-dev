"use client"

import { X, ShieldAlert } from "lucide-react"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ background: "hsl(220 20% 3% / 0.80)", backdropFilter: "blur(8px)" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
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
              style={{ background: "hsl(43 96% 52% / 0.12)", border: "1px solid hsl(43 96% 52% / 0.28)" }}
            >
              <ShieldAlert className="w-5 h-5" style={{ color: "hsl(43 96% 58%)" }} strokeWidth={2} />
            </div>
            <div>
              <h2 id="terms-modal-title" className="font-display text-lg font-bold text-white uppercase">
                Site Rules &amp; 18+
              </h2>
              <p className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: "hsl(43 96% 58%)", opacity: 0.80 }}>
                Terms of use
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.60)" }}>
          <p>
            Using{" "}
            <strong style={{ color: "rgba(255,255,255,0.88)" }}>elitelistbettingsitesuk.com</strong>{" "}
            means you accept these rules. They apply on all devices.
          </p>
          <div
            className="rounded-lg p-4"
            style={{
              background: "hsl(43 96% 52% / 0.07)",
              border: "1px solid hsl(43 96% 52% / 0.22)",
            }}
          >
            <p className="font-bold mb-1" style={{ color: "rgba(255,255,255,0.88)" }}>Age restriction</p>
            <p>You must be 18 or older. This site discusses gambling — minors should leave immediately.</p>
          </div>
          <div
            className="rounded-lg p-4"
            style={{ background: "hsl(220 16% 12%)", border: "1px solid hsl(220 14% 18%)" }}
          >
            <p className="font-bold mb-2" style={{ color: "rgba(255,255,255,0.88)" }}>Responsible play</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Set time and money limits before you bet</li>
              <li>Never chase losses — take breaks when things go wrong</li>
              <li>Ask for help early — GambleAware 0808 8020 133 (free, 24/7)</li>
            </ul>
          </div>
          <p>
            We cannot guarantee offers stay accurate — operators change terms at any time. External sites have their
            own policies; we are not responsible for third-party content or decisions you make based on it.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>
            No warranty is provided. Do not rely on this site as legal or financial advice. See our full terms page for complete details.
          </p>
        </div>

        {/* Footer */}
        <div
          className="shrink-0 border-t px-5 py-3"
          style={{ borderColor: "hsl(220 14% 14%)", background: "hsl(220 20% 6%)" }}
        >
          <p className="text-center text-xs font-semibold" style={{ color: "rgba(255,255,255,0.42)" }}>
            18+ &middot; T&amp;Cs apply &middot; BeGambleAware.org &middot; Play responsibly
          </p>
        </div>
      </div>
    </div>
  )
}
