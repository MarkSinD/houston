import {memo} from "react";
import {Box, styled} from "@mui/material";

export const Account = memo(() => {
  console.log('Account')
  return (
    <Containter>
      Account
    </Containter>
  )
})

Account.displayName = 'Account'

const Containter = styled(Box)(() => ({
  height: '20%',
  backgroundColor: '#e59e1f'
}));