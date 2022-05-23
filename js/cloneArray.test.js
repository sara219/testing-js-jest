const cloneArray = require('./cloneArray')


test('test clone array ', () => {
    let array = [1,2,3]
    expect(cloneArray(array)).toStrictEqual(array)
    // we can use toEqual or not.toBe 
})