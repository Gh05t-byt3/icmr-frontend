"use client"

import { createContext, useContext, useEffect, useState } from "react"

type LeftMode = "expanded" | "collapsed" | "hidden"

type Ctx = {
  mode: LeftMode
  toggleHidden: () => void
  toggleCollapsed: () => void
}

const SidebarCtx = createContext<Ctx | null>(null)

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true)
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    const v = localStorage.getItem("sb-visible")
    const c = localStorage.getItem("sb-collapsed")

    if (v !== null) setVisible(v === "1");
    if (c !== null) setCollapsed(c === "1");
  }, [])

  useEffect(() => {
    localStorage.setItem("sb-visible", visible ? "1": "0")
    localStorage.setItem("sb-collapsed", collapsed ? "1": "0")
  }, [visible, collapsed])

  const mode : LeftMode = !visible ? "hidden" : collapsed ? "collapsed" : "expanded"

  return (
    <SidebarCtx.Provider
    value={{
      mode,
      toggleHidden: () => setVisible((v) => !v),
      toggleCollapsed: () => setCollapsed((c) => !c),
    }} 
    >
      {children}
    </SidebarCtx.Provider>
  )
}


export function useSidebar() {
  const ctx = useContext(SidebarCtx);
  if (!ctx) throw new Error("useSidebar must be used within SidebarProvider");
  return ctx;
}