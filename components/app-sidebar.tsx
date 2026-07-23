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
  ChevronRight,
  ChevronLeft,
  Icon,
} from "lucide-react"
import Link from "next/link"
import { useSidebar } from "./sidebar-context"

const navItems = [
  { label: "Dashboard", icon: LayoutGrid, href: "/" },
  { label: "Cameras", icon: Video, href: "/cameras" },
  { label: "Alerts", icon: TriangleAlert, badge: 5, href: "/alerts" },
  { label: "Reports", icon: BarChart3, href: "/reports" },
  { label: "Settings", icon: Settings, href: "/settings" },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { mode, toggleCollapsed } = useSidebar()

  if (mode === "hidden") return null
  const collapsed = mode === "collapsed"

  return (
    <aside
      className={cn(
        "relative flex shrink-0 flex-col justify-between border-r border-sidebar-border bg-sidebar transition-[width] duration-200",
        collapsed ? "w-16" : "w-60"
      )}
    >
      <button
        onClick={toggleCollapsed}
        title={collapsed ? "Expanded" : "Collapse"}
        className="absolute top-6 -left-1 z-10 flex size-6 items-center justify-center rounded-full border border-sidebar-border bg-card text-muted-foreground shadow-sm hover:text-foreground"
      >
        {collapsed ? (
          <ChevronRight className="size-3.5" />
        ) : (
          <ChevronLeft className="size-3.5" />
        )}
      </button>

      {/* <div className="px-4 py-5">
        <div
          className={cn(
            "flex items-start gap-2",
            collapsed && "justify-center"
          )}
        >
          <span className="mt-1.5 size-2 shrink-0 rounded-full bg-success" />
          {!collapsed && (
            <div>
              <h2 className="text-base leading-tight font-bold text-primary">
                Surveillance <br /> Command
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Vigilant Sophistication
              </p>
            </div>
          )}
        </div>
      </div> */}
      <nav className="flex-1 space-y-1 px-3">
        {navItems.map(({ label, icon: Icon, badge, href }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href)
          return (
            <Link
              key={label}
              href={href}
              title={collapsed ? label : undefined}
              className={cn(
                "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground transition-colors hover:bg-sidebar-accent/60",
                collapsed && "justify-center px-0",
                isActive &&
                  "border-r-2 border-sidebar-primary bg-sidebar-accent text-sidebar-accent-foreground"
              )}
            >
              <Icon className="size-4 shrink-0" />
              {!collapsed && <span className="flex-1 text-left">{label}</span>}
              {!collapsed && badge != null && (
                <Badge className="size-5 justify-center rounded-full bg-destructive p-0 text-[11px] text-destructive-foreground">
                  {badge}
                </Badge>
              )}
            </Link>
          )
        })}
      </nav>

      <div className="space-y-1 border-t border-sidebar-border px-3 py-4">
        {[
          { label: "Support", icon: CircleHelp },
          { label: "Log Out", icon: LogOut },
        ].map(({ label, icon: Icon }) => (
          <button
            key={label}
            title={collapsed ? label : undefined}
            className={cn(
              "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/60",
              collapsed && "justify-center px-0"
            )}
          >
            <Icon className="size-4 shrink-0" />
            {!collapsed && label}
          </button>
        ))}
      </div>
    </aside>
  )
}
