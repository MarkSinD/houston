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
  height: '50%',
  backgroundColor: '#918151'
}));