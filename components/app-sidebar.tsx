"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import {
  LayoutGrid,
  Video,
  TriangleAlert,
  Settings,
  BarChart3,
  LogOut,
  CircleHelp,
} from "lucide-react"
import Link from "next/link"

const navItems = [
  { label: "Dashboard", icon: LayoutGrid, href: "/" },
  { label: "Cameras", icon: Video, href: "/cameras" },
  { label: "Alerts", icon: TriangleAlert, badge: 5, href: "/alerts" }, 
  { label: "Reports", icon: BarChart3, href: "/reports" },
  { label: "Settings", icon: Settings, href: "/settings" },
]

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-60 shrink-0 flex-col justify-between border-sidebar-border bg-sidebar">
      <nav className="space-y-1 px-3">
        {navItems.map(({ label, icon: Icon, badge, href }) => {
          const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={label}
              href={href}
              className={cn(
                "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground transition-colors hover:bg-sidebar-accent/60",
                isActive &&
                  "border-r-2 border-sidebar-primary bg-sidebar-accent text-sidebar-accent-foreground"
              )}
            >
              <Icon className="size-4" />
              <span className="flex-1 text-left">{label}</span>

              {badge != null && (
                <Badge className="size-5 justify-center rounded-full bg-destructive p-0 text-[11px] text-destructive-foreground">
                  {badge}
                </Badge>
              )}
            </Link>
          )
        })}
      </nav>

      <div className="space-y-1 border-t border-sidebar-border px-3 py-4">
        <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/60">
          <CircleHelp className="size-4" />
          Support
        </button>
        <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/60">
          <LogOut className="size-4" />
          Log Out
        </button>
      </div>
    </aside>
  )
}
