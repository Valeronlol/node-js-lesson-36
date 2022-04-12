const request = require('supertest')
const { expect } = require('chai')
const { server } = require('./supertest_server/src/main')

describe.only('HTTP REST API testing', () => {
    describe('List of cats testing', () => {
        let response
        let cats

        before(async () => {
            response = await request(server).get('/cat').set('Accept', 'application/json')
            cats = JSON.parse(response.text)
        })

        after(() => {
            server.close(() => {
                process.exit()
            })
        })

        it('should return status code 200',  async () => {
            expect(response.status).to.equal(200)
        })

        it('should return array of cats', () => expect(cats).to.be.an('array'))

        it('should present id for every cat', () => {
            cats.forEach((cat) => expect(cat).to.have.own.property('id'))
        })

        it('should present ownerId for every cat', () => {
            cats.forEach((cat) => expect(cat).to.have.own.property('ownerId'))
        })

        it('should present name for every cat', () => {
            cats.forEach((cat) => expect(cat).to.have.own.property('name'))
        })

        it('should present image for every cat', () => {
            cats.forEach((cat) => expect(cat).to.have.own.property('image'))
        })
    })
})
