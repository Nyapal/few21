// You need to define a Class/Object
// The class holds a value in dollars & provides methods to work with currency.

// new Currency(7).split(3) -> [2.33, 2.33, 2.34]

class Money {
  constructor(value) {
    this.value = value;
  }

  add(n) {
    this.value += n;
    return this;
  }

  subtract(n) {
    this.value -= n;
    return this;
  }

  multiply(n) {
    this.value *= n;
    return this;
  }

  divide(n) {
    this.value /= n;
    return this;
  }

  split(n) {
    const output = [];
    // convert value to pennies
    let valueAsPennies = this.value * 100;

    // divide by this.value by n
    const idk = Math.floor(valueAsPennies / n);

    for (let i = 0; i < n; i++) {
      valueAsPennies -= idk;
      output.push(idk);
    }
    let i = 0;
    while (valueAsPennies > 0) {
      output[i] += 0.01;
      valueAsPennies -= 1;
      i += 1;
    }
    output.forEach((e) => e / 100);
    return output;
  }
  // Challenge 1 GoldenRatio - Add a new property to Number that is the Golden Ratio
  // Example: Number.goldenRatio // 1.61803398875
  goldenRation() {
      
  }
  // Strategy: Number.prototype = 1.61803398875
  // Stretch: Calculate the golden ratio with math
  
  
  // Challenge 2 Number Methods: round, floor, ceil - These functions already exist on the Math Object, your job is to make a method on Number that does the same thing. Rather than Math.round(x) your method will work like this: x.round() or (1.99).round().
  // round() - x = 9.99 - x.round() -> 10
  // floor() - x = 9.99 - x.floor() -> 9
  // ceil() - x = 1.03 - x.ceil() -> 2
  // Challenge 3 pad(x, y) - pads Number with x 0s before, and y 0s after.
  // Example: 34.801.pad(4,4) -> 0034.8010 (notice the 0s added ont he left and right sides)
  // Challenge 4 degToRad(n) - I'm surprised this function is not included with JS.
  // Example: degToRad(45) -> 0.785
  // Strategy: Write a function that takes a number and returns the results of this formula: deg * (Math.PI / 180)
  // Stretch Goal: Check for invalid input. If the value input is not a number or is not included the function should throw and error.
  // Challenge 5 radToDeg(deg) - Covert radians to degrees.
  // Example: radToDeg(0.785) -> 44.977
  // Strategy: Write a function that takes a number and returns calculation from this formula: radians * (180 / Math.PI)
  // Stretch Goal: Check for invalid input. If the value input is not a number or is not included the function should throw and error.
  // Challenge 6 toDollars(amount) - Formatting money is a common task for software projects. A function could save you time in the future. The goal of this function is to take a numeric value and return a string beginning with a '$' and rounded to two decimal places.
  // Example: toDollars(3.9) -> $3.90 (Note: pads with a 0)
  // Strategy: The Number.toFixed(n) method will do most of the work for you!
  // Stretch Goals: Create a currency formatting function that simplifies the use of: Intl.NumberFormat
  // intFormat(amount, countryCode, style)
  // Stretch Goal: Add the Money Class to your Library (from the in class exercise).
  // Challenge 7 tax(rate) - Returns the tax amount
  // Example: tax(rate) - returns the amount with tax
  // Challenge 8 interest(total, year, rate) - Write a function that calculates the interest over time.
  // Example: https://stackoverflow.com/questions/28325001/how-to-calculate-interest-javascript
  // Challenge 9 mortage(principal, numberOfPayments, interestRate).
  // Example: https://stackoverflow.com/questions/17101442/how-to-calculate-mortgage-in-javascrip
}

const trial = new Money(20);
const one = trial.split(5); // [4, 4, 4, 4, 4]
const two = trial.split(3); // [6.66, 6.66, 6.67]
console.log(one);
console.log(two);

const yungMoney = new Money(1000);
const nickiMinaj = yungMoney.split(33);
const lilWayne = yungMoney.split(111);
const drizzy = yungMoney.split(51);
console.log(yungMoney);
console.log(nickiMinaj);
console.log(drizzy);
console.log('yes');
