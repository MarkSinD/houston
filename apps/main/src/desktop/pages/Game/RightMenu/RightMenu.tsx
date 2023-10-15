import {memo} from "react";
import {GameSettings} from "$atoms/GameSettings/GameSettings";
import {Box, styled} from "@mui/material";

import {Account} from "$desktop/pages/Game/RightMenu/components/Account";
import {Title} from "$desktop/pages/Game/RightMenu/components/Title";
import {Menu} from "$desktop/pages/Game/RightMenu/components/Menu";

export const RightMenu = memo(() => {
  console.log('BetRoofTiles')
  return (
    <MenuContainer>
      <Title/>
      <Account/>
      <GameSettings/>
      <Menu/>
    </MenuContainer>
  )
})

RightMenu.displayName = 'RightMenu'

const MenuContainer = styled(Box)(() => ({
  gridArea: "1 / 5 / 6 / 6",
  display: 'flex',
  flexDirection: 'column'
}));