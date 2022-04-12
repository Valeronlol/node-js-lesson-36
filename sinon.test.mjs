import chai, { assert, expect } from 'chai'
import chaiUrl from 'chai-url'
chai.use(chaiUrl)
import sinon from 'sinon'
import { makeHttpCall } from './utils/helpers.mjs'

describe('Sinon tests', () => {
    describe.only('Http call cb tests', () => {
        const httpUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
        let result

        before(async () => {
            result = await makeHttpCall(httpUrl)
        })

        it('test async cb been called', async () => {
            const callback = sinon.spy(JSON.parse)
            await makeHttpCall(httpUrl, callback)
            assert.ok(callback.called)
        })

        it('test title shoud be string', () => {
            console.log(result)
            assert.typeOf(result.title, 'string')
        })

        it('test response service version v1', () => {
            assert.equal(result.service_version, 'v1')
        })

        it('test response url https', () => {
            expect(result.url).to.have.protocol('https')
        })

        it('test response url apod.nasa.gov domain', () => {
            expect(result.url).to.have.hostname('apod.nasa.gov')
        })
    })
})
