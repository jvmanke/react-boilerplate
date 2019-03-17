import React from 'react'
import { Route } from 'react-router-dom'

import lazyImport from '../../utils/lazyImport'

const App = lazyImport('./App')

function AppRoute(props) {
  return <Route {...props}><App /></Route>
}

export default AppRoute
