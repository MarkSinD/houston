import React, { type FC } from 'react'
import settingCircle from '@monorepo-example/resource/images/settings-circle.png'

import classes from './GameSettings.module.scss'

export const GameSettings: FC = () => (
	<div className={classes.settingsContainer}>
		<img alt="Setting 1" src={settingCircle} />
		<img alt="Setting 2" src={settingCircle} />
		<img alt="Setting 3" src={settingCircle} />
	</div>
)
