import { preprocessCQWWData } from './preprocessing.js'
import { DXCC_BY_PREFIX, DXCC_BY_CODE } from '@ham2k/lib-dxcc-data'

/* eslint dot-notation: 0 */

describe('preprocessCQWWData', () => {
  it('should work', () => {
    const cqww = preprocessCQWWData(DXCC_BY_PREFIX, DXCC_BY_CODE)

    expect(Object.values(cqww).length).toEqual(346)

    expect(cqww['VE'].dxccName).toEqual('Canada')
    expect(cqww['K'].dxccName).toEqual('United States of America')

    expect(cqww['*IG9'].dxccName).toEqual('Italy')
    expect(cqww['*IG9'].name).toEqual('African Italy')
    expect(cqww['*IG9'].continent).toEqual('AF')

    expect(cqww['*JW/b'].dxccName).toEqual('Svalbard')
    expect(cqww['*JW/b'].name).toEqual('Bear I.')

    expect(cqww['*TA1'].dxccName).toEqual('Turkey')
    expect(cqww['*TA1'].name).toEqual('European Turkey')
    expect(cqww['*TA1'].continent).toEqual('EU')
    expect(cqww['TA'].continent).toEqual('AS')

    expect(cqww['*4U1V'].dxccName).toEqual('Austria')
    expect(cqww['*4U1V'].name).toEqual('UN Vienna Int. Center')
    expect(cqww['*4U1V'].flag).toEqual('🇺🇳')

    expect(cqww['*GM/s'].dxccName).toEqual('Scotland')
    expect(cqww['*GM/s'].name).toEqual('Shetland Is.')
  })
})

