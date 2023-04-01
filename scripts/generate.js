const fs = require('fs')
const path = require('path')
const { preprocessCQWWData } = require('../src/lib/preprocessing')
const { ENTITIES } = require('@ham2k/lib-dxcc-data')

console.log('Generating CQWW json')

const cqww = preprocessCQWWData(ENTITIES)

fs.writeFileSync(path.join(__dirname, '../src/data/cqwwByPrefix.json'), JSON.stringify(cqww), 'utf8')
fs.writeFileSync(path.join(__dirname, '../src/data/cqww.json'), JSON.stringify(Object.values(cqww)), 'utf8')

console.log('CQ WW Entities written to data/cqww.json and cqwwByPrefix.json')
console.log('')
