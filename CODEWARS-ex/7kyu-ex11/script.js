var list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];


function getAverageAge(list) {
  // thank you for checking out the Coding Meetup kata :)
  var total=0;
  for (var i=0; i <list.length; i++){
    total+= list[i].age
  }
  var avg = total / list.length;
  avg=Math.round(avg)
return avg
}


