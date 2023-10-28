import {memo} from 'react'
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'

import {routes} from '$desktop/routes'

export const App = memo(() => {
  return (
    <Router>
      <Routes>
        {routes.map(route => (
          <Route key={route.path} element={<route.component/>} path={route.path}/>
        ))}
        <Route element={<Navigate to="/" replace/>} path="*"/>
      </Routes>
    </Router>)
})

App.displayName = 'App'
