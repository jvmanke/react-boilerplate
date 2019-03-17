import React, { Suspense } from 'react'

import RouteFallbackRoute from './views/RouteFallback'
import AppRoute from './views/App'

function routes() {
  return (
    <Suspense fallback={<RouteFallbackRoute />}>
      <AppRoute path='/' />
    </Suspense>
  )
}

export default routes
