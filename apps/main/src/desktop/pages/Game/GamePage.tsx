import {memo, useEffect, useState} from 'react'
import {TopMenu} from '$atoms/BetRoofTiles/TopMenu'
import {Game} from "$atoms/Game/Game";
import {Box, styled} from "@mui/material";

import {Bets} from "$desktop/pages/Game/Bets";
import {RightMenu} from './RightMenu/RightMenu';
import {Top} from "$desktop/pages/Game/Top";

export const GamePage = memo(() => {
  const [backgroundMovingTime, setBackgroundMovingTime] = useState(0)

  useEffect(() => {
    const root = document.documentElement
    const bgHeight = 6808
    const bgWidth = 1915
    // eslint-disable-next-line no-unsafe-optional-chaining -- нужно поправить
    const heightProportioned = (root?.offsetWidth * bgHeight) / bgWidth
    const containerHeight = root?.clientHeight === 0 ? 0 : root?.clientHeight
    root?.style.setProperty('--slidedown-bg-height', `${heightProportioned + containerHeight}px`)
  }, [])

  return (
    <GameWrappwer>
      <TopMenu/>
      <RightMenu/>
      <Game/>
      <LeftMenu>
        <Top/>
        <Bets/>
      </LeftMenu>
    </GameWrappwer>
  )
})

GamePage.displayName = 'GamePage'

const GameWrappwer = styled(Box)(() => ({
  display: "grid",
  height: '100%',
  gridTemplateColumns: "repeat(5, 1fr)",
  gridTemplateRows: "repeat(5, 1fr)",
  zIndex: 2
}));

const LeftMenu = styled(Box)(() => ({
  gridArea: "2 / 1 / 6 / 2",
  display: 'flex',
  backgroundColor: '#AAAAAA',
  flexDirection: 'column',
  gap: 2
}));