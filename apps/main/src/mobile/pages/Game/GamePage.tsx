import { memo } from "react";
import { Box, styled } from "@mui/material";

import { Bets } from "./Bets";
import { GameSpace } from "./GameSpace";
import { Header } from "./Header";
import { RightMenu } from "./RightMenu";

export const GamePage = memo(() => {
  return (
    <GameWrappwer>
      <Header />
      <Bets />
      <GameSpace />
      <RightMenu />
    </GameWrappwer>
  );
});

GamePage.displayName = "GamePage";

const GameWrappwer = styled(Box)(() => ({
  display: "flex",
  height: "100%",
  flexDirection: 'column'
}));
