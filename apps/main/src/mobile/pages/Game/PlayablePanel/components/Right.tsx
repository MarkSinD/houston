import {memo} from "react";
import {Box, styled} from "@mui/material";

export const Right = memo(() => {
  return (
    <Containter>
      Right
    </Containter>
  )
})

Right.displayName = 'Right'

const Containter = styled(Box)(() => ({
  height: '100%',
  backgroundColor: '#bba343',
  gridArea: '1 / 5 / 6 / 6',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));