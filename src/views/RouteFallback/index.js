import React from 'react'
import { Route } from 'react-router-dom'

import RouteFallback from './RouteFallback'

function RouteFallbackRoute(props) {
  return <Route {...props}><RouteFallback /></Route>
}

export default RouteFallbackRoute
