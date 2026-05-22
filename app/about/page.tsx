import type { Metadata } from "next"
import { Users, Target, BarChart3, FlaskConical, BadgeDollarSign, Heart } from "lucide-react"
import { PageFrame, ContentCard } from "@/components/policy-layout"

export const metadata: Metadata = {
  title: "About Us — elitelistbettingsitesuk.com",
  description:
    "Learn who runs elitelistbettingsitesuk.com, how we evaluate UK bookmakers, and the editorial principles behind the Elite List.",
}

const teal  = "hsl(172 80% 36%)"
const green = "hsl(152 78% 36%)"
const steel = "hsl(207 72% 48%)"
const navy  = "hsl(200 18% 84%)"
const muted = "hsl(200 14% 56%)"
const dark  = "hsl(200 18% 72%)"

export default function AboutPage() {
  return (
    <PageFrame title="About Us" eyebrow="Who We Are">

      <ContentCard title="Who We Are" icon={<Users className="w-4 h-4" />} accent={teal}>
        <p>
          <strong style={{ color: dark }}>elitelistbettingsitesuk.com</strong> is an independent editorial
          comparison platform dedicated to British sports betting. We research, test and rank the most
          reputable UKGC-licensed bookmakers operating in Great Britain. We do not accept bets, process
          payments or hold funds on behalf of any individual or entity. Every bookmaker on the Elite List
          has been assessed by a human reviewer using a genuinely funded account opened under standard
          KYC conditions.
        </p>
      </ContentCard>

      <ContentCard title="Our Mission" icon={<Target className="w-4 h-4" />} accent={green}>
        <p>
          The UK sports betting market is saturated with operators competing on headline bonus values that
          frequently obscure what genuinely matters to a regular punter — consistent odds, reliable payouts,
          a stable mobile app and promotional terms that are actually achievable.{" "}
          <strong style={{ color: dark }}>elitelistbettingsitesuk.com</strong> cuts through that noise by
          applying a rigorous and consistent scoring framework to every major UKGC-licensed bookmaker,
          producing a single authoritative Elite List so you can assess the entire market without opening
          a dozen browser tabs or sifting through contradictory opinion.
        </p>
      </ContentCard>

      <ContentCard title="How We Score Bookmakers" icon={<BarChart3 className="w-4 h-4" />} accent={teal}>
        <p style={{ color: muted }} className="mb-4">
          Every bookmaker on the Elite List is assessed across five performance categories:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            {
              num: "01",
              label: "Odds Quality",
              body: "We record pre-match and live prices across high-volume markets — Premier League, Champions League, Cheltenham, Grand National and Six Nations — and benchmark them against a composite market average. Persistent margins above the benchmark reduce an Elite Score.",
              color: teal,
            },
            {
              num: "02",
              label: "Live Betting & Streaming",
              body: "Depth of in-play markets during live UK sport events, update speed on in-running prices, and availability of live video or high-quality data-stream coverage.",
              color: green,
            },
            {
              num: "03",
              label: "Platform Experience",
              body: "Desktop and mobile interface quality, bet builder capability across multiple sports, cash-out speed and reliability, and independently verified app store ratings.",
              color: steel,
            },
            {
              num: "04",
              label: "Payments & Withdrawals",
              body: "Range of supported deposit methods, minimum withdrawal thresholds, and actual processing timelines confirmed through funded account withdrawals conducted by our reviewers.",
              color: teal,
            },
            {
              num: "05",
              label: "Responsible Gambling Tools",
              body: "Accessibility and prominence of deposit limits, loss limits, reality checks, cooling-off periods and self-exclusion — assessed without requiring any justification to activate.",
              color: green,
            },
          ].map((item) => (
            <div
              key={item.num}
              className="rounded-xl p-4 flex gap-3"
              style={{
                background: "hsl(214 46% 9%)",
                border: `1px solid ${item.color}28`,
                borderLeft: `3px solid ${item.color}`,
              }}
            >
              <span
                className="font-display font-black text-2xl leading-none shrink-0 tabular-nums"
                style={{ color: `${item.color}50` }}
              >
                {item.num}
              </span>
              <div>
                <p className="font-bold text-sm mb-1" style={{ color: navy }}>{item.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: muted }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentCard>

      <ContentCard title="Our Review Methodology" icon={<FlaskConical className="w-4 h-4" />} accent={steel}>
        <p>
          Our reviewers register genuine accounts under standard KYC requirements, fund those accounts
          using common UK payment methods and place real-money bets across football, horse racing, rugby
          and tennis. We withdraw funds to verify processing timelines first-hand. We test bet builders
          and acca tools on both desktop and mobile browsers. We cross-reference all promotional terms
          against current ASA and UKGC advertising guidelines on a rolling review basis.
        </p>
        <div
          className="mt-3 rounded-lg px-4 py-3 flex items-start gap-2"
          style={{
            background: "hsl(172 80% 36% / 0.08)",
            border: "1px solid hsl(172 80% 36% / 0.22)",
          }}
        >
          <span
            className="w-1 h-full min-h-[36px] rounded-full shrink-0"
            style={{ background: teal }}
            aria-hidden
          />
          <p className="text-xs leading-relaxed" style={{ color: muted }}>
            No operator can purchase an improved Elite Score — if a bookmaker&apos;s product
            deteriorates between review cycles, its position on the list falls accordingly.
          </p>
        </div>
      </ContentCard>

      <ContentCard title="Commercial Disclosures" icon={<BadgeDollarSign className="w-4 h-4" />} accent={steel}>
        <p>
          Links to bookmakers from this site may carry affiliate tracking identifiers. When a visitor
          registers through one of our links and places qualifying bets, we may receive a commission from
          the operator. This revenue funds the independent operation of this platform. The{" "}
          <strong style={{ color: dark }}>Advertiser Disclosure</strong> link on the homepage provides
          complete transparency. Affiliate arrangements have{" "}
          <strong style={{ color: dark }}>no influence</strong> over ranking order — bookmakers rise or
          fall in the Elite List based on measured product performance alone.
        </p>
      </ContentCard>

      <ContentCard title="Our Responsibility Commitment" icon={<Heart className="w-4 h-4" />} accent="hsl(4 80% 52%)">
        <p>
          Betting is an entertainment activity that carries a genuine financial cost. We encourage every
          visitor to set firm time and stake limits before placing any bet. All UKGC-licensed operators
          on our list are legally required to provide free tools to help you maintain control over your
          gambling activity.
        </p>
        <div
          className="mt-3 rounded-xl px-4 py-3"
          style={{
            background: "hsl(4 80% 52% / 0.06)",
            border: "1px solid hsl(4 80% 52% / 0.18)",
          }}
        >
          <p className="text-xs font-bold mb-1" style={{ color: "hsl(4 80% 56%)" }}>
            Need support?
          </p>
          <p className="text-xs leading-relaxed" style={{ color: muted }}>
            If gambling is causing financial or emotional difficulties — for you or for someone close to
            you — please reach out to one of the free support organisations listed in our footer. They
            operate around the clock and all contact is strictly confidential.
          </p>
        </div>
      </ContentCard>

    </PageFrame>
  )
}
