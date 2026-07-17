import { AppSidebar } from "@/components/app-sidebar"
import { CameraGrid } from "@/components/camera-grid"
import { StatCards } from "@/components/stat-cards"

export default function DashboardPage() {
  return (
    <>
      <AppSidebar />
      <main className="flex-1 overflow-y-auto p-6">
        <StatCards />
        <CameraGrid />
      </main>
    </>
  )
}
