import {memo} from "react";
import {Box, styled} from "@mui/material";

export const Bets = memo(() => {
  console.log('Bets')
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