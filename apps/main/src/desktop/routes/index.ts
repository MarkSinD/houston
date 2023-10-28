import {GamePage} from "$desktop/pages/Game/GamePage";
import {LobbyPage} from "$desktop/pages/Lobby/LobbyPage";

export const routes = [
  {path: '/', component: LobbyPage},
  {path: '/game', component: GamePage},
]
