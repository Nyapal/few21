//Challenge 1 
function capitalize(str) {
   //return the str with the first letter capitalized
  return str.replace(str[0], str[0].toUpperCase())
}

let challengeOne = capitalize('hello world')
console.log(challengeOne)

//Challenge 2
function allCaps(str) {
  //makes all characters uppercase
  return str.toUpperCase()
}

let challengeTwo = allCaps('hello world')
console.log(challengeTwo)

//Challenge 3
function capitalizeWords(str) {
  // capitalize first char in each word
  //step one split str into arr 
  let splitStr = str.split(' ')
  // for each word in the arr use capitalize function
  return splitStr.map((str) => capitalize(str)).join(' ')
}

let challengeThree = capitalizeWords('hello from planet earth')
console.log(challengeThree)

//Challenge 4 
function removeExtraSpaces(str) {
  // remove extra space
  return str.split(' ').filter(arrItem => arrItem !== "").join(" ")
  // return str.trim().split(' ').map((arrItem) => arrItem.trim()).join(" ")

}

let challengeFour = removeExtraSpaces('  hello  there   ! ')
console.log(challengeFour)

//Challenge 5
function kabobCase(str) {
  // make all characters lowercase, remove extra spaces & replace w hyphen
  return str.toLowerCase().replace(/\s/g, "-")
}
let challengeFive = kabobCase('Hello Entire World')
console.log(challengeFive)

//Challenge 6 

function snakeCase(str) {
  //remove extra space, replace space w underscore & make all characters lowercase
  return str.map(eachItem => removeExtraSpaces(eachItem))

}
let challengeSix = snakeCase()
console.log(challengeSix)

//Challenge 7 
// function camelCase() {

// }
// let challengeSeven = camelCase()
// console.log(challengeSeven)