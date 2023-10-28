import {memo} from 'react'
import {Box, styled} from "@mui/material";

export const Header = memo(() => (
  <BetContainer>
    <h1>BetRoofTiles</h1>
  </BetContainer>
))

Header.displayName = "BetRoofTiles"

const BetContainer = styled(Box)(() => ({
  gridArea: "1 / 1 / 2 / 5",
  backgroundColor: 'green',
  height: "100%"
}));
