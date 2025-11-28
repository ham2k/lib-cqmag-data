export interface CQZone {
  number: number
  cqName: string
  name: string
}

export interface CQWWEntity {
  entityPrefix: string
  source?: string
  dxccCode?: number
  dxccName?: string
  regionCode?: string
  continent?: string
  cqZone?: number
  prefixes?: string[]
  name?: string
  fullName?: string
  shortName?: string
  iota?: string
  iota2?: string
  flag?: string
  deleted?: boolean
  [key: string]: any
}
