const stringLibrary = require('./index.js')

let challengeOne = stringLibrary.capitalize('hello world')
console.log(challengeOne)

let challengeTwo = stringLibrary.allCaps('hello world')
console.log(challengeTwo)

let challengeThree = stringLibrary.capitalizeWords('hello from planet earth')
console.log(challengeThree)

let challengeFour = stringLibrary.removeExtraSpaces('  hello  there   ! ')
console.log(challengeFour)

let challengeFive = stringLibrary.kabobCase('Hello Entire World')
console.log(challengeFive)

let challengeSix = stringLibrary.snakeCase("Testing Snake Case")
console.log(challengeSix)

let challengeSeven = stringLibrary.camelCase("Testing The Camel Case Function")
console.log(challengeSeven)