const names =["Ala", "ela", "ola"]
names
names[1]="Kasia"
names
console.log(names.indexOf('kasia')) 
names
console.log(names.indexOf('Kasia'))

console.log(names.shift(''))
names
console.log(names.unshift())
names[3]='Wacław'
names
names[2]="Arek"
names
console.log(names.pop())
names
console.log(names.push('Anna'))
names
console.log(names.slice())



const numbers =[3,5,1,7,8,]
numbers
numbers.sort
console.log(numbers.sort())

const name= "Jan"

numbers
const n=numbers.map(x=>x*2)
console.log(n)


const m=numbers.forEach(x=> {
    const y=x*2
    console.log(y)
})

const isOdd=number => number %2 !==0
console.log(isOdd(1))


//OBIEKTY
const person={
    name: "Ala",
    surname: "nowak",
    age: 25
}

console.log(object.assign(person))



//ZADANKA z neta

var list1 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
  ];

  function getFirstPython(list) {
   list.find((person) => {
       return person.language === "Python"
   }) 
  }

console.log(getFirstPython(list1));















