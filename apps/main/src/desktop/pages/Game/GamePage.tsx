import { memo } from "react";
import { Box, styled } from "@mui/material";

import { GameSpace } from "./GameSpace";
import { RightMenu } from "./RightMenu";
import { TopWidget } from "./TopWidget";

export const GamePage = memo(() => {
  return (
    <GameWrappwer>
      <TopWidget />
      <RightMenu />
      <GameSpace />
    </GameWrappwer>
  );
});

GamePage.displayName = "GamePage";

const GameWrappwer = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "80% 20%",
  gridTemplateRows: "20% 80%",
  height: "100%",
  width: "100%"
}));