export type StatTone = "neutral" | "destructive" | "warning" | "success" | "info";

export type Stat = {
  label: string;
  value: string;
  icon: "camera" | "alert" | "incident" | "uptime";
  tone: StatTone;
  accent?: boolean;
}

export const stats: Stat[] = [
  { label: "Total Cameras", value: "5", icon: "camera", tone: "info", accent: true },
  { label: "Active Alerts", value: "3", icon: "alert", tone: "destructive", accent: true },
  { label: "Incidents Today", value: "1", icon: "incident", tone: "warning", accent: true },
  { label: "System Uptime", value: "99.9%", icon: "uptime", tone: "success", accent: true },

]