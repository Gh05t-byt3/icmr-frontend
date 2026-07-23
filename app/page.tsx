import { CameraGrid } from "@/components/camera-grid"
import { StatCards } from "@/components/stat-cards"

export default function DashboardPage() {
  return (
    <div className="h-full overflow-y-auto p-6">
      <StatCards />
      <CameraGrid />
    </div>
  )
}
