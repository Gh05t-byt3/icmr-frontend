"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"

const tabs = ["Dashboard", "Live View", "Forensics"]

export function TopNav() {
  const [active, setActive] = useState("Dashboard")

  return (
    <header className="flex h-14 shrink-0 items-center gap-8 border-border bg-card px-6">
      <span className="text-xl font-extrabold tracking-tight text-blue-950">
        ICMR
      </span>
      <nav className="flex h-full items-center gap-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={cn(
              "relative flex h-full items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
              active === tab &&
                "font-semibold text-primary after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-primary"
            )}
          >
            {tab}
          </button>
        ))}
      </nav>
    </header>
  )
}
