var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];

function isAgeDiverse((list) {
  
  return list.some(user=>user.age <20) &&
         list.some(user=>user.age >=20 && user.age<30) &&
         list.some(user=>user.age >=30 && user.age<40) &&
         list.some(user=>user.age >=40 && user.age<50) &&
         list.some(user=>user.age >=50 && user.age<60) &&
         list.some(user=>user.age >=60 && user.age<70) &&
         list.some(user=>user.age >=70 && user.age<80) &&
         list.some(user=>user.age >=80 && user.age<90) &&
         list.some(user=>user.age >=90 && user.age<100) &&
         list.some(user=>user.age >=100);

}