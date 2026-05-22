import type React from "react"
import type { Metadata } from "next"
import { Barlow, Oswald } from "next/font/google"
import "./globals.css"
import { SiteFooter } from "../components/footer"
import { SiteHeader } from "../components/header"

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
})

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://elitelistbettingsitesuk.com"),
  title: "Elite List Betting Sites UK — Premier Rankings 2026",
  description:
    "elitelistbettingsitesuk.com presents the definitive elite-tier rankings of UKGC-licensed bookmakers — independently assessed for odds value, live betting depth, withdrawal speed, mobile quality and bonus fairness. Updated and verified for 2026.",
  keywords:
    "elite betting sites UK, best bookmakers UK, UKGC licensed betting sites, top betting list 2026, UK sports betting, premium bookmakers, elite betting UK",
  openGraph: {
    siteName: "Elite List Betting Sites UK",
    url: "https://elitelistbettingsitesuk.com",
    title: "Elite List Betting Sites UK — Premier Rankings 2026",
    description:
      "Independent expert rankings of the finest UKGC-licensed bookmakers. Bonuses, odds, live betting and withdrawals — compared and verified by our editorial team.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite List Betting Sites UK — Premier Rankings 2026",
    description: "Premier independent rankings of UKGC-licensed bookmakers for UK bettors.",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${barlow.variable} ${oswald.variable} bg-background`}>
      <body className="font-sans min-h-screen flex flex-col antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
