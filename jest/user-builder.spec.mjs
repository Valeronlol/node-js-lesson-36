import { jest } from '@jest/globals'
import UserBuilder from './user-builder.mjs'

describe('User builder jest tests', () => {
    let user = null

    beforeEach(() => {
        user = new UserBuilder({
            name: "Jenya",
            age: 23,
            status: "Single",
        })
    })

    afterEach(() => {
        user = null
    })

    test('user is istance of UserBuilder', () => {
        expect(user).toBeInstanceOf(UserBuilder)
    })

    test('User with name create without errors', () => {
        expect(() => {
            new UserBuilder({
                name: 'Jenya'
            })
        }).not.toThrow()
    })

    test('User with empty data throw an error', () => {
        expect(() => {
            new UserBuilder()
        }).toThrow()
    })

    test('User without name will throw an error', () => {
        expect(() => {
            new UserBuilder({
                surname: 'Test',
                status: 'Married',
                age: 20,
            })
        }).toThrow()
    })

    test('Age should be a number', () => {
        expect(() => {
            new UserBuilder({
                name: 'Test',
                age: '23',
            })
        }).toThrow()
    })

    test('User age should work properly', () => {
        expect(user.age).toEqual(23)
    })

    test('User name should work properly', () => {
        expect(user.name).toEqual('Jenya')
    })

    test('User status should work properly', () => {
        expect(user.status).toEqual('Single')
    })

    test('User toJson method should return string', () => {
        const json = user.toJson()
        expect(typeof json).toBe('string')
    })

    test('User toJson method should return correct JSON', () => {
        const json = user.toJson()
        expect(() => {
            JSON.parse(json)
        }).not.toThrow()
    })

    test('User getData should return user data', () => {
        const userData = user.getData()
        expect(typeof userData).toBe('object')
        expect(userData).toHaveProperty('name')
    })

    test('User getData should return uniq user id', () => {
        const userData = user.getData()
        const petya = new UserBuilder({
            name: 'Petya',
            age: 99,
        })
        const petyaData = petya.getData()
        expect(userData).toHaveProperty('id')
        expect(typeof userData.id).toBe('string')
        expect(userData.id).not.toEqual(petyaData.id)
    })

    test('User toJson function should call JSON.stringify method', () => {
        const spy = jest.spyOn(JSON, 'stringify')
        user.toJson()
        expect(spy).toHaveBeenCalled()
        spy.mockRestore()
    })
})
