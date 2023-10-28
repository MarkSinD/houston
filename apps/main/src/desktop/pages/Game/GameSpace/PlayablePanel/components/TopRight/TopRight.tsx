import { memo } from "react";
import { Box, styled } from "@mui/material";

export const TopRight = memo(() => {
  return (
    <Containter>
      <Box sx={{ gridArea: "1 / 1 / 2 / 2" }}>
        300
      </Box>
      <Box sx={{ gridArea: "1 / 2 / 2 / 3" }}>
        300
      </Box>
      <Box sx={{ gridArea: "1 / 3 / 2 / 4" }}>
        300
      </Box>
      <Box sx={{ gridArea: "1 / 4 / 3 / 5" }}>
        500
      </Box>
      <Box sx={{ gridArea: "2 / 1 / 3 / 2", backgroundColor: '#817066' }}>
        1300
      </Box>
      <Box sx={{ gridArea: "2 / 2 / 3 / 3", backgroundColor: '#817066' }}>
        1300
      </Box>
      <Box sx={{ gridArea: "2 / 3 / 3 / 4", backgroundColor: '#817066' }}>
        1300
      </Box>
    </Containter>
  );
});

TopRight.displayName = "TopRight";

const Containter = styled(Box)(() => ({
  gridArea: "1 / 2 / 2 / 3",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
}));