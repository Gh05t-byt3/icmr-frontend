export type FocusArea = {
  id: string;
  label: string;
  type: "person" | "vehicle" | "object";
  state: string;
  confidence: number;
  tone: "info" | "success" | "destructive" | "warning" | "muted";
  box?: { x: number; y: number; w: number; h: number }
}


export type TimelineEvent = {
  id: string;
  time: string;
  tag: string;
  description: string;
}


export type Feed = {
  id: string;
  slug: string;
  name: string;
  inference?: string;
  confidence: string;
  src: string;
  type: "mjpeg" | "static" | "image";
  refresh?: number;
  location?: string;
  sceneNarration?: string;
  focusAreas?: FocusArea[];
  timeline?: TimelineEvent[];
}

export const feeds: Feed[] = [
  {
    id: "CAM-01: LOBBY",
    slug: "cam-01",
    name: "Main Lobby Entrance",
    inference: "Unidentified package",
    confidence: "91%",
    src: "https://cctvn5.freeway.gov.tw/abs2mjpg/bmjpg?camera=91a1ea20-7368-48d3-ada2-d8b0adba9b65&_t=1784547339475",
    type: "mjpeg",
    location: "Building A · North Gate",
    sceneNarration: "Subject (ID:8821) is moving east across the shipping bay at 1.2m/s. Subject stopped briefly near vehicle V-102 and deposited an unidentified black container (ID:O-44). Action violates protocol 12-B (Restricted Loitering).",
    focusAreas: [
      { id: "fa1", label: "Person 8821", type: "person", state: "Moving // Restricted", confidence: 98, tone: "info", box: { x: 38, y: 22, w: 9, h: 34 } },
      { id: "fa2", label: "Vehicle V-102", type: "vehicle", state: "Stationary // Dock B", confidence: 94, tone: "success", box: { x: 55, y: 46, w: 20, h: 20 } },
      { id: "fa3", label: "Object O-44", type: "object", state: "Suspicious // Static", confidence: 87, tone: "warning", box: { x: 40, y: 40, w: 7, h: 11 } },
    ],
    timeline: [
      { id: "t1", time: "23:40:15", tag: "PERSON", description: "Entry detected: North Gate 2" },
      { id: "t2", time: "23:41:02", tag: "OBJECT", description: "Container deposited near V-102" },
      { id: "t3", time: "23:41:20", tag: "ALERT", description: "Protocol 12-B violation raised" },
    ],
  },
  {
    id: "CAM-02: SERVER_A",
    slug: "cam-04",
    name: "Server Room Aisle 4",
    inference: "normal activity",
    confidence: "85%",
    src: "https://cdn-livecamera-pic.drivetraffic.jp/l/HN009.jpg?_t=1784552304147",
    type: "image",
    refresh: 5000,
    location: "Building B · Floor 2",
    sceneNarration: "No anomalous activity detected. Ambient conditions nominal.",
    focusAreas: [],
    timeline: [],
  },
  {
    id: "CAM-03: CAFETERIA",
    slug: "cam-03",
    name: "Cafeteria / Lounge",
    inference: "people eating and chatting",
    confidence: "90%",
    src: "/feeds/cafe.png",
    type: "mjpeg",
    location: "Building A · Floor 1"
  },
  {
    id: "CAM-04: PARKING_B1",
    slug: "cam-04",
    name: "Parking Deck B1",
    inference: "unknown vehicle just arrived",
    confidence: "95%",
    location: "Sublevel B1",
    src: "/feeds/parking.png",
    type: "mjpeg"
  },
];

export async function getCamera(slug: string): Promise<Feed | undefined> {
  return feeds.find((f) => f.slug === slug)
}