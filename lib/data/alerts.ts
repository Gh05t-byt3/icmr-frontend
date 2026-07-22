import { Feed, feeds } from "./feed";

export type Alert = {
  id: string;
  camera: string;
  message: string;
  severity: "high" | "medium" | "low"
  time: string;
};

export const alerts: Alert[] = [
  { id: "ALT-0031", camera: "CAM-01: LOBBY", message: feeds[0].inference || "unknown alert" , severity: "high", time: "2 min ago" },
  { id: "ALT-0030", camera: "CAM-04: PARKING_B1", message: feeds[1].inference || "unknown alert", severity: "medium", time: "26 min ago" },
  { id: "ALT-0029", camera: "CAM-02: SERVER_A", message: feeds[3].inference || "Camera feed interrupted briefly", severity: "low", time: "1 hr ago" },
]