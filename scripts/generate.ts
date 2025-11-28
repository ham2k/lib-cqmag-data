import fs from 'fs'
import { preprocessCQWWData } from '../src/lib/preprocessing.js'
import { DXCC_BY_PREFIX, DXCC_BY_CODE } from '@ham2k/lib-dxcc-data'

import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const CQZONES_FOR_STATES = require('../data/cqzones-for-states.json')
const CQZONES = require('../data/cqzones.json')
const WAE = require('../data/wae.json')

console.log('Generating CQWW json')

const cqww = preprocessCQWWData(DXCC_BY_PREFIX, DXCC_BY_CODE)

fs.writeFileSync('src/data/cqwwByPrefix.json', JSON.stringify(cqww), 'utf8')
fs.writeFileSync('src/data/cqwwEntitiesByPrefix.ts', `import { CQWWEntity } from '../types.js'\n\nexport const CQWW_ENTITIES_BY_PREFIX: Record<string, CQWWEntity> = ${JSON.stringify(cqww)}`, 'utf8')
fs.writeFileSync('src/data/cqww.json', JSON.stringify(Object.values(cqww)), 'utf8')
fs.writeFileSync('src/data/cqwwEntities.ts', `import { CQWWEntity } from '../types.js'\n\nexport const CQWW_ENTITIES: CQWWEntity[] = ${JSON.stringify(Object.values(cqww))}`, 'utf8')
fs.writeFileSync('src/data/waeEntities.ts', `import { CQWWEntity } from '../types.js'\n\nexport const WAE_ENTITIES: Record<string, CQWWEntity> = ${JSON.stringify(WAE)}`, 'utf8')

fs.writeFileSync('src/data/cqzones.ts', `import { CQZone } from '../types.js'\n\nexport const CQZONES: Record<string, CQZone> = ${JSON.stringify(CQZONES)}`, 'utf8')
fs.writeFileSync('src/data/cqzonesForStates.ts', `import { CQZone } from '../types.js'\n\nexport const CQZONES_FOR_STATES: Record<string, Record<string, number>> = ${JSON.stringify(CQZONES_FOR_STATES)}`, 'utf8')

console.log('CQ WW Entity info written to `data`')
console.log('')

