import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../modules/reducers'

function configureStore(preloadedState) {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk))
}

export default configureStore
