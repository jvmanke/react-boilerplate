#!/bin/sh
cd "$(pwd)/${1}"

mkdir ${2}
cd ${2}

actionsFile="actions.js"
touch ${actionsFile}
cat << EOF > ${actionsFile}
import { defineAction } from 'redux-define'

export const GENERAL_ACTION = defineAction('GENERAL_ACTION')

export function action() {
  return {
    type: GENERAL_ACTION,
    payload: null,
  }
}
EOF

reducerFile="reducer.js"
touch ${reducerFile}
cat << EOF > ${reducerFile}
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

touch index.js
cat << EOF > index.js
import defaultExport, * as allExports from './reducer'

const toBeExported = {}

Object.keys(allExports)
  .filter(key => key !== 'default')
  .forEach(key => {
    toBeExported[key] = allExports[key]
  })

export const helpers = toBeExported

export default defaultExport
EOF
