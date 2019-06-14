// TODO: 1. stworz zmienna, nastepnie stworz instrukcje, ktora
// wyswietli na ekranie 1, jesli zmienna jest rowna 1
// 2, jesli zmienna jest rowna "1"
// wyswietli ta zmienna, jesli zmienna jest rowna 2
// 0 w pozostalych przypadkach


var a
function checkNumber(){
  if(a===1){
  console.log(1)
}else{
  if(a==="1"){
    console.log(2)
  }else{
    if(a===2){
      console.log(a)
    }else{
      console.log(0)
    }
  }
}
}

// TODO: 2. stwórz liste 10 losowych liczb

//wyswietli po kolei
var list=[];

    for(var i=0; i<10 ; i++){

      function getRandom() {
        var x = Math.round(Math.random()*10);
        return x
       }

     console.log(getRandom())
    }
 

// wywietli w arrayu
    var list=[];

    for(var i=0; i<10 ; i++){

      function getRandom() {
        var x = Math.round(Math.random()*10);
        return x
       }

     list.push(getRandom())
    }

console.log(list)   // [3, 7, 4, 0, 5, 2, 1, 4, 1, 8]

// TODO: 3. stworz petle while, ktora wyswietli kazda
// wartosc z tablicy z poprzedniego zadania
// ale przerwij petle, kiedy wartosc jest > 5

// pętla FOR
var list= [3, 2, 4, 0, 5, 2, 1, 4, 1, 8]

for(let i=0; i < list.length; i++){
const number = list[i];
console.log(number)
}




//petla WHILE






// TODO: 4. stwórz liste 100 losowych liczb (programistycznie)
// poza petla zrob console log calej tablicy






// TODO: 5. Stworz tablice z 5 liczbami (od 1 do 5)
// dodaj 0 jako pierwszy element tablicy
// dodaj 6 jako ostatni element tablicy
// wyswietl tablice w konsoli
// wykonaj operacje odwrotne do ostatnich operacjach na tablicy
// wyswietl tablice w konsoli

var tablica=[1,2,3,4,5];
tablica.unshift(0)
tablica.push(6)
console.log(tablica)

tablica.shift()
tablica.pop()
console.log(tablica)




// TODO: 6. Stworz tablice z losowa parzysta dlugoscia elementow
// i losowymi wartosciami w tablicy
// stworz nowa tablice ktora zawiera 4 srodkowe elementy
// console.log tej tablicy




var x
var y
    function isEven() {
       x = Math.round(Math.random()*20);  
      if (x%2 === 0 && x>=6 ){
        //console.log(x, "jest parzyste")
       return x
      }else{
        isEven()
      } 
    }

    isEven()
 
var tablica =[]


function zrobTablice(){

  for(var i=0; i<x; i++){
  y=Math.round(Math.random()*100);  
  tablica.push(y)
  //console.log(tablica)
  }

}
zrobTablice()

var nowaTablica = tablica.slice(1,5);
console.log(nowaTablica)





// TODO: 7. odszukaj index 9 w tablicy [1,2,3,4,5,6,7,8,9,10]

var tablica=[1,2,3,4,5,6,7,8,9,10]
console.log(tablica.indexOf('9'))




// TODO: 8. stworz funkcje, ktora rekursywnie policzy do n
// n ma byc parametrem tej funkcji



 ???????
var n
function liczy(n){
  for(i=0; i <= n; i++){
    console.log(i)
  }
}
