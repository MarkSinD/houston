import {memo} from "react";
import {Box, styled} from "@mui/material";

export const Bets = memo(() => {
  return (
    <Containter>
      Bets
    </Containter>
  )
})

Bets.displayName = 'Bets'

const Containter = styled(Box)(() => ({
  height: '50%',
  backgroundColor: '#918151'
}));