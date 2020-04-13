// Your goal is to define a class that tracks money.
// You need to define a Class/Object that holds a value in dollars and provides methods to work with currency.

// new Currency(7).split(3) -> [2.33, 2.33, 2.34]

class Money {
    constructor(value) {
        this.value = value
    }

    add(n) {
        this.value += n
        return this
    }

    subtract(n) {
        this.value -= n
        return this
    }

    multiply(n) {
        this.value *= n
        return this
    }

    divide(n) {
        this.value /= n
        return this
    }

    split(n) {
        let output = []
        // convert value to pennies
        let valueAsPennies = this.value * 100
        
        // divide by this.value by n
        let idk = Math.floor(valueAsPennies / n)

        for(let i = 0; i < n; i++) {
            valueAsPennies -= idk 
            output.push(idk)
        }
        let i = 0
        while (valueAsPennies > 0) {
            output[i] += 0.01 
            valueAsPennies -= 1
            i += 1
        }
        output.forEach(e => e /100)
        return output
    }
}

let trial = new Money(20)
let one = trial.split(5) //[4, 4, 4, 4, 4]
let two = trial.split(3) // [6.66, 6.66, 6.67]
console.log(one)
console.log(two)

let yungMoney = new Money(1000)
let nickiMinaj = yungMoney.split(33)
let lilWayne = yungMoney.split(111)
let drizzy = yungMoney.split(51)
console.log(yungMoney)
console.log(nickiMinaj)
console.log(drizzy)