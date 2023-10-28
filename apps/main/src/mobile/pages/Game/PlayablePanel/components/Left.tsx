import {memo} from "react";
import {Box, styled} from "@mui/material";

export const Left = memo(() => {
  return (
    <Containter>
      Left
    </Containter>
  )
})

Left.displayName = 'Left'

const Containter = styled(Box)(() => ({
  height: '100%',
  backgroundColor: '#bfa343',
  gridArea: '1 / 1 / 6 / 2',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));