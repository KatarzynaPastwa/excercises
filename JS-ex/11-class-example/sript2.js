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





function Developer(firstName, lastName, skills) {
    Person.call(this,firstName, lastName)
    this.skills=skills
  }
  
  
  Developer.prototype = Object.create(Person.prototype)
  
  
  // Adding a method to the constructor
  Developer.prototype.sayHello = function() {
    console.log("I can write some code!")
  }
  
  Developer.prototype.writeCode = function() {
    console.log('Writing JS code')
  }

  
  const developer1 = new Developer()
  