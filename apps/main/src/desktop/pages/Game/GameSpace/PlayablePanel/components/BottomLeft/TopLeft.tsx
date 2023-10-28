import { memo } from "react";
import { Box, styled } from "@mui/material";

export const TopLeft = memo(() => {
  return (
    <Containter>
      <Box sx={{ gridArea: "1 / 1 / 2 / 2", backgroundColor: '#817066' }}>
        3001
      </Box>
      <Box sx={{ gridArea: "1 / 2 / 2 / 3", backgroundColor: '#817066' }}>
        3001
      </Box>
      <Box sx={{ gridArea: "1 / 3 / 2 / 4", backgroundColor: '#817066' }}>
        3001
      </Box>
      <Box sx={{ gridArea: "1 / 4 / 3 / 5", backgroundColor: '#817066' }}>
        5001
      </Box>
      <Box sx={{ gridArea: "2 / 1 / 3 / 2", backgroundColor: '#817066' }}>
        13001
      </Box>
      <Box sx={{ gridArea: "2 / 2 / 3 / 3", backgroundColor: '#817066' }}>
        13001
      </Box>
      <Box sx={{ gridArea: "2 / 3 / 3 / 4", backgroundColor: '#817066' }}>
        13001
      </Box>
    </Containter>
  );
});

TopLeft.displayName = "TopLeft";

const Containter = styled(Box)(() => ({
  height: "100%",
  backgroundColor: "#00a343",
  gridArea: "1 / 2 / 4 / 4",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
}));