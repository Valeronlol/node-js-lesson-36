import { nanoid } from 'nanoid'

class UserBuilder {
    #userData = {
        id: null,
        name: null,
        surname: null,
        age: null,
        status: null,
    }

    constructor(data) {
        if (!data) {
            throw new Error('User data should be an object')
        }

        if (!data.name) {
            throw new Error('User name must be passed.')
        }

        if (data.age && typeof data.age !== 'number') {
            throw new Error('User age must be a number.')
        }
       
        this.#userData = {
            ...this.#userData,
            ...data,
            id: nanoid()
        }
    }

    getData () {
        return Object.assign({}, this.#userData)
    }

    toJson() {
        return JSON.stringify(this.#userData)
    }

    get age () {
        return this.#userData.age
    }

    get name () {
        return this.#userData.name
    }

    get status () {
        return this.#userData.status
    }
}

export default UserBuilder
// const user = new UserBuilder({ name: "Jenya", age: 23 })
// user.age // 23
// user.name // Jenya
// const data = user.getData() // { id: "uniq", name: "Jenya", age: 23 }
// user.toJson() // '{"id":"uniq","name":"Jenya","age":23}'

// data.user = "Valera Hacker"