import { memo } from "react";
import { Box, styled } from "@mui/material";

import rocket from "./rocket.svg";

export const Rocket = memo(() => {
  return (
    <Containter>
      <RocketImage>
        <Box alt={"Rocket"} component="img" src={rocket} sx={{ display: "block", height: "100%", width: "100%", objectFit: "cover" }} />
      </RocketImage>
    </Containter>
  );
});

Rocket.displayName = "Rocket";

const Containter = styled(Box)(() => ({
  gridArea: "2 / 1 / 3 / 2",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  backgroundColor: "#ff9218"
}));

const RocketImage = styled(Box)(() => ({
  display: "flex",
  backgroundColor: "#9d9101",
  justifyContent: "center",
  alignItems: "center",
  height: "40%"
}));