import { memo } from "react";
import { Box, styled } from "@mui/material";

import BetImg from "./bet.svg";

export const LeftButton = memo(() => {
  return (
    <Containter>
      <Box alt="bet" component="img" src={BetImg} sx={{ height: "100%", objectFit: "cover" }} />
    </Containter>
  );
});

LeftButton.displayName = "LeftButton";

const Containter = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#9aa101",
  height: "100%",
  width: "100%"
}));

