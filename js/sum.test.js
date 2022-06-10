const sum2num = require('./sum')

// ! write test function => the first parameter is the name (string) of the test and the other is a function where we write the test
test('adds two numbers', () => {
    
    expect(sum2num(2, 2)).toBe(4)
})