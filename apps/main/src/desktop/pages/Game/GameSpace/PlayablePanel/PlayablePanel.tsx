import { memo } from "react";
import { Box, styled } from "@mui/material";

import BetsContainerImg from "./betsContainerImg.svg";
import { BottomLeft, BottomRight, LeftButton, RightButton, TopLeft, TopRight } from "./components";

export const PlayablePanel = memo(() => {
  return (
    <Center>
      <PanelContainer>
        <LeftButton />
        <BetsContainer>
          <TopLeft />
          <TopRight />
          <BottomLeft />
          <BottomRight />
          <Background src={BetsContainerImg} />
        </BetsContainer>
        <RightButton />
      </PanelContainer>
    </Center>
  );
});

PlayablePanel.displayName = "PlayablePanel";

const PanelContainer = styled(Box)(() => ({
  gridArea: "3 / 1 / 4 / 2",
  display: "grid",
  gridTemplateColumns: "20% 60% 20%",
  gridTemplateRows: "25vh",
  height: "100%",
  width: "100%",
  backgroundColor: "#ffcf48"
}));

const BetsContainer = styled(Box)(() => ({
  gridArea: "1 / 2 / 3 / 3",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  maxHeight: "100%",
  maxWidth: "100%",
  position: "relative"
}));

const Center = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%"

}));

const Background = styled("img")(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "contain",
  zIndex: 2
}));