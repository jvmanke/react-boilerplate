#!/bin/sh
cd "$(pwd)/${1}"

mkdir ${2}
cd ${2}

cssFile="${2}.css"
touch ${cssFile}

jsFile="${2}.js"
touch ${jsFile}
cat << EOF > ${jsFile}
import React from 'react'

import './${cssFile}'

function ${2}() {
  return <>${2}</>
}

export default ${2}
EOF

touch index.js
cat << EOF > index.js
import defaultExport, * as allExports from './${2}'

const toBeExported = {}

Object.keys(allExports)
  .filter(key => key !== 'default')
  .forEach(key => {
    toBeExported[key] = allExports[key]
  })

export const helpers = toBeExported

export default defaultExport
EOF
