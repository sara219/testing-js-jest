const sub2num = require('./subtract')

test('subtract two numbers', () => {
  expect(sub2num(1, 2)).toBe(-1)
})
