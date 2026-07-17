"use client"

import { cn } from "@/lib/utils"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react"

const tabs = [
  { label: "Dashboard", href: "/" },
  { label: "Live View", href: "/live-view" },
  { label: "Forensics", href: "/forensics" },
];

export function TopNav() {
  const pathname = usePathname();

  return (
    <header className="flex h-14 shrink-0 items-center gap-8 border-border bg-card px-6">
      <span className="text-xl font-extrabold tracking-tight text-blue-950">
        ICMR
      </span>
      <nav className="flex h-full items-center gap-6">
        {tabs.map(({ label, href}) => {

          const isActive = pathname === href;
          return (
            <Link
            key={href}
            href={href}
            className={cn(
              "relative flex h-full items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
              isActive &&
                "font-semibold text-primary after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-primary"
            )}>
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
