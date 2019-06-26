
[
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
]


var list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

function findOddNames(list) {
  // thank you for checking out the Coding Meetup kata :)

  var oddNames=list.filter(function(user){
    var name = user.firstName;
    var sum=0
    for (var i = 0; i < name.length; i++) {
      
       sum = sum + name.charCodeAt(i)
    }
       if(sum%2!=0){
        return [user]
       }
    

  })
  return oddNames
}



