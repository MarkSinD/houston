import React, { type FC, memo } from 'react'

import classes from './TopCoefficients.module.scss'

import type { Bet } from '@monorepo-example/game/src/models/Bet'

const TopCoefficients: FC = memo(() => {
	const topList: Bet[] = [
		{ userName: 'Alrabi94', coefficient: 12_345, win: 234_567 },
		{ userName: 'Megan@', coefficient: 8666, win: 213_212 },
		{ userName: '1SS23', coefficient: 3220, win: 78_221 },
		{ userName: 'User2433', coefficient: 2902, win: 1_234_879 },
	]

	const rows = topList.map((bet, index) => (
		<tr key={index}>
			<td>{bet.userName}</td>
			<td>{bet.coefficient}</td>
			<td>{bet.win}</td>
		</tr>
	))

	return (
		<div className={classes.topCoefficientsContainer}>
			<span>top</span>
			<table>
				<tbody>
					<tr>
						<th>User</th>
						<th>Coeff</th>
						<th>Win</th>
					</tr>
					{rows}
				</tbody>
			</table>
		</div>
	)
})

TopCoefficients.displayName = 'TopCoefficients'

export default TopCoefficients
