#!/bin/sh
cd "$(pwd)/${1}"

[ -d "${2}" ] && { echo "View already exists!"; exit 1; }

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
import React, { lazy } from 'react'
import { Route } from 'react-router-dom'

const ${2} = lazy(() => import('./${2}'))

function ${2}Route(props) {
  return <Route {...props}><${2} /></Route>
}

export default ${2}Route
EOF

testFile="${2}.test.js"
touch ${testFile}
cat << EOF > ${testFile}
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { shallow } from 'enzyme'

import ${2} from './${2}'

describe('${2}', () => {
  it('Should show boilerplate text', () => {
    const component = shallow(<${2} />)
    expect(component.text()).toBe('${2}')
  })
})
EOF
