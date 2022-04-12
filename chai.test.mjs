import chai, { assert, expect } from 'chai'
import { div, substract } from './utils/helpers.mjs'

const should = chai.should()

describe('Chai calc functions tesing', () => {
    describe('div() function tests', () => {
        const result = []

        before(() => {
            for (let i = 1; i <= 100; i++) {
                const divResult = div(10, i)
                result.push(divResult)
            }
        })

        it('should calculate result len', () => {
            assert.lengthOf(result, 100, 'Result length should be 100')
        })

        it('should check every element that it below 10', () => {
            result.forEach((res) => {
                assert.isBelow(res, 10.1, 'Result must be below 10')
            })
        })

        it('should throw an error when 0 passed to second arg', () => {
            assert.throws(() => {
                div(10, 0)
            })
        }, 'You must pass b !== 0')

        it('should not throw an error when any positive value passed to second arg', () => {
            assert.doesNotThrow(() => {
                div(10, 1)
            })
        })

        it('should return 10, because 100 / 10 = 10', () => {
            const result = div(100, 10)
            assert.equal(result,  10)
        })
    })

    describe('substract() function tests', () => {
        const resultArr = []

        before(() => {
            for (let i = 0; i <= 100; i++) {
                const divResult = substract(1000, i)
                resultArr.push(divResult)
            }
        })

        it('not throw an error when 10 - 5', () => {
            should.not.Throw(() => {
                substract(10, 5)
            })
        })

        it('should exists', () => {
            const result = substract(10, 5)
            should.exist(result)
        })

        it('should be equal 5', () => {
            const result = substract(10, 5)
            result.should.be.equal(5)
        })

        it('should include 1000, 900, 950, 925, 975', () => {
            resultArr.should.to.include(1000)
            resultArr.should.to.include(900)
            expect(resultArr).to.include(950)
            expect(resultArr).to.include(925)
            expect(resultArr).to.include(975)
        })
    })
})
