import {memo} from "react";
import {Box, styled} from "@mui/material";

export const Counter = memo(() => {
  console.log('Counter')
  return (
    <Containter>
      Counter
    </Containter>
  )
})

Counter.displayName = 'Counter'

const Containter = styled(Box)(() => ({
  height: '100%',
  backgroundColor: '#ffff11'
}));