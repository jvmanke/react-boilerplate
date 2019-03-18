#!/bin/sh
cd "$(pwd)/${1}"

[ -d "${2}" ] && { echo "Module already exists!"; exit 1; }

mkdir ${2}
cd ${2}

touch actions.js
cat << EOF > actions.js
import { defineAction } from 'redux-define'

export const GENERAL_ACTION = defineAction('GENERAL_ACTION')

export function action() {
  return {
    type: GENERAL_ACTION,
    payload: null,
  }
}
EOF

touch reducer.js
cat << EOF > reducer.js
import { GENERAL_ACTION } from './actions'

const initalState = {}

const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GENERAL_ACTION:
      return { ...state, payload }
    default:
      return state
  }
}

export default reducer
EOF

touch selectors.js
cat << EOF > selectors.js
import { createSelector } from 'reselect'

const getFirst = state => state[0]
const getLast = state => state[-1]

export const getFirsAndLast = createSelector(
  getFirst,
  getLast,
  (first, last) => ({ first, last })
)
EOF

touch index.js
cat << EOF > index.js
export { default } from './reducer'
export * from './actions'
export * from './selectors'
EOF
