import { memo } from "react";
import rocket from "@monorepo-example/resource/images/rocket-animated/rocket.png";
import { Box, styled } from "@mui/material";

export const Rocket = memo(() => {
  return (
    <Containter>
      <Box sx={{ height: "30%" }}>
        <Box alt={"Rocket"} component="img" src={rocket} sx={{ height: "100%", width: "100%" }} />
      </Box>
    </Containter>
  );
});

Rocket.displayName = "Rocket";

const Containter = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  backgroundColor: "#a00000"
}));