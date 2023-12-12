import fs from 'fs'
import path from 'path'
import { preprocessCQWWData } from '../src/lib/preprocessing.js'
import { ENTITIES } from '@ham2k/lib-dxcc-data'

console.log('Generating CQWW json')

const cqww = preprocessCQWWData(ENTITIES)

fs.writeFileSync('src/data/cqwwByPrefix.json', JSON.stringify(cqww), 'utf8')
fs.writeFileSync('src/data/cqww.json', JSON.stringify(Object.values(cqww)), 'utf8')

console.log('CQ WW Entities written to data/cqww.json and cqwwByPrefix.json')
console.log('')
