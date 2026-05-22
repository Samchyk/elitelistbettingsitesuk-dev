"use client"

import type React from "react"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="w-full overflow-x-hidden">
      {children}
    </div>
  )
}
