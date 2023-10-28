import {memo} from "react";
import {Box, styled} from "@mui/material";

export const Title = memo(() => {
  return (
    <Containter>
      HEY HOUSTON
    </Containter>
  )
})

Title.displayName = 'BetRoofTiles'

const Containter = styled(Box)(() => ({
  height: '20%',
  backgroundColor: '#dad871'
}));