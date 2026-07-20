export type Feed = {
  id: string;
  name: string;
  inference?: string;
  confidence: string;
  src: string;
  type: "mjpeg" | "static" | "image";
  refresh?: number;
}

export const feeds: Feed[] = [
  {
    id: "CAM-01: LOBBY",
    name: "Main Lobby Entrance",
    inference: "Unidentified package",
    confidence: "91%",
    src: "https://cctvn5.freeway.gov.tw/abs2mjpg/bmjpg?camera=91a1ea20-7368-48d3-ada2-d8b0adba9b65&_t=1784547339475",
    type: "mjpeg"
  },
  {
    id: "CAM-02: SERVER_A",
    name: "Server Room Aisle 4",
    inference: "normal activity",
    confidence: "85%",
    src: "https://cdn-livecamera-pic.drivetraffic.jp/l/HN009.jpg?_t=1784552304147",
    type: "image"
  },
  {
    id: "CAM-03: CAFETERIA",
    name: "Cafeteria / Lounge",
    inference: "people eating and chatting",
    confidence: "90%",
    src: "/feeds/cafe.png",
    type: "mjpeg"
  },
  {
    id: "CAM-04: PARKING_B1",
    name: "Parking Deck B1",
    inference: "unknown vehicle just arrived",
    confidence: "95%",
    src: "/feeds/parking.png",
    type: "mjpeg"
  },
];