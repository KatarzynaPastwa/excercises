var list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];



  
  function greetDevelopers(list1) {

 
        list1.forEach(function(person) {
            var greeting = `Hi ${person.firstName}, what do you like the most about ${person.language}?`      
            
            person["greeting"] = greeting
        });
      console.log(list1)
}
greetDevelopers(list1)
