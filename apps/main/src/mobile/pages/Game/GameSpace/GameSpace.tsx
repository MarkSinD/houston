import { memo } from "react";
import { Box, styled } from "@mui/material";

import { PlayablePanel } from "../PlayablePanel";
import { Rocket } from "../Rocket";

export const GameSpace = memo(() => (
  <MainContainer>
    <Rocket />
    <PlayablePanel />
  </MainContainer>
));

GameSpace.displayName = "GameSpace";

const MainContainer = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  height: "100%",
  gridArea: "2 / 2 / 6 / 5",
  flexDirection: "column",
  alignItems: "center"
}));
