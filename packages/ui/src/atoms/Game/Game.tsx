import {memo} from 'react'
import {Counter} from "@monorepo-example/main/src/desktop/pages/Game/Counter";
import {PlayablePanel} from "@monorepo-example/main/src/desktop/pages/Game/PlayablePanel/PlayablePanel";
import {Rocket} from "@monorepo-example/main/src/desktop/pages/Game/Rocket/Rocket";
import {Box, styled} from "@mui/material";


export interface GameContainerProps {
  handleBackgroundAnimation?: (backgroundMovingTime: number) => void
}

export const Game = memo(() => {

  return (
    <MainContainer>
      <GameContainer>
        <Rocket/>
        <Counter/>
      </GameContainer>
      <PlayablePanel/>
    </MainContainer>
  )
})

Game.displayName = 'Game'

const MainContainer = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  height: "100%",
  gridArea: "2 / 2 / 6 / 5",
  flexDirection: "column",
  alignItems: "center"
}))

const GameContainer = styled(Box)(() => ({
  height: "100%",
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: "right"
}))
