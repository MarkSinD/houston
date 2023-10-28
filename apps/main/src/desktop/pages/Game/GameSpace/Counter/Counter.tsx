import {memo} from "react";
import {Box, styled} from "@mui/material";

export const Counter = memo(() => {
  return (
    <Containter>
      Counter
    </Containter>
  )
})

Counter.displayName = 'Counter'

const Containter = styled(Box)(() => ({
  gridArea: "1 / 1 / 2 / 2",
  height: '100%',
  width: '100%',
  backgroundColor: '#ffff11'
}));