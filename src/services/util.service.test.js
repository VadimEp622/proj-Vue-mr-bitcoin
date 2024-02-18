import { expect, test, describe } from 'vitest'
import { utilService } from './util.service'

describe('turns positive number into pad-num string', () => {
    test('positive number smaller than 9 has 0 before it', () => {
        expect(utilService.padNum(5)).toBe('05')
    })
    test('positive number bigger than 9 does not 0 before it', () => {
        expect(utilService.padNum(10)).toBe('10')
        expect(utilService.padNum(10)).not.toBe('010')
    })
})