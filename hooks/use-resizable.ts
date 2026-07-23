"use client"

import { useCallback, useState } from "react"

export function useResizablel(
  initial: number,
  min: number,
  max: number,
  side: "left" | "right" = "left"
) {
  const [width, setWidth] = useState(initial);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const startX = e.clientX;
    const startW = width;

    const onMove = (ev: MouseEvent) => {
      const delta = ev.clientX - startX;
      const next = side === "left" ? startW - delta : startW + delta;
      setWidth(Math.min(max, Math.max(min, next)));
    }

    const onUp = () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      document.body.style.userSelect = "";
    };

    document.body.style.userSelect = "none";
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);

  }, [width, min, max, side])

  return {width, onMouseDown}
}