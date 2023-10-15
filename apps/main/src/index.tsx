import  { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import {AppContainer} from '$AppContainer'
import './index.css'

ReactDOM.render(
	<StrictMode>
		<AppContainer />
	</StrictMode>,
	document.querySelector('#root') as HTMLElement
)
