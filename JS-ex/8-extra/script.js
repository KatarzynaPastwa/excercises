
/*
 =====================================================
 EXTRA TASKS
 =====================================================
/*
TODO: 1. Napisz funkcje, która zwraca losową całkowitą liczbę, w zadanym zasięgu (zasięg to dwa parametry - min i max):
 e.g getRandomValue(1, 10) - zwraca losową, całkowita liczbę w zasięgu od 1 do 10
 e.g getRandomValue(100, 1023) - zwraca losową, całkowita liczbę w zasięgu od 100 do 1023
 -----------------------------------------------------
 CODE GOES BELOW */

function getRandomValue(min,max){
  
var x = Math.round(Math.random()*(max-min)+ min)
  console.log(x)
 
}


/*
 -----------------------------------------------------
TODO: 2. Napisz funkcję, która jako parametr przyjmuje Twoje imię i nazwisko,
 i zwraca Twoje inicjały rozdzielone kropką.
 e.g getInitials("John Doe") - zwraca "J.D."
 -----------------------------------------------------
 CODE GOES BELOW */


function initials(fullName){
  var fullNameArray=fullName.split(" ");
  const [name, surname]=fullNameArray;
  console.log(`${name[0]}.${surname[0]}.`)
}





/*
 -----------------------------------------------------
TODO: 3. Napisz funkcję, która jako parametry przyjmuje dwa stringi.
    - Pierwszy parametr to zdanie.
    - Drugi parametr to słowo, które ma w tym zdaniu zostać zastąpione trzema gwiazdkami.
    - funkcja finalnie ma zwracać poprawione zdanie, tzn:
   e.g validateSentence("kurde co za dzień", "kurde"); // OUTPUT: "*** co za dzień";
   ** zadanie z gwiazdką - zrób tak, aby powyższa funkcja podmieniała każde wystąpienie przekazanego słowa
   e.g validateSentence("kurde co za dzień, kurde", "kurde"); // OUTPUT: "*** co za dzień, ***";
 -----------------------------------------------------
 CODE GOES BELOW */

let sentence = "kurde, co za dzień";
let word = "kurde";
var newSentence;
function cenzura(sentence, word){
  newSentence = sentence.replace(word, "*******");
  console.log(newSentence)
}




 
/*
 -----------------------------------------------------
