import defaultExport, * as allExports from './GeneralComponent'

const toBeExported = {}

Object.keys(allExports)
  .filter(key => key !== 'default')
  .forEach(key => {
    toBeExported[key] = allExports[key]
  })

export const helpers = toBeExported

export default defaultExport
