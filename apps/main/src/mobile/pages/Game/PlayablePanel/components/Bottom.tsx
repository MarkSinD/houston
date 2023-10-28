import {memo} from "react";
import {Box, styled} from "@mui/material";

export const Bottom = memo(() => {
  return (
    <Containter>
      Bottom
    </Containter>
  )
})

Bottom.displayName = 'Bottom'

const Containter = styled(Box)(() => ({
  height: '100%',
  backgroundColor: '#afa413',
  gridArea: '3 / 2 / 6 / 5',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));