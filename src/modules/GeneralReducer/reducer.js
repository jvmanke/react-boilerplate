import { GENERAL_ACTION } from './actions'

const initalState = []

const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GENERAL_ACTION:
      return [...state, ...payload]
    default:
      return state
  }
}

export default reducer
