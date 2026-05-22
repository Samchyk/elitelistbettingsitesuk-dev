import type { Metadata } from "next"
import Link from "next/link"
import {
  Database, FileText, Scale, Share2, Clock, ShieldCheck, UserCog, Baby, Globe, RefreshCw, Mail
} from "lucide-react"
import { PageFrame, ContentCard } from "@/components/policy-layout"

export const metadata: Metadata = {
  title: "Privacy Policy — elitelistbettingsitesuk.com",
  description:
    "How elitelistbettingsitesuk.com collects, processes and protects personal data under UK GDPR.",
}

const teal  = "hsl(172 80% 36%)"
const green = "hsl(152 78% 38%)"
const steel = "hsl(207 72% 44%)"
const red   = "hsl(4 80% 52%)"
const navy  = "hsl(200 18% 84%)"
const muted = "hsl(200 14% 54%)"

export default function PrivacyPolicyPage() {
  return (
    <PageFrame title="Privacy Policy" eyebrow="Data & Privacy">

      <ContentCard title="Data Controller" icon={<Database className="w-4 h-4" />} accent={teal}>
        <p>
          elitelistbettingsitesuk.com is an independent editorial comparison platform. We do not operate
          a sportsbook, accept wagers or process financial transactions for users. As a result, the volume
          and sensitivity of personal data we process is significantly more limited than that of a gambling
          operator.
        </p>
      </ContentCard>

      <ContentCard
        title="Personal Data We May Process"
        icon={<FileText className="w-4 h-4" />}
        accent={steel}
      >
        <div className="space-y-2">
          {[
            {
              label: "Server & Access Logs",
              color: steel,
              badge: undefined,
              desc: "Your IP address, browser type and version, approximate geographic region derived from IP, the page requested and a timestamp. Generated automatically by our hosting infrastructure for security and performance monitoring.",
            },
            {
              label: "Analytics Data",
              color: teal,
              badge: "Consent-Dependent",
              desc: "Pages visited, scroll depth, time on page and navigation paths — collected in anonymised, aggregated form only when you accept analytics cookies. No individual user profiles are created from this data.",
            },
            {
              label: "Email Correspondence",
              color: green,
              badge: undefined,
              desc: "If you contact us by email, we retain the message thread for as long as necessary to fully resolve your enquiry. Email addresses are never added to marketing lists without explicit consent.",
            },
            {
              label: "Cookie Consent Record",
              color: teal,
              badge: undefined,
              desc: "A record of your cookie consent decision is stored locally on your device only. We do not transmit this preference to our servers.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-md px-4 py-3 flex gap-3"
              style={{
                background: "hsl(214 48% 9%)",
                border: `1px solid ${item.color}22`,
                borderLeft: `3px solid ${item.color}`,
              }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-bold text-sm" style={{ color: navy }}>{item.label}</p>
                  {item.badge && (
                    <span
                      className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-sm"
                      style={{
                        background: `${item.color}14`,
                        color: item.color,
                        border: `1px solid ${item.color}28`,
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs leading-relaxed" style={{ color: muted }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div
          className="mt-3 rounded-md px-4 py-3"
          style={{
            background: `${red}07`,
            border: `1px solid ${red}20`,
          }}
        >
          <p className="text-xs font-bold mb-1" style={{ color: red }}>We never:</p>
          <p className="text-xs leading-relaxed" style={{ color: muted }}>
            Store betting history, payment card details or any personal account information relating to
            gambling activity. We do not act as a data broker and do not sell personal data to any third party.
          </p>
        </div>
      </ContentCard>

      <ContentCard
        title="Legal Basis for Processing (UK GDPR)"
        icon={<Scale className="w-4 h-4" />}
        accent="hsl(207 60% 38%)"
      >
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            {
              label: "Legitimate Interests",
              color: steel,
              desc: "To operate and secure the site, maintain server logs and protect against fraudulent access or abuse.",
            },
            {
              label: "Consent",
              color: teal,
              desc: "For optional analytics cookies only. Consent may be withdrawn at any time by clearing your cookie preferences in the browser.",
            },
          ].map((basis) => (
            <div
              key={basis.label}
              className="rounded-md p-4"
              style={{
                background: "hsl(214 48% 9%)",
                border: `1px solid ${basis.color}22`,
                borderTop: `3px solid ${basis.color}`,
              }}
            >
              <p
                className="font-display font-black text-sm uppercase tracking-wide mb-1.5"
                style={{ color: navy }}
              >
                {basis.label}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: muted }}>{basis.desc}</p>
            </div>
          ))}
        </div>
      </ContentCard>

      <ContentCard title="How We Share Data" icon={<Share2 className="w-4 h-4" />} accent={green}>
        <p className="mb-3">
          We do not sell personal data. Data may be processed by the following categories of sub-processor,
          each operating under a data-processing agreement:
        </p>
        <div className="space-y-2">
          {[
            { label: "Hosting and infrastructure providers", desc: "who store server access logs" },
            { label: "Analytics platforms", desc: "that aggregate anonymised usage signals (consent-dependent)" },
            { label: "Affiliate networks", desc: "that attribute referrals when you follow a bookmaker link" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-3 rounded-md px-3 py-2.5"
              style={{
                background: "hsl(214 48% 9%)",
                border: `1px solid ${green}20`,
                borderLeft: `2px solid ${green}`,
              }}
            >
              <p className="text-xs leading-relaxed" style={{ color: muted }}>
                <span className="font-semibold" style={{ color: navy }}>{item.label}</span> — {item.desc}
              </p>
            </div>
          ))}
        </div>
      </ContentCard>

      <ContentCard title="Data Retention" icon={<Clock className="w-4 h-4" />} accent={teal}>
        <p>
          Server access logs are rotated on a short cycle (typically 30 days) and then purged. Analytics
          data is retained in anonymous, aggregated form only. Email correspondence is deleted once fully
          resolved, unless a longer retention period is required by applicable law.
        </p>
      </ContentCard>

      <ContentCard title="Security Measures" icon={<ShieldCheck className="w-4 h-4" />} accent={green}>
        <p>
          The site is served exclusively over HTTPS with HSTS enforced. Administrative access requires
          multi-factor authentication. We conduct periodic security reviews and apply dependency updates
          promptly. If you identify a suspected vulnerability, please report it to{" "}
          <a
            href="mailto:info@elitelistbettingsitesuk.com"
            className="underline underline-offset-2"
            style={{ color: "hsl(172 80% 46%)" }}
          >
            info@elitelistbettingsitesuk.com
          </a>{" "}
          before any public disclosure so we can investigate and respond appropriately.
        </p>
      </ContentCard>

      <ContentCard
        title="Your Rights Under UK GDPR"
        icon={<UserCog className="w-4 h-4" />}
        accent={steel}
      >
        <p className="mb-3">Subject to the exceptions permitted by applicable law, you have the right to:</p>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            "Access a copy of personal data we hold about you",
            "Correct inaccurate or incomplete data",
            "Request erasure of your data (right to be forgotten)",
            "Restrict processing while a dispute is under review",
            "Receive a portable copy of your data",
            "Object to processing based on legitimate interests",
          ].map((right) => (
            <div
              key={right}
              className="flex items-start gap-2 rounded-md px-3 py-2.5"
              style={{
                background: "hsl(207 72% 44% / 0.06)",
                border: "1px solid hsl(207 72% 44% / 0.18)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                style={{ background: steel }}
                aria-hidden
              />
              <p className="text-xs leading-relaxed" style={{ color: navy }}>{right}</p>
            </div>
          ))}
        </div>
        <p className="text-xs mt-3" style={{ color: muted }}>
          To exercise these rights, contact{" "}
          <a
            href="mailto:info@elitelistbettingsitesuk.com"
            className="underline underline-offset-2"
            style={{ color: "hsl(172 80% 46%)" }}
          >
            info@elitelistbettingsitesuk.com
          </a>
          . Complaints may be lodged with the{" "}
          <a
            href="https://ico.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
            style={{ color: "hsl(172 80% 46%)" }}
          >
            Information Commissioner&apos;s Office (ICO)
          </a>
          .
        </p>
      </ContentCard>

      <ContentCard title="Children" icon={<Baby className="w-4 h-4" />} accent={red}>
        <p>
          This site is intended exclusively for adults aged 18 or over, in line with UK gambling
          regulations. We do not knowingly collect or process personal data from minors. If you believe a
          child has submitted data through this site, please contact us immediately so we can delete it
          without delay.
        </p>
      </ContentCard>

      <ContentCard
        title="International Data Transfers"
        icon={<Globe className="w-4 h-4" />}
        accent={steel}
      >
        <p>
          Our hosting provider and some analytics sub-processors may operate infrastructure outside the
          United Kingdom. In such cases we rely on UK Standard Contractual Clauses or other ICO-approved
          transfer mechanisms to ensure equivalent levels of data protection are maintained.
        </p>
      </ContentCard>

      <ContentCard
        title="Changes to This Policy"
        icon={<RefreshCw className="w-4 h-4" />}
        accent={teal}
      >
        <p>
          We will publish a revised version of this policy whenever we make material changes to our
          data-processing practices. The effective date shown in the page header reflects the most recent
          update. Continued use of the site after a revision constitutes acceptance of the updated policy,
          unless fresh consent is required under applicable law.
        </p>
      </ContentCard>

      <ContentCard title="Contact" icon={<Mail className="w-4 h-4" />} accent={green}>
        <p>
          Data protection and privacy enquiries:{" "}
          <a
            href="mailto:info@elitelistbettingsitesuk.com"
            className="font-semibold underline underline-offset-2"
            style={{ color: "hsl(172 80% 46%)" }}
          >
            info@elitelistbettingsitesuk.com
          </a>
          . For cookie-specific questions, see our{" "}
          <Link
            href="/cookie-policy"
            className="font-semibold underline underline-offset-2"
            style={{ color: "hsl(172 80% 46%)" }}
          >
            Cookie Policy
          </Link>
          .
        </p>
      </ContentCard>

    </PageFrame>
  )
}
