import {memo} from "react";
import {Box, styled} from "@mui/material";

export const Menu = memo(() => {
  console.log('Account')
  return (
    <Containter>
      Menu
    </Containter>
  )
})

Menu.displayName = 'Menu'

const Containter = styled(Box)(() => ({
  height: '100%',
  backgroundColor: '#ffa343'
}));