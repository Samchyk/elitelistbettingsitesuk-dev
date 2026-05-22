import type { Metadata } from "next"
import {
  AlertTriangle,
  ShieldCheck,
  Clock,
  Ban,
  Coins,
  Phone,
  Users,
  HeartPulse,
  Globe,
} from "lucide-react"
import { PageFrame, ContentCard } from "@/components/policy-layout"

export const metadata: Metadata = {
  title: "Safer Gambling — elitelistbettingsitesuk.com",
  description:
    "Practical guidance on safer gambling habits, recognising problem gambling warning signs, and free UK support organisations. elitelistbettingsitesuk.com.",
}

const teal     = "hsl(172 80% 36%)"
const green    = "hsl(152 78% 38%)"
const steel    = "hsl(207 72% 44%)"
const safeGreen = "hsl(142 60% 40%)"
const red      = "hsl(4 80% 52%)"
const navy     = "hsl(200 18% 84%)"
const muted    = "hsl(200 14% 54%)"

export default function ResponsibleGamingPage() {
  return (
    <PageFrame title="Safer Gambling" eyebrow="Responsible Betting">

      {/* Emergency helpline strip */}
      <div
        className="rounded-md p-5 flex gap-4 items-start"
        style={{
          background: `${red}0c`,
          border: `2px solid ${red}30`,
        }}
        role="alert"
        aria-label="Gambling support helpline"
      >
        <AlertTriangle className="w-6 h-6 shrink-0 mt-0.5" style={{ color: red }} aria-hidden />
        <div>
          <p
            className="font-display font-black text-sm uppercase tracking-wide mb-1"
            style={{ color: red }}
          >
            Need help right now?
          </p>
          <p className="text-sm leading-relaxed" style={{ color: navy }}>
            Call the <strong>National Gambling Helpline: 0808 8020 133</strong> — free, confidential
            and available 24 hours a day, every day of the year.
          </p>
        </div>
      </div>

      <ContentCard
        title="What Safer Gambling Actually Means"
        icon={<ShieldCheck className="w-4 h-4" />}
        accent={teal}
      >
        <p>
          Safer gambling is not about avoiding betting entirely — it is about treating every session as a
          deliberate leisure activity with a pre-set budget and a fixed time limit, precisely as you would
          with any other form of paid entertainment. The mathematical edge in all fixed-odds products sits
          permanently with the operator. A single winning day does not alter that long-run reality.
          Accepting it before you place a bet — rather than discovering it during a session — is the most
          protective habit any punter can develop.
        </p>
        <div
          className="mt-3 rounded-md px-4 py-3"
          style={{
            background: "hsl(214 48% 9%)",
            border: `1px solid ${teal}20`,
            borderLeft: `2px solid ${teal}`,
          }}
        >
          <p className="text-xs leading-relaxed" style={{ color: muted }}>
            Treating a return as genuinely unexpected income — rather than an entitlement — is a reliable
            marker of a sustainable and enjoyable relationship with sports betting.
          </p>
        </div>
      </ContentCard>

      <ContentCard
        title="Five Habits Before Every Session"
        icon={<Clock className="w-4 h-4" />}
        accent={steel}
      >
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            {
              icon: Clock,
              color: steel,
              title: "Fix a Time Limit",
              body: "Decide in advance how long you will spend and set a session-time reminder inside your bookmaker account settings. When the alert fires, close the app. No exceptions.",
            },
            {
              icon: ShieldCheck,
              color: safeGreen,
              title: "Set a Deposit Cap",
              body: "All UKGC-licensed operators are legally required to offer daily, weekly and monthly deposit limits. Set them at the point of registration — reductions take immediate effect.",
            },
            {
              icon: Ban,
              color: red,
              title: "Never Chase Losses",
              body: "Raising your stakes to recover a deficit is the single most common pathway to serious harm. A losing session is the entertainment cost — log out and return another day.",
            },
            {
              icon: Coins,
              color: green,
              title: "Bet Only Surplus Money",
              body: "Only bet with funds you can genuinely afford to lose — money completely separate from rent, bills, food or any debt obligation. Never borrow to fund betting activity.",
            },
            {
              icon: Globe,
              color: steel,
              title: "Check In With Yourself",
              body: "Pause periodically and ask: Am I still enjoying this? If the answer is uncertain, take a break. Using the reality-check feature in your account makes this automatic.",
            },
            {
              icon: Users,
              color: teal,
              title: "Talk to Someone You Trust",
              body: "Keeping gambling private is an early warning sign. Sharing your activity openly with a partner or close friend provides natural accountability.",
            },
          ].map(({ icon: Icon, color, title, body }) => (
            <div
              key={title}
              className="rounded-md p-4"
              style={{
                background: "hsl(214 48% 9%)",
                border: `1px solid ${color}22`,
                borderTop: `3px solid ${color}`,
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-4 h-4 shrink-0" style={{ color }} aria-hidden />
                <p className="font-bold text-sm" style={{ color: navy }}>{title}</p>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: muted }}>{body}</p>
            </div>
          ))}
        </div>
      </ContentCard>

      <ContentCard
        title="Recognising Problem Gambling"
        icon={<AlertTriangle className="w-4 h-4" />}
        accent={red}
      >
        <p className="mb-3">
          The following patterns may indicate that gambling is causing harm. The more signs that apply,
          the more urgent it is to seek support:
        </p>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            "Spending significantly more time or money than you intended",
            "Feeling anxious, irritable or restless when not gambling",
            "Concealing the extent of your gambling from family or employers",
            "Borrowing money, selling possessions or taking credit to fund bets",
            "Neglecting work, study or family responsibilities",
            "Repeatedly attempting to cut back or stop without lasting success",
            "Gambling to escape feelings of stress, depression or boredom",
            "Needing increasingly large stakes to experience the same level of excitement",
          ].map((sign) => (
            <div
              key={sign}
              className="flex items-start gap-2 rounded-md px-3 py-2.5"
              style={{
                background: `${red}07`,
                border: `1px solid ${red}18`,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                style={{ background: red }}
                aria-hidden
              />
              <p className="text-xs leading-relaxed" style={{ color: navy }}>{sign}</p>
            </div>
          ))}
        </div>
        <p className="text-xs mt-4" style={{ color: muted }}>
          If you recognise two or more of these patterns — in yourself or someone close to you — please
          contact a free support service as soon as possible. Early intervention leads to substantially
          better outcomes.
        </p>
      </ContentCard>

      <ContentCard
        title="Account Tools Built Into Licensed UK Sites"
        icon={<ShieldCheck className="w-4 h-4" />}
        accent={safeGreen}
      >
        <p className="mb-3">
          Every UKGC-licensed bookmaker must offer the following tools at no cost and without requiring
          any justification to activate them. Use them proactively — before you need them:
        </p>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { label: "Deposit limits",         desc: "Caps on daily, weekly or monthly top-up amounts" },
            { label: "Loss limits",            desc: "Caps on the net amount you can lose in a defined period" },
            { label: "Session time reminders", desc: "Automatic alerts after a pre-set logged-in duration" },
            { label: "Reality checks",         desc: "Periodic on-screen summaries of your net win or loss" },
            { label: "Cooling-off periods",    desc: "Self-imposed account breaks ranging from 1 to 42 days" },
            { label: "Self-exclusion",         desc: "Full account closures from 6 months up to permanent" },
          ].map((tool) => (
            <div
              key={tool.label}
              className="rounded-md px-3 py-2.5 flex items-start gap-2"
              style={{
                background: "hsl(142 60% 40% / 0.06)",
                border: "1px solid hsl(142 60% 40% / 0.22)",
              }}
            >
              <ShieldCheck
                className="w-3.5 h-3.5 mt-0.5 shrink-0"
                style={{ color: safeGreen }}
                aria-hidden
              />
              <div>
                <p className="font-bold text-xs" style={{ color: navy }}>{tool.label}</p>
                <p className="text-xs" style={{ color: muted }}>{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div
          className="mt-3 rounded-md px-4 py-3"
          style={{
            background: "hsl(214 48% 9%)",
            border: `1px solid ${teal}20`,
            borderLeft: `2px solid ${teal}`,
          }}
        >
          <p className="text-xs leading-relaxed" style={{ color: muted }}>
            <strong style={{ color: navy }}>GamStop</strong> — the national multi-operator
            self-exclusion register — allows you to block access across every UKGC licensee
            simultaneously through a single registration at{" "}
            <a
              href="https://www.gamstop.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
              style={{ color: "hsl(172 80% 46%)" }}
              aria-label="Visit GamStop for multi-operator self-exclusion"
            >
              gamstop.co.uk
            </a>
          </p>
        </div>
      </ContentCard>

      <ContentCard
        title="Free UK Support Organisations"
        icon={<Phone className="w-4 h-4" />}
        accent={steel}
      >
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            {
              color: teal,
              name: "GambleAware",
              desc: "The UK's principal safer gambling charity — free information, self-assessment tools and referrals to specialist NHS and charitable treatment.",
              web: "www.gambleaware.org",
              phone: "0808 8020 133",
            },
            {
              color: green,
              name: "GamCare",
              desc: "Free counselling sessions, online peer support forums and a national helpline for anyone affected by gambling harm — including family members and partners.",
              web: "www.gamcare.org.uk",
              phone: "0808 8020 133",
            },
            {
              color: steel,
              name: "Gamblers Anonymous",
              desc: "Peer-led twelve-step fellowship meetings held across the United Kingdom. No fees, no registration required — just a shared commitment to recovery.",
              web: "www.gamblersanonymous.org.uk",
              phone: "020 7384 3040",
            },
            {
              color: "hsl(4 80% 52%)",
              name: "Gordon Moody",
              desc: "Specialist residential rehabilitation programmes and online therapy for people experiencing severe or complex gambling disorder.",
              web: "www.gordonmoody.org.uk",
              phone: "01384 241 292",
            },
          ].map(({ color, name, desc, web, phone }) => (
            <div
              key={name}
              className="rounded-md p-4"
              style={{
                background: "hsl(214 48% 9%)",
                border: `1px solid ${color}22`,
                borderTop: `3px solid ${color}`,
              }}
            >
              <p
                className="font-display font-black text-sm uppercase tracking-wide mb-2"
                style={{ color: navy }}
              >
                {name}
              </p>
              <p className="text-xs leading-relaxed mb-3" style={{ color: muted }}>{desc}</p>
              <div className="space-y-0.5">
                <p className="text-[11px]" style={{ color: muted }}>
                  <span className="font-semibold" style={{ color: navy }}>Web: </span>
                  {web}
                </p>
                <p className="text-[11px]" style={{ color: muted }}>
                  <span className="font-semibold" style={{ color: navy }}>Phone: </span>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    style={{ color: "hsl(172 80% 46%)" }}
                    aria-label={`Call ${name} on ${phone}`}
                  >
                    {phone}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </ContentCard>

      <ContentCard
        title="Supporting Someone Else"
        icon={<HeartPulse className="w-4 h-4" />}
        accent={red}
      >
        <p>
          Gambling harm rarely affects just one person. If you are worried about a friend, partner or
          family member, resist the urge to cover their gambling debts — doing so almost always prolongs
          harmful behaviour rather than ending it. Encourage them to contact GamCare, which provides
          dedicated support lines for concerned family members as well as those directly affected.
        </p>
        <div
          className="mt-3 rounded-md px-4 py-3"
          style={{
            background: `${red}07`,
            border: `1px solid ${red}20`,
          }}
        >
          <p className="text-xs leading-relaxed" style={{ color: navy }}>
            Gambling disorder is a recognised health condition — not a character flaw or a sign of
            weakness. Millions of people in the UK have successfully reduced or stopped harmful gambling
            with appropriate professional support. Reaching out is the most important step.
          </p>
        </div>
      </ContentCard>

    </PageFrame>
  )
}
