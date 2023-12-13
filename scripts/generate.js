import fs from 'fs'
import { preprocessCQWWData } from '../src/lib/preprocessing.js'
import { ENTITIES } from '@ham2k/lib-dxcc-data'

import { createRequire } from "node:module"
const require = createRequire(import.meta.url)
const CQZONES_FOR_STATES = require('../data/cqzones-for-states.json')
const CQZONES = require('../data/cqzones.json')
const WAE = require('../data/wae.json')



console.log('Generating CQWW json')

const cqww = preprocessCQWWData(ENTITIES)

fs.writeFileSync('src/data/cqwwByPrefix.json', JSON.stringify(cqww), 'utf8')
fs.writeFileSync('src/data/cqwwEntitiesByPrefix.js', `export const CQWW_ENTITIES_BY_PREFIX = ${JSON.stringify(cqww)}`, 'utf8')
fs.writeFileSync('src/data/cqww.json', JSON.stringify(Object.values(cqww)), 'utf8')
fs.writeFileSync('src/data/cqwwEntities.js', `export const CQWW_ENTITIES = ${JSON.stringify(Object.values(cqww))}`, 'utf8')

fs.writeFileSync('src/data/cqzones.js', `export const CQZONES = ${JSON.stringify(CQZONES)}`, 'utf8')
fs.writeFileSync('src/data/cqzonesForStates.js', `export const CQZONES_FOR_STATES = ${JSON.stringify(CQZONES)}`, 'utf8')
fs.writeFileSync('src/data/waeEntities.js', `export const WAE_ENTITIES = ${JSON.stringify(CQZONES)}`, 'utf8')

console.log('CQ WW Entity info written to `data`')
console.log('')
