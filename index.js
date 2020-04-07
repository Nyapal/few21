// Challenge 1 
function capitalize(str) {
   //return the str with the first letter capitalized
  return str.replace(str[0], str[0].toUpperCase())
}

// Challenge 2
function allCaps(str) {
  //makes all characters uppercase
  return str.toUpperCase()
}

// Challenge 3
function capitalizeWords(str) {
  // capitalize first char in each word
  //step one split str into arr 
  let splitStr = str.split(' ')
  // for each word in the arr use capitalize function
  return splitStr.map((str) => capitalize(str)).join(' ')
}

// Challenge 4 
function removeExtraSpaces(str) {
  // remove extra space
  return str.split(' ').filter(arrItem => arrItem !== "").join(" ")
  // return str.trim().split(' ').map((arrItem) => arrItem.trim()).join(" ")

}

// Challenge 5
function kabobCase(str) {
  // make all characters lowercase, remove extra spaces & replace w hyphen
  return str.toLowerCase().replace(/\s/g, "-")
}

// Challenge 6 
function snakeCase(str) {
  let splitStr = str.toLowerCase().split()
  let removedSpaces = splitStr.map(eachItem => removeExtraSpaces(eachItem)).join()
  return removedSpaces.replace(/\s/g, "_")
  //remove extra space, replace space w underscore & make all characters lowercase
}

// Challenge 7 
function camelCase(str) {
  //lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces
  let capWords = capitalizeWords(str)
  return capWords.replace(/\s/g, "").replace(str[0], str[0].toLowerCase())
}

// EXPORTS
module.exports.capitalize = capitalize
module.exports.allCaps = allCaps
module.exports.capitalizeWords = capitalizeWords
module.exports.removeExtraSpaces = removeExtraSpaces
module.exports.kabobCase = kabobCase
module.exports.snakeCase = snakeCase
module.exports.camelCase = camelCase