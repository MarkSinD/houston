import { GamePage } from "mobile/pages/Game/GamePage";
import { LobbyPage } from "mobile/pages/Lobby/LobbyPage";

export const routes = [
  { path: "/", component: LobbyPage },
  { path: "/game", component: GamePage }
];
