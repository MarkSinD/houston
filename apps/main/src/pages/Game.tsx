import React, { useEffect, useState } from 'react'
import { ApplicationBackground } from '$atoms'
import { BetRoofTiles } from '$atoms/BetRoofTiles/BetRoofTiles'
import GameContainer from '$atoms/GameContainer/GameContainer'
import { GameSettings } from '$atoms/GameSettings/GameSettings'
import LastBets from '$atoms/LastBets/LastBets'
import TopCoefficients from '$atoms/TopCoefficients/TopCoefficients'

export const Game = () => {
	const [backgroundMovingTime, setBackgroundMovingTime] = useState(0)

	useEffect(() => {
		const root = document.documentElement
		const bgHeight = 6808
		const bgWidth = 1915
		const heightProportioned = (root?.offsetWidth * bgHeight) / bgWidth
		const containerHeight = root?.clientHeight === 0 ? 0 : root?.clientHeight
		root?.style.setProperty('--slidedown-bg-height', `${heightProportioned + containerHeight}px`)
	}, [])

	return (
		<ApplicationBackground backgroundMovingTime={backgroundMovingTime}>
			<div className="game-wrapper">
				<div className="game-roof-row">
					<div className="game-roof-tiles">
						<BetRoofTiles />
					</div>
					<div className="game-settings">
						<GameSettings />
					</div>
				</div>

				<div className="game-middle-row">
					<div className="game-left-column">
						<TopCoefficients />
						<LastBets />
					</div>
					<div className="game-playable-container-wrapper">
						<GameContainer
							handleBackgroundAnimation={(movingTime: number) => {
								setBackgroundMovingTime(movingTime || 0)
							}}
						/>
					</div>
					<div className="game-right-column" />
				</div>
			</div>
		</ApplicationBackground>
	)
}
