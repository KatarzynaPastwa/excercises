
  /* Dana jest tablica drinks*/

var drinks = [
  {name: 'Vodka', price: 19.99},
  {name: 'Whisky', price: 40.00},
  {name: 'Prosseco', price: 35.99},
  {name: 'Beer', price: 3.20},
  {name: 'Balieys', price: 50.20},
  {name: 'Bacardi', price: 35.50},
  {name: 'Vine', price: 16.50},
  {name: 'Gin', price: 23.30}
];


/* TODO.1: Za pomocą pętli, wyświetl w konsoli nazwy drinków, których:
    - cena jest niższa 30.00 */

 drinks.forEach(function(drink){
      if(drink.price > 30){
          console.log(drink.price)
      }
  })


/* TODO.2: Za pomocą pętli, wyświetl w konsoli nazwy drinków, których:
 - cena jest wyższa niż 20 ale jednocześnie niższa lub równa 40 */

  drinks.forEach(function(drink){
    if(drink.price > 20 && drink.price <=40){
        console.log(drink.price)
    }
})

/* TODO.3: Za pomocą pętli, wyświetl w konsoli nazwy drinków, których:
 - nazwa ma więcej niż 4 litery */
 drinks.forEach(function(drink){
  if(drink.name.length > 4){
      console.log(drink.name)
  }
})


/* TODO.4: Za pomocą pętli, wyświetl w konsoli nazwy drinków, których:
 - nazwa zaczyna się na literkę "B" lub na literkę "V" */

 drinks.forEach(function(drink){
  if(drink.name[0] === "B" || drink.name[0] === "V" ){
      console.log(drink.name)
  }
})


/* TODO.6: Za pomocą pętli, doklej do każdego drinka pole:
 - isExpensive: true jeśli cena jest wyższa niż 30
 - isExpensive: false jeśli cena jest niższa lub równa 30
 - oczekiwany, przykładowy efekt:
 { name: 'Bacardi', price: 35.50, isExpensive: true },
 { name: 'Vine', price: 16.50,  isExpensive: false } */


 drinks.forEach(function(drink){
  if(drink.price > 30 ){
    drink.isExpensive = true
      
  } else{
    drink.isExpensive = false
  }
})


/* TODO.7: Za pomocą pętli, wyświetl w konsoli nazwe drinka:
 - którego cena jest równa 50.20, a po wyświetleniu console.log przerwij natychmiast pętlę */


 drinks.forEach(function(drink){
while(drink.price=== 50.20){
  console.log(drink.name)
  break;
}
  
})



/* TODO.8: Za pomocą pętli, wyświetl w konsoli następujacy tekst:
    - "Cena _NAME_ wynosi _PRICE_"
    - przeskocz powyższy console.log jeśli cena jest równa 3.20 lub 19.99
 */   



drinks.forEach(function(drink){
  
  
    if(drink.price !== 3.20 && drink.price !== 19.99){
      
    
     console.log(`Cena ${drink.name} wynosi ${drink.price}`)
    
    }
    
  })