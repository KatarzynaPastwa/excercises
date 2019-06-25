var list1 = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
];

function allContinents(list) {
  
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