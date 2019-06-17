class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  sayHello () {
    console.log(`Hello, I am ${this.firstName} ${this.lastName}`)
  }

  static staticMethodExample () {
    console.log('Helllo!!!')
    console.log(this)
  }
}







class Developer extends Person {
  constructor(firstName, lastName, skills) {
    super(firstName, lastName)
    this.skills = skills
  }

  sayHello() {
    super.sayHello()
    console.log("I can write some code!")
  }

  writeCode () {
    console.log('Writing JS code')
  }
}


function Developer(firstName, lastName, skills){
Person
}


const developer1 = new Developer("John", "Doe", ["JavaScript", "HTML", "CSS"])

// Old way (ES5)
const person1 = new Person("John", "Doe")
const person2 = new Person("Emilie", "Doe")
// console.log(person1)



// person1.staticMethodExample()
// Person("John", "Doe")




function Person (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = 0
}


Person.staticMethodExample = function() {
  console.log(this)
  console.log('Hello from static method example')
}


Person.prototype = {
  sayHello: function() {
    console.log(`Hello, I am ${this.firstName}`)
  }
}







function Superman() {
  Person.call(this, "Clark", "Kent")
  this.isSuperman = false
}


Superman.prototype = Object.create(Person.prototype)


// Adding a method to the constructor
Superman.prototype.takeOffGlasses = function() {
  this.isSuperman = true
}


const superman1 = new Superman()

// const person1 = new Person("John", "Doe")
// person1.sayHello()

// const f = Person.staticMethodExample
// f()

// console.log(person1)


// ROZWIĄZANIE


function Developer(firstName, lastName, skills) {
  Person.call(this,firstName, lastName)
  this.skills=skills
  //erson.call(this.sayHello)
}


Developer.prototype = Object.create(Person.prototype)


// Adding a method to the constructor
Developer.prototype.sayHello = function() {
  Person.prototype.sayHello.call(this)
  console.log("I can write some code!")
}


const developer1 = new Developer()
