import { memo } from "react";
import { Box, styled } from "@mui/material";

import border from "./border.svg";

export const TopWidget = memo(() => {
  const bets: number[] = [1.72, 8.72, 1.72, 101.72, 1.72, 8.72, 1.72, 8.72, 1.72];

  return (
    <TopMenuContainer>
      <BetContainer>
        {
          bets.map((bet) => (
            <Box key={bet} sx={{
              backgroundColor: "yellow", aspectRatio: "14/6", maxHeight: "50%", width: "100%", display: "flex", justifyContent: "center",
              alignItems: "center"
            }}>
              <Box alt={`border${bet}`} component="img" src={border} sx={{ width: "100%", height: "100%" }} />
            </Box>
          ))
        }
      </BetContainer>
    </TopMenuContainer>
  );
});

TopWidget.displayName = "BetRoofTiles";

const TopMenuContainer = styled(Box)(() => ({
  gridArea: "1 / 1 / 2 / 2",
  backgroundColor: "#a9203e",
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}));

const BetContainer = styled(Box)(() => ({
  display: "flex",
  backgroundColor: "#000052",
  justifyContent: "center",
  alignItems: "center",
  gap: 5,
  height: "100%",
  width: "fit-content"
}));
