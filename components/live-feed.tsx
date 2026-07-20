"use client"
import { Feed } from "@/lib/data/feed"
import Image from "next/image"
import { useEffect, useState } from "react"

export function LiveFeed({ feed, eager }: { feed: Feed; eager?: boolean }) {
  const [tick, setTick] = useState<number | null>(null);

  useEffect(() => {
    if (feed.type !== "image") return

    setTick(Date.now());
    const interval = setInterval(
      () => setTick(Date.now()),
      feed.refresh ?? 5000
    )
    return () => clearInterval(interval)
  }, [feed.type, feed.refresh])

  if (feed.type === "static") {
    return (
      <Image
        src={feed.src}
        alt={feed.name}
        fill
        priority={eager}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover opacity-90"
      />
    )
  }

  const src =
    feed.type === "image"
      ? `${feed.src}${feed.src.includes("?") ? "&" : "?"}t=${tick}`
      : feed.src

  return (
    <img
      src={src}
      alt={feed.name}
      className="absolute inset-0 size-full object-cover opacity-90"
    />
  )
}
