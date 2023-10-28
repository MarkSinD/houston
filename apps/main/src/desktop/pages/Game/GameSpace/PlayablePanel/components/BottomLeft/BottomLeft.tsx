import {memo} from "react";
import {Box, styled} from "@mui/material";

export const BottomLeft = memo(() => {
  return (
    <Containter>
      <Box sx={{ gridArea: "1 / 1 / 2 / 4", backgroundColor: '#817066' }}>
        300
      </Box>
      <Box sx={{ gridArea: "1 / 4 / 2 / 5", backgroundColor: '#817066' }}>
        300
      </Box>
      <Box sx={{ gridArea: "2 / 1 / 3 / 4", backgroundColor: '#817066' }}>
        300
      </Box>
      <Box sx={{ gridArea: "2 / 4 / 3 / 5", backgroundColor: '#817066' }}>
        300
      </Box>
    </Containter>
  )
})

BottomLeft.displayName = 'BottomLeft'

const Containter = styled(Box)(() => ({
  backgroundColor: '#afa413',
  gridArea: '2 / 1 / 3 / 2',
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
}));