var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];



function countLanguages(list1) {

  var languages = []
  languages = list1.map(person =>person.language)  
 

 var  count = {};
 languages.forEach(function(i) { count[i] = (count[i]||0) + 1;});
return count

 
}

countLanguages(list1)




