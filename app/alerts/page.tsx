import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, alerts } from "@/lib/data/alerts"
import { cn } from "@/lib/utils"

const severityClass: Record<Alert["severity"], string> = {
  high: "bg-destructive text-destructive-foreground",
  medium: "bg-warning text-warning-foreground",
  low: "bg-muted text-muted-foreground",
}

export default function AlertsPage() {
  return (
    <>
      <PageHeader
        title="Alerts"
        description="ACtive and recent alerts across all cameras"
      />

      <div className="space-y-3">
        {alerts.map((alert) => (
          <Card key={alert.id}>
            <CardContent className="flex items-center gap-4 p-4">
              <Badge className={cn("uppercase", severityClass[alert.severity])}>
                {alert.severity}
              </Badge>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  {alert.message}
                </p>
                <p className="text-xs text-muted-foreground">
                  {alert.camera} . {alert.id}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}
