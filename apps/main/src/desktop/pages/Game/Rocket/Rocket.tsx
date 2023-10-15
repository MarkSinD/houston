import {memo} from "react";
import rocket from '@monorepo-example/resource/images/rocket-animated/rocket.png'
import {Box, styled} from "@mui/material";

export const Rocket = memo(() => {
  console.log('Left')
  return (
    <Containter>
      <Box sx={{}}>
        <Box alt={"Rocket"} component="img" src={rocket} sx={{ width: '100%', height: '30%' }}/>
      </Box>
    </Containter>
  )
})

Rocket.displayName = 'Rocket'

const Containter = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  backgroundColor: '#a00000',
}));