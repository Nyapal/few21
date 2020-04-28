(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  // Challenge 1
  function capitalize(str) {
    // return the str with the first letter capitalized
    return str.replace(str[0], str[0].toUpperCase());
  }

  // Challenge 2
  function allCaps(str) {
    // makes all characters uppercase
    return str.toUpperCase();
  }

  // Challenge 3
  function capitalizeWords(str) {
    // capitalize first char in each word
    // step one split str into arr
    const splitStr = str.split(' ');
    // for each word in the arr use capitalize function
    return splitStr.map((strItem) => capitalize(strItem)).join(' ');
  }

  // Challenge 4
  function removeExtraSpaces(str) {
    // remove extra space
    return str.split(' ').filter((arrItem) => arrItem !== '').join(' ');
  }

  // Challenge 5
  function kabobCase(str) {
    // make all characters lowercase, remove extra spaces & replace w hyphen
    return str.toLowerCase().replace(/\s/g, '-');
  }

  // Challenge 6
  function snakeCase(str) {
    // remove extra space, replace space w underscore & make all characters lowercase
    const splitStr = str.toLowerCase().split();
    const removedSpaces = splitStr.map((eachItem) => removeExtraSpaces(eachItem)).join();
    return removedSpaces.replace(/\s/g, '_');
  }

  // Challenge 7
  function camelCase(str) {
    // lowercase first character of first word
    // uppercase the first character of all other words & remove all spaces
    const capWords = capitalizeWords(str);
    const firstChar = capWords[0].toLowerCase();
    const capWordsSpliced = capWords.slice(1, capWords.length).replace(/\s/g, '');
    return firstChar + capWordsSpliced;
  }

  // EXPORTS
  module.exports.capitalize = capitalize;
  module.exports.allCaps = allCaps;
  module.exports.capitalizeWords = capitalizeWords;
  module.exports.removeExtraSpaces = removeExtraSpaces;
  module.exports.kabobCase = kabobCase;
  module.exports.snakeCase = snakeCase;
  module.exports.camelCase = camelCase;

})));
