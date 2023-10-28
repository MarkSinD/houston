import {memo} from "react";
import {Box, styled} from "@mui/material";

import {Bottom, Left, Top, Right} from "./components";

export const PlayablePanel = memo(() => {
  return (
    <Containter>
      <Left/>
      <Top/>
      <Bottom/>
      <Right/>
    </Containter>
  )
})

PlayablePanel.displayName = 'PlayablePanel'

const Containter = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridTemplateRows: "repeat(5, 1fr)",
  gridColumnGap: "0px",
  gridRowGap: "0px",
  height: '100%',
  width: '100%',
  backgroundColor: '#ffcf48'
}));