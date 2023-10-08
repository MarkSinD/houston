import React, { type FC } from 'react'
import betTileCursor from '@monorepo-example/resource/images/bet-roof-tiles/bet-roof-tile-cursor.png'
import betTileHigh from '@monorepo-example/resource/images/bet-roof-tiles/bet-roof-tile-high.png'
import betTileLow from '@monorepo-example/resource/images/bet-roof-tiles/bet-roof-tile-low.png'
import betTileMid from '@monorepo-example/resource/images/bet-roof-tiles/bet-roof-tile-mid.png'

import classes from './BetRoofTiles.module.scss'

export const BetRoofTiles: FC = () => {
	const lastCoefficients = [7.16, 2.7, 1.33, 45.7, 5.1, 6.55, 73.1, 8.6, 1.8, 7.8] // todo bet tiles loop
	const tiles = lastCoefficients.map((number, index) => (
		<div key={number}>
			<img
				key={index}
				alt={`bet ${number}`}
				src={number < 2 ? betTileLow : number > 10 ? betTileHigh : betTileMid}
			/>
			<span style={{ color: number < 2 ? '#08d3ff' : 'white' }}>{number}</span>
		</div>
	))

	return (
		<>
			<div className={classes.betRoofTilesContainer}>{tiles}</div>
			<img alt="" className={classes.betRoofTileCursor} src={betTileCursor} />
		</>
	)
}
