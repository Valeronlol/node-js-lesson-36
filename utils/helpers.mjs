import { get } from 'https'

export const sum = (a, b) => a + b

const isNumber = (entity) => typeof entity === 'number'

export const mult = (a, b) => {
    if (!isNumber(a) || !isNumber(b)) {
        throw new Error('Wrong arguments passed!')
    }

    return a * b
}

export const substract = (a, b) => {
    if (!isNumber(a) || !isNumber(b)) {
        throw new Error('Wrong arguments passed!')
    }

    return a - b
}

export const div = (a, b) => {
    if (!isNumber(a) || !isNumber(b)) {
        throw new Error('Wrong arguments passed!')
    }

    if (b === 0) {
        throw new Error('Division by zero is not allowed!')
    }

    return a / b
}

export const makeHttpCall = (url, parser = JSON.parse) => new Promise((resolve, reject) => {
    get(url, (res) => {
        let data = ''

        res.on('data', (chunk) => {
            data += chunk
        })

        res.on('end', () => {
            try {
                resolve(parser(data))
            } catch (err) {
                reject(err)
            }
        })
    })
        .on('error', (err) => reject)
})