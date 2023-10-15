import {memo} from "react";
import {Box, styled} from "@mui/material";

export const Top = memo(() => {
  console.log('Top')
  return (
    <Containter>
      Top
    </Containter>
  )
})

Top.displayName = 'Top'

const Containter = styled(Box)(() => ({
  height: '100%',
  backgroundColor: '#00a343',
  gridArea: '1 / 2 / 3 / 5',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));