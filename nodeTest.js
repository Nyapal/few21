const person = {
  name: 'Tim', 
  age: 34, 
  job: 'unemployed',

  describe() {
    console.log(`${this.name} is ${this.age} years old and works as a ${this.job}.`)
  }
}
const otherPerson = { 
  name: 'Evelyn',

}
otherPerson.describe = person.describe
console.log(person.name)
console.log(person.job)
person.describe()
otherPerson.describe()

// <TravelDates destination={this.value} />