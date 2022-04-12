import { strict as assert } from 'assert'
import { sum, mult } from './utils/helpers.mjs'

describe('Array tesing', () => {
    describe('indexOf() function tests', () => {
        it('should return -1 when the value is not present', () => {
            assert.equal([1, 2, 3].indexOf(4), -1)
        })

        it('should return 0 when element found', () => {
            assert.equal([1, 2, 3].indexOf(1), 0)
        })
    })
})

describe('sum() function tests', () => {
    it('should return 3 when 1 + 2 passed', () => {
        assert.equal(sum(1, 2), 3)
    })

    it('2 + 2 != 5', () => {
        assert.notEqual(sum(2, 2), 5)
    })

    it('2 + 2 != NaN', () => {
        assert.notEqual(sum(2, 2), NaN)
    })

    it('should return number type', () => {
        const result = sum(10, 5)
        assert.equal(typeof result, 'number')
    })
})

describe('mult() function tests', () => {
    it('should return 50 when 10 * 5 passed', () => {
        assert.equal(mult(10, 5), 50)
    })

    it('should return number type', () => {
        const result = mult(10, 5)
        assert.equal(typeof result, 'number')
    })

    it('should throw an error when wrong type passed', () => {
        assert.throws(() => {
            mult(10, '5')
        })
    })
})
