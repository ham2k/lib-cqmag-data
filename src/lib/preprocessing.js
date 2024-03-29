// const { parse } = require("csv/dist/cjs/sync.cjs") // Use this line when running tests
import { CTYData } from '@ham2k/lib-country-files'

import { createRequire } from "node:module"
const require = createRequire(import.meta.url)
const WAE = require('../../data/wae.json')

export function preprocessCQWWData (dxcc) {
  const cqww = {}

  Object.keys(dxcc).forEach((code) => {
    if (!dxcc[code].deleted) {
      if (cqww[dxcc[code].entityPrefix]) { console.log('Duplicate prefix', dxcc[code].entityPrefix, code, cqww[dxcc[code].entityPrefix]) }

      cqww[dxcc[code].entityPrefix] = dxcc[code]
    }
  })

  Object.keys(WAE).forEach((prefix) => {
    let entity = WAE[prefix]
    if (dxcc[entity.dxccCode]) entity = { ...entity, ...dxcc[entity.dxccCode] }

    if (CTYData.entities[entity.entityPrefix]) entity = { ...entity, ...CTYData.entities[entity.entityPrefix] }

    entity = { ...entity, ...WAE[prefix] }

    cqww[entity.entityPrefix] = entity
  })

  return cqww
}

