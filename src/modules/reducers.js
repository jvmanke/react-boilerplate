import { combineReducers } from 'redux'

import generalReducer from './GeneralReducer'

const rootReducer = combineReducers({
  generalReducer,
})

export default rootReducer
