import { BIGCTY } from '@ham2k/lib-country-files'
import { CQWWEntity } from '../types.js'
import WAEData from '../../data/wae.json'

const WAE = WAEData as Record<string, CQWWEntity>

function normalizeEntity(entity: CQWWEntity): CQWWEntity {
  // Normalize continents to continent for backward compatibility
  if (entity.continents && !entity.continent) {
    entity.continent = Array.isArray(entity.continents) ? entity.continents[entity.continents.length - 1] : entity.continents
  }
  return entity
}

export function preprocessCQWWData(dxccByPrefix: Record<string, CQWWEntity>, dxccByCode?: Record<number, CQWWEntity>): Record<string, CQWWEntity> {
  const cqww: Record<string, CQWWEntity> = {}

  Object.keys(dxccByPrefix).forEach((code) => {
    if (!dxccByPrefix[code].deleted) {
      if (cqww[dxccByPrefix[code].entityPrefix]) { console.log('Duplicate prefix', dxccByPrefix[code].entityPrefix, code, cqww[dxccByPrefix[code].entityPrefix]) }

      cqww[dxccByPrefix[code].entityPrefix] = normalizeEntity(dxccByPrefix[code])
    }
  })

  Object.keys(WAE).forEach((prefix) => {
    let entity: CQWWEntity = WAE[prefix]

    // Lookup by dxccCode if available
    if (entity.dxccCode && dxccByCode && dxccByCode[entity.dxccCode]) {
      entity = { ...entity, ...dxccByCode[entity.dxccCode] }
    }

    if (BIGCTY.entities[entity.entityPrefix]) entity = { ...entity, ...BIGCTY.entities[entity.entityPrefix] }

    entity = { ...entity, ...WAE[prefix] }

    cqww[entity.entityPrefix] = normalizeEntity(entity)
  })

  return cqww
}

