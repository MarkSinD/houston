import React from 'react'
import { Provider } from 'react-redux'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import './App.css'
import { routes } from '$routes'
import { store } from '$store/config/store'
import './global.css'

const App = (): JSX.Element => (
	<Provider store={store}>
		<Router>
			<Routes>
				{routes.map(route => (
					<Route key={route.path} element={<route.component />} path={route.path} />
				))}
				<Route element={<Navigate to="/" replace />} path="*" />
			</Routes>
		</Router>
	</Provider>
)
export default App
