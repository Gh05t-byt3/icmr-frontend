import { stats, type StatTone, type Stat } from "@/lib/data/stats"
import { Asterisk, History, Video, Zap } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { cn } from "@/lib/utils"

const icons: Record<Stat["icon"], React.ElementType> = {
  camera: Video,
  alert: Asterisk,
  incident: History,
  uptime: Zap,
}

const tones: Record<StatTone, { icon: string; value: string; border: string }> =
  {
    neutral: {
      icon: "bg-muted text-muted-foreground",
      value: "text-foreground",
      border: "border-l-border",
    },
    destructive: {
      icon: "bg-info-muted text-info",
      value: "text-foreground",
      border: "border-l-info",
    },
    warning: {
      icon: "text-destructive",
      value: "text-destructive",
      border: "border-l-destructive",
    },
    success: {
      icon: "bg-warning-muted text-warning",
      value: "text-warning",
      border: "border-l-warning",
    },
    info: {
      icon: "text-success",
      value: "text-success",
      border: "border-l-success",
    },
  }

export function StatCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = icons[stat.icon]
        const tone = tones[stat.tone]
        return (
          <Card
            key={stat.label}
            className={cn(
              "shadow-sm",
              stat.accent && cn("border-l-4", tone.border)
            )}
          >
            <CardContent className="flex items-center justify-between p-5">
              <div>
                <p className="text-xs font-medium text-muted-foreground">
                  {stat.label}
                </p>
                <p className={cn("mt-1 text-2xl font-bold", tone.value)}>
                  {stat.value}
                </p>
              </div>
              <div className={cn(
                "flex size-10 items-center justify-center rounded-lg",
                tone.icon
              )}>
                <Icon className="size-5" />
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
