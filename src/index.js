import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import './styles/bootstrap'
import configureStore from './store/configure-store'
import routes from './routes'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {routes()}
    </Router>
  </Provider>,
  document.getElementById('root')
)
