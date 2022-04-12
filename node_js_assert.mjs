import { strict as assert } from 'assert'
import { sum, mult } from './utils/helpers.mjs'

assert.ok(1 + 2 === 3, 'Calculation assertion failed')

assert.equal(sum(1, 2), 3)

assert.deepEqual([1, { a: 2 }], [1, { a: 2 }])
assert.notDeepEqual([1, { a: 2 }], [1, { a: 3 }])

assert.ifError(null)
// Stream.on('data', (err, data) => {
//     assert.ifError(err) // if instanceof Error then throw new AssertionError
// })

assert.throws(() => {
    mult(1, '2')
})

const asyncFunctionWithErr1 = async () => {
    throw new Error('Async err')
}

const asyncFunctionWithErr2 = () => new Promise((_, reject) => reject('Async err'))

assert.rejects(() => {
    return asyncFunctionWithErr2()
})

// Tracker same as Sinon, watch for calls count
const tracker = new assert.CallTracker()
const func = () => {
    console.log('CONSOLE: 11')
}
const callsfunc = tracker.calls(func, 1)
callsfunc()
tracker.verify()
