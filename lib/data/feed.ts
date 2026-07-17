export type Feed = {
  id: string;
  name: string;
  inference?: string;
  confidence: string;
  src: string;
}

export const feeds: Feed[] = [
  {
    id: "CAM-01: LOBBY",
    name: "Main Lobby Entrance",
    inference: "Unidentified package",
    confidence: "91%",
    src: "/feeds/lobby.png"
  },
  {
    id: "CAM-02: SERVER_A",
    name: "Server Room Aisle 4",
    inference: "normal activity",
    confidence: "85%",
    src: "/feeds/server.png"
  },
  {
    id: "CAM-03: CAFETERIA",
    name: "Cafeteria / Lounge",
    inference: "people eating and chatting",
    confidence: "90%",
    src: "/feeds/cafe.png"
  },
  {
    id: "CAM-04: PARKING_B1",
    name: "Parking Deck B1",
    inference: "unknown vehicle just arrived",
    confidence: "95%",
    src: "/feeds/parking.png"
  },
];