import {memo} from 'react'
import settingCircle from '@monorepo-example/resource/images/settings-circle.png'
import {Box, styled} from "@mui/material";

export const GameSettings = memo(() => (
  <SettingsContainer>
    <Box alt="Setting 1" component={"img"} src={settingCircle} sx={{width: "50px", height: '50px'}}/>
    <Box alt="Setting 2" component={"img"} src={settingCircle} sx={{width: "50px", height: '50px'}}/>
    <Box alt="Setting 3" component={"img"} src={settingCircle} sx={{width: "50px", height: '50px'}}/>
  </SettingsContainer>
))

GameSettings.displayName = 'GameSettings'

const SettingsContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));


