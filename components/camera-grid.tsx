import { feeds } from "@/lib/data/feed"
import { LiveFeed } from "./live-feed"
import { Badge } from "./ui/badge"
import Link from "next/link"

export function CameraGrid() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
      {feeds.map((feed, index) => (
        <Link
          key={feed.id}
          href={`/cameras/${feed.slug}`}
          className="relative aspect-video overflow-hidden rounded-lg bg-black shadow-md"
        >
          <LiveFeed feed={feed} eager={index < 2}/>

          {/* Top Overlay */}
          <div className="absolute inset-x-0 top-0 flex items-center gap-2 bg-linear-to-b from-black/70 to-transparent p-3">
            <Badge className="rounded bg-destructive px-1.5 py-0 text-[10px] font-bold text-destructive-foreground">
              LIVE
            </Badge>
            <span className="font-mono text-[11px] tracking-wide text-white">
              {feed.id}
            </span>
          </div>

          {/* Bottom Overlay */}
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-linear-to-t from-black/80 to-transparent p-3">
            <div>
              <p className="text-sm leading-tight font-semibold text-white">
                {feed.name}
              </p>
              {feed.inference && (
                <p className="text-xs text-slate-300">{feed.inference}</p>
              )}
            </div>
            <span className="font-mono text-xs font-semibold text-success">
              {feed.confidence}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
