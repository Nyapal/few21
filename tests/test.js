const sl = require('../index')

// Challenge 1 
test('Capitalize', () => {
  expect(sl.capitalize('hello world')).toBe('Hello world')
})

// Challenge 2 
test('All Caps', () => {
  expect(sl.allCaps('hello world')).toBe('HELLO WORLD')
})

// Challenge 3 
test('Capitalize Words', () => {
  expect(sl.capitalizeWords('hello world')).toBe('Hello World')
})

// Challenge 4 
test('Remove Extra Spaces', () => {
  expect(sl.removeExtraSpaces('hello  world')).toBe('hello world')
})

// Challenge 5 
test('Kabob Case', () => {
  expect(sl.kabobCase('hello world')).toBe('hello-world')
})

// Challenge 6
test('Snake Case', () => {
  expect(sl.snakeCase('hello world')).toBe('hello_world')
})

// Challenge 7
test('Camel Case', () => {
  expect(sl.camelCase('hello world')).toBe('helloWorld')
})