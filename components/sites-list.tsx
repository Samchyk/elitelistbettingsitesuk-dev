"use client"

import { BookmakerCard } from "./card"
import { bettingSites } from "../data/mock-data"
import type { BettingSite } from "../types"
import { Trophy, RefreshCw } from "lucide-react"

export function VipRankingsPanel() {
  return (
    <div id="rankings" className="w-full scroll-mt-20">

      {/* ── Compact inline header strip ── */}
      <div
        className="flex items-center justify-between gap-3 px-4 py-3 mb-4 rounded-xl"
        style={{
          background: "hsl(214 50% 7%)",
          border: "1px solid hsl(214 32% 18%)",
          borderLeft: "3px solid hsl(172 80% 36%)",
        }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="flex items-center justify-center w-7 h-7 rounded-lg shrink-0"
            style={{ background: "hsl(172 80% 36% / 0.12)", border: "1px solid hsl(172 80% 36% / 0.28)" }}
          >
            <Trophy className="w-3.5 h-3.5" style={{ color: "hsl(172 80% 52%)" }} aria-hidden />
          </div>
          <div>
            <h2
              className="font-display font-black uppercase leading-none tracking-tight"
              style={{ fontSize: "clamp(0.85rem, 2vw, 1.05rem)", color: "hsl(0 0% 96%)" }}
            >
              Elite List — UK Betting Sites
            </h2>
            <p
              className="text-[9px] font-medium mt-0.5 leading-none"
              style={{ color: "hsl(200 14% 46%)" }}
            >
              Independently assessed &amp; verified — no paid placements
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {/* Live count badge */}
          <div
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg"
            style={{
              background: "hsl(172 80% 36% / 0.10)",
              border: "1px solid hsl(172 80% 36% / 0.24)",
            }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full elite-pulse shrink-0"
              style={{ background: "hsl(172 80% 50%)" }}
              aria-hidden
            />
            <span
              className="text-[10px] font-bold uppercase tracking-wider"
              style={{ color: "hsl(172 80% 54%)" }}
            >
              {bettingSites.length} Ranked
            </span>
          </div>
          {/* Updated indicator */}
          <div className="hidden sm:flex items-center gap-1" style={{ color: "hsl(200 14% 40%)" }}>
            <RefreshCw className="w-3 h-3" aria-hidden />
            <span className="text-[9px] font-medium">Updated May 2026</span>
          </div>
        </div>
      </div>

      {/* ── Bookmaker cards ── */}
      <div className="flex flex-col gap-2" role="list" aria-label="Ranked bookmakers list">
        {bettingSites.map((site: BettingSite, index: number) => (
          <div key={site.id} role="listitem">
            <BookmakerCard site={site} rank={index + 1} />
          </div>
        ))}
      </div>
    </div>
  )
}
