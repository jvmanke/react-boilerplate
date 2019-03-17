import React, { lazy } from 'react'
import { Route } from 'react-router-dom'

const App = lazy(() => import('./App'))

function AppRoute(props) {
  return <Route {...props}><App /></Route>
}

export default AppRoute
