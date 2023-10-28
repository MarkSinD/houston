import { memo } from "react";
import { Box, styled } from "@mui/material";

import { Counter } from "./Counter";
import { PlayablePanel } from "./PlayablePanel";
import { Rocket } from "./Rocket";

export const GameSpace = memo(() => (
    <MainContainer>
      <Counter />
      <Rocket />
      <PlayablePanel />
    </MainContainer>
));

GameSpace.displayName = "GameSpace";

const MainContainer = styled(Box)(() => ({
  gridArea: "2 / 1 / 3 / 2",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr 50vh 25vh",
  width: "100%",
  height: "100%"
}));
