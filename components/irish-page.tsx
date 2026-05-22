"use client"

import { useState } from "react"

import { ConsentNotice } from "./cookie-banner"
import { EditorialPanel, FaqSection } from "./info-sections"
import { AdvertiserDisclosureModal } from "./advertiser-disclosure-modal"
import { TermsModal } from "./terms-modal"

import { VipHeroBanner } from "./hero-section"
import { VipRankingsPanel } from "./sites-list"

export default function VipMainPage() {
  const [disclosureOpen, setDisclosureOpen] = useState(false)
  const [termsOpen, setTermsOpen]           = useState(false)

  return (
    <>
      {/* Full-width hero banner */}
      <VipHeroBanner
        onDisclosureOpen={() => setDisclosureOpen(true)}
        onTermsOpen={() => setTermsOpen(true)}
      />

      {/* Main content area */}
      <div className="bg-background">
        <div className="container mx-auto px-3 sm:px-4 max-w-5xl xl:max-w-6xl py-6 sm:py-8">
          <VipRankingsPanel />
          <EditorialPanel />
          <FaqSection />
        </div>
      </div>

      <ConsentNotice />
      <AdvertiserDisclosureModal isOpen={disclosureOpen} onClose={() => setDisclosureOpen(false)} />
      <TermsModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
    </>
  )
}
