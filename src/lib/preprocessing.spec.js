import { preprocessCQWWData } from './preprocessing'
import { ENTITIES } from '@ham2k/lib-dxcc-data'

/* eslint dot-notation: 0 */

describe('preprocessCQWWData', () => {
  it('should work', () => {
    const cqww = preprocessCQWWData(ENTITIES)

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
