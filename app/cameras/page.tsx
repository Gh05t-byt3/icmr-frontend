import { CameraGrid } from "@/components/camera-grid";
import { PageHeader } from "@/components/page-header";
import { feeds } from "@/lib/data/feed";

export default function CamerasPage() {
  return (
    <>
    <PageHeader 
    title="Cameras"
    description={`${feeds.length} total cameras online`}
    />
    <CameraGrid />
    </>
  )
}