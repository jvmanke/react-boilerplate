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

function ${2}(props) {

}

export default ${2}
EOF

touch package.json
cat << EOF > package.json
{
  "main": "${2}.js"
}
EOF