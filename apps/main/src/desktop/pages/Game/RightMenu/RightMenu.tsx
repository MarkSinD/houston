import { memo } from "react";
import { GameSettings } from "$atoms/GameSettings/GameSettings";
import { Box, styled } from "@mui/material";

import { Account, Menu, Title } from "./components";

export const RightMenu = memo(() => {
  return (
    <MenuContainer>
      <Title />
      <Account />
      <GameSettings />
      <Menu />
    </MenuContainer>
  );
});

RightMenu.displayName = "RightMenu";

const MenuContainer = styled(Box)(() => ({
  gridArea: "1 / 2 / 3 / 3",
  display: "flex",
  flexDirection: "column"
}));