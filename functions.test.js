// Require functions.js. Require returns an object, so destructure it.
const {
    returnTwo,
     greeting, 
     add,
     multiply,
     divide,
     subtract
} = require('./functions')

test('returnTwo', () => {
    expect(returnTwo()).toBe(2)
})

test('greeting', () => {
    expect(greeting('James')).toEqual('Hello, James')
})

// toBe tests that place in memory. toEqual tests the content. In this case either work.
test('add', () => {
    expect(add(1, 2)).toBe(3)
    expect(add(5, 9)).toEqual(14)
})

describe('Math functions', () => {
    test('multiply', () => {
        expect(multiply(3, 3)).toBe(9)
    })

    test('divide', () => {
        expect(divide(100, 10)).toBe(10)
    })

    test('subtract', () => {
        expect(subtract(12, 1)).toBe(11)
    })
})
