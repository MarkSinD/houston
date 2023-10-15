import {memo} from "react";
import {Box} from "@mui/material";

export const Stub = memo(() => {
  return (
    <Box>
      <h1>Mobile version</h1>
      <h2>Stub</h2>
    </Box>
  )
})

Stub.displayName = 'Stub'