import type { Metadata } from "next"
import Link from "next/link"
import { Cookie, ListChecks, Clock, Globe, Settings, RefreshCw, Mail } from "lucide-react"
import { PageFrame, ContentCard } from "@/components/policy-layout"

export const metadata: Metadata = {
  title: "Cookie Policy — elitelistbettingsitesuk.com",
  description:
    "How elitelistbettingsitesuk.com uses cookies, what each category does, and how to manage your preferences.",
}

const teal  = "hsl(172 80% 36%)"
const green = "hsl(152 78% 38%)"
const steel = "hsl(207 72% 44%)"
const navy  = "hsl(200 18% 84%)"
const muted = "hsl(200 14% 54%)"

const cookieCategories = [
  {
    label: "Strictly Necessary",
    color: teal,
    badge: "Always Active",
    desc: "These cookies record your consent decision and maintain basic session continuity. Without them the site cannot function. They do not collect personal data, contain no advertising functionality and cannot be disabled.",
  },
  {
    label: "Analytics",
    color: steel,
    badge: "Opt-In",
    desc: "Set only when you accept analytics at the consent prompt. They capture anonymised page-view counts, scroll depth and navigation patterns so we can improve the layout and relevance of our rankings. No personally identifiable information is stored or sold.",
  },
  {
    label: "Functional",
    color: green,
    badge: "Session",
    desc: "Retain lightweight interface preferences such as dismissed notification banners so they do not reappear during the same browser session. These expire automatically when you close your browser tab.",
  },
  {
    label: "Third-Party Affiliate",
    color: "hsl(270 44% 52%)",
    badge: "External",
    desc: "When you follow a bookmaker link from this site, that operator's affiliate network may set tracking cookies under its own domain. Those cookies are governed by the operator's own privacy policy and are beyond our control.",
  },
]

export default function CookiePolicyPage() {
  return (
    <PageFrame title="Cookie Policy" eyebrow="Data & Privacy">

      <ContentCard
        title="What Is a Cookie?"
        icon={<Cookie className="w-4 h-4" />}
        accent={teal}
      >
        <p>
          A cookie is a small text file placed on your device by a website when you visit it. Some cookies
          are essential for a page to display and function correctly; others collect anonymised data to help
          us understand how visitors navigate our content. You can control which non-essential cookies are
          active through your browser settings or via the consent notice that appears on your first visit
          to elitelistbettingsitesuk.com.
        </p>
      </ContentCard>

      <ContentCard
        title="Cookies Used on This Site"
        icon={<ListChecks className="w-4 h-4" />}
        accent={steel}
      >
        <div className="grid sm:grid-cols-2 gap-3">
          {cookieCategories.map((cat) => (
            <div
              key={cat.label}
              className="rounded-md p-4"
              style={{
                background: "hsl(214 48% 9%)",
                border: `1px solid ${cat.color}22`,
                borderTop: `3px solid ${cat.color}`,
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <p
                  className="font-display font-black text-sm uppercase tracking-wide"
                  style={{ color: navy }}
                >
                  {cat.label}
                </p>
                <span
                  className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-sm"
                  style={{
                    background: `${cat.color}14`,
                    color: cat.color,
                    border: `1px solid ${cat.color}28`,
                  }}
                >
                  {cat.badge}
                </span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: muted }}>{cat.desc}</p>
            </div>
          ))}
        </div>
      </ContentCard>

      <ContentCard
        title="Session vs Persistent Cookies"
        icon={<Clock className="w-4 h-4" />}
        accent={green}
      >
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            {
              label: "Session Cookies",
              color: teal,
              desc: "Temporary cookies that exist only for the duration of your browser session and are deleted automatically when you close the tab or window.",
            },
            {
              label: "Persistent Cookies",
              color: steel,
              desc: "Carry a defined expiry date and remain on your device until that date or until you delete them manually. We keep retention periods as short as practically necessary.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-md px-4 py-3 flex gap-3"
              style={{
                background: "hsl(214 48% 9%)",
                border: `1px solid ${item.color}28`,
                borderLeft: `3px solid ${item.color}`,
              }}
            >
              <div>
                <p className="font-bold text-sm mb-1" style={{ color: navy }}>{item.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: muted }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentCard>

      <ContentCard
        title="Third-Party Scripts & Cookies"
        icon={<Globe className="w-4 h-4" />}
        accent={steel}
      >
        <p>
          Some features on this site rely on third-party providers that may set their own cookies. We
          endeavour to disclose all active third-party scripts in this notice, but the behaviour of those
          providers is ultimately governed by their own policies. If you have concerns about a specific
          third-party cookie, contact us and we will investigate promptly.
        </p>
      </ContentCard>

      <ContentCard
        title="Managing Your Preferences"
        icon={<Settings className="w-4 h-4" />}
        accent={teal}
      >
        <p>
          You can update your cookie preferences at any time by clearing cookies in your browser — this
          causes the consent notice to reappear on your next visit. Cookies can also be blocked, restricted
          or deleted individually through your browser&apos;s privacy or site data settings.
        </p>
        <div
          className="mt-3 rounded-md px-4 py-3"
          style={{
            background: "hsl(214 48% 9%)",
            border: `1px solid ${teal}20`,
            borderLeft: `2px solid ${teal}`,
          }}
        >
          <p className="text-xs font-bold mb-1" style={{ color: "hsl(172 80% 48%)" }}>Tip</p>
          <p className="text-xs leading-relaxed" style={{ color: muted }}>
            Most modern browsers allow per-domain cookie management. Search for your browser name
            alongside &quot;manage site cookies&quot; for step-by-step instructions.
          </p>
        </div>
      </ContentCard>

      <ContentCard title="Policy Revisions" icon={<RefreshCw className="w-4 h-4" />} accent={green}>
        <p>
          We will update this notice whenever we introduce new cookies, change our analytics provider or
          make other material changes to how cookie data is processed. The effective date shown in the page
          header reflects the most recent revision.
        </p>
      </ContentCard>

      <ContentCard title="Contact" icon={<Mail className="w-4 h-4" />} accent={steel}>
        <p>
          For questions about this Cookie Policy, write to{" "}
          <a
            href="mailto:info@elitelistbettingsitesuk.com"
            className="font-semibold underline underline-offset-2"
            style={{ color: "hsl(172 80% 46%)" }}
          >
            info@elitelistbettingsitesuk.com
          </a>
          . For broader data privacy enquiries, see our{" "}
          <Link
            href="/privacy-policy"
            className="font-semibold underline underline-offset-2"
            style={{ color: "hsl(172 80% 46%)" }}
          >
            Privacy Policy
          </Link>
          .
        </p>
      </ContentCard>

    </PageFrame>
  )
}
