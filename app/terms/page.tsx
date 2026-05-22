import type { Metadata } from "next"
import Link from "next/link"
import {
  CheckCircle,
  Building2,
  UserCheck,
  RefreshCw,
  Link2,
  ShieldCheck,
  BookOpen,
  Scale,
  Lock,
  FileEdit,
  Globe,
} from "lucide-react"
import { PageFrame, ContentCard } from "@/components/policy-layout"

export const metadata: Metadata = {
  title: "Terms of Use — elitelistbettingsitesuk.com",
  description:
    "The terms and conditions governing your use of elitelistbettingsitesuk.com — Elite List Betting Sites UK.",
}

const teal  = "hsl(172 80% 36%)"
const green = "hsl(152 78% 38%)"
const steel = "hsl(207 72% 44%)"
const red   = "hsl(4 80% 52%)"
const navy  = "hsl(200 18% 84%)"
const muted = "hsl(200 14% 54%)"

export default function TermsPage() {
  return (
    <PageFrame title="Terms of Use" eyebrow="Legal Information">

      <ContentCard title="Acceptance of Terms" icon={<CheckCircle className="w-4 h-4" />} accent={teal}>
        <p>
          These terms govern your use of{" "}
          <strong style={{ color: navy }}>elitelistbettingsitesuk.com</strong> (the &quot;Site&quot;).
          Accessing or using any part of the Site constitutes your acknowledgement that you have read,
          understood and agreed to these terms in their entirety. If you do not accept any provision
          contained here, you must discontinue use of the Site immediately.
        </p>
      </ContentCard>

      <ContentCard title="What This Site Is" icon={<Building2 className="w-4 h-4" />} accent={steel}>
        <p>
          elitelistbettingsitesuk.com is an independent editorial comparison service operating under the
          Elite List Betting Sites UK brand. We research, independently test and rank UKGC-licensed
          bookmaking platforms for adult consumers located in Great Britain. We are{" "}
          <strong style={{ color: navy }}>
            not a bookmaker, betting exchange or gambling operator
          </strong>{" "}
          of any kind. We do not accept, process or settle bets. We do not hold player deposits, wagers
          or funds of any description. We publish editorial content only.
        </p>
      </ContentCard>

      <ContentCard title="Age Requirement" icon={<UserCheck className="w-4 h-4" />} accent={red}>
        <div
          className="rounded-md px-4 py-4 flex items-start gap-4"
          style={{
            background: `${red}08`,
            border: `2px solid ${red}28`,
          }}
        >
          <span
            className="font-display font-black text-4xl leading-none shrink-0"
            style={{ color: `${red}35` }}
          >
            18+
          </span>
          <p className="text-sm leading-relaxed" style={{ color: navy }}>
            The Site is strictly intended for adults aged 18 years or over who are physically located
            in Great Britain at the time of use. Gambling with operators linked from this Site is
            unlawful under UK law for persons under 18. If you are under 18, you must leave immediately.
          </p>
        </div>
      </ContentCard>

      <ContentCard title="Accuracy of Information" icon={<RefreshCw className="w-4 h-4" />} accent={green}>
        <p>
          Welcome bonus values, odds information, payment method details and product descriptions
          published on this Site reflect each bookmaker&apos;s product at the time of our most recent
          editorial assessment. Promotional terms change without prior notice and may differ materially
          — sometimes significantly — from those described in our reviews.
        </p>
        <div
          className="mt-3 rounded-md px-4 py-3"
          style={{
            background: "hsl(214 48% 9%)",
            border: `1px solid ${green}22`,
            borderLeft: `2px solid ${green}`,
          }}
        >
          <p className="text-xs font-bold mb-1" style={{ color: green }}>Important</p>
          <p className="text-xs leading-relaxed" style={{ color: muted }}>
            You must verify all current terms, minimum odds requirements, wagering conditions and
            eligibility restrictions directly on each operator&apos;s official licensed website before
            registering, depositing funds or placing any wager.
          </p>
        </div>
      </ContentCard>

      <ContentCard
        title="External Links & Affiliate Relationships"
        icon={<Link2 className="w-4 h-4" />}
        accent={steel}
      >
        <p>
          Outbound links from this Site take you to third-party platforms that are independently operated
          and governed by their own terms of service, privacy policies and licensing conditions. We are
          not responsible for the content, conduct or practices of any linked operator. Some outbound links
          incorporate affiliate tracking identifiers — when a qualifying account is registered and bets
          placed through such a link, we may receive a commission from the operator. Full disclosure is
          available via the Advertiser Disclosure link on the homepage.
        </p>
      </ContentCard>

      <ContentCard
        title="Responsible Gambling"
        icon={<ShieldCheck className="w-4 h-4" />}
        accent={teal}
      >
        <p>
          Sports betting carries inherent and unavoidable financial risk. The mathematical advantage in all
          fixed-odds gambling products lies with the operator over the long term. Never wager more than you
          can genuinely afford to lose, and never use money set aside for essential household expenses.
          Deploy the deposit limits, loss limits, session time alerts and self-exclusion tools that all
          UKGC-licensed operators are legally required to make available.
        </p>
        <p className="mt-2">
          The National Gambling Helpline is free, confidential and available around the clock on{" "}
          <a
            href="tel:08088020133"
            className="font-bold underline underline-offset-2"
            style={{ color: "hsl(172 80% 48%)" }}
          >
            0808 8020 133
          </a>
          . For comprehensive guidance, please visit our{" "}
          <Link
            href="/responsible-gaming"
            className="underline underline-offset-2 font-semibold"
            style={{ color: "hsl(172 80% 46%)" }}
          >
            Safer Gambling
          </Link>{" "}
          page.
        </p>
      </ContentCard>

      <ContentCard title="Intellectual Property" icon={<BookOpen className="w-4 h-4" />} accent={green}>
        <p>
          All original editorial content, scoring methodologies, ranking logic and design assets published
          on elitelistbettingsitesuk.com are the intellectual property of this website and may not be
          reproduced, adapted or redistributed — in whole or in part — without prior written permission.
          Bookmaker names, logotypes and brand marks remain the intellectual property of their respective
          owners and appear on this Site solely for nominative identification purposes within editorial
          comparisons.
        </p>
      </ContentCard>

      <ContentCard
        title="Limitation of Liability"
        icon={<Scale className="w-4 h-4" />}
        accent="hsl(207 60% 38%)"
      >
        <p>
          To the fullest extent permitted under the laws of England and Wales, elitelistbettingsitesuk.com
          excludes all liability for any loss, cost or damage of any nature arising directly or indirectly
          from reliance on any content published on this Site, including any financial loss resulting from
          betting decisions informed by our editorial assessments. No provision in these terms affects any
          statutory rights you hold as a consumer under applicable UK consumer protection legislation.
        </p>
      </ContentCard>

      <ContentCard title="Data & Privacy" icon={<Lock className="w-4 h-4" />} accent={steel}>
        <p>
          Information about how we collect, use and protect your personal data is set out in our{" "}
          <Link
            href="/privacy-policy"
            className="font-semibold underline underline-offset-2"
            style={{ color: "hsl(172 80% 46%)" }}
          >
            Privacy Policy
          </Link>
          . For information specifically about how we use cookies, see our{" "}
          <Link
            href="/cookie-policy"
            className="font-semibold underline underline-offset-2"
            style={{ color: "hsl(172 80% 46%)" }}
          >
            Cookie Policy
          </Link>
          . Both documents form part of the terms governing your use of this Site.
        </p>
      </ContentCard>

      <ContentCard
        title="Amendments to These Terms"
        icon={<FileEdit className="w-4 h-4" />}
        accent={green}
      >
        <p>
          We may update these terms at any time by publishing a revised version on this page. The effective
          date shown in the page header reflects the most recent revision. Continuing to access or use the
          Site after any update constitutes your acceptance of the revised terms. We recommend reviewing
          this page periodically, particularly if you follow bookmaker links from our Site.
        </p>
      </ContentCard>

      <ContentCard
        title="Governing Law & Jurisdiction"
        icon={<Globe className="w-4 h-4" />}
        accent={steel}
      >
        <p>
          These terms are governed by, and shall be construed in accordance with, the laws of England and
          Wales. Any dispute arising from or relating to your use of this Site shall be subject to the
          exclusive jurisdiction of the courts of England and Wales, except where mandatory
          consumer-protection provisions in your jurisdiction of residence require otherwise.
        </p>
      </ContentCard>

    </PageFrame>
  )
}
