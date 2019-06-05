
// TODO: 1. Napisz funkcję, która wyświetla console.log z dowolnym tekstem


function showText (){
    console.log("Dowolny tekst")
}


/* TODO: 2. Napisz funkcję, która przyjmuje dwa parametry: firstName oraz lastName a następnie:
    - zwraca stringa z powitaniem, np: 'Hello my dear Jan Nowak!'
    - wynik funkcji przypisz do zmiennej o nazwie greeting
    - zadeklaruj funkcję jako function declaration oraz jako function expression */

function greeting(){
    firstName = "Jan"
    lastName = "Nowak"
    console.log("Hello my dear ", firstName, " ", lastName, "!")
}

function greeting(){
    let firstName = "Jan"
    let lastName = "Nowak"
    console.log("Hello my dear ", firstName, " ", lastName, "!")
}


/* TODO: 3. Napisz funkcję, która przyjmuje dwa parametry: firstName oraz lastName. Następnie:
    - zwraca stringa z powitaniem (wykorzystaj z funkcję z TODO1!) a do powitania
      dokleja stringa "I love you!"*
    - oczekiwana zwrotka: "Hello my dear firstName lastName! I love you!" */


function loveGreeting(){

    function greeting(){
        var firstName="Ola";
        var lastName="Kowalska";
        return ("Hello my dear " + firstName + "  "+ lastName + " !");
    };

    console.log(greeting(), "I love You")
};


// TODO: 4. Opakuj kod z tego pliku w IIFE.

(function(){cały_kod_tego_pliku_tu_w_Środku})()



// TODO: 5. Stwórz interwał, ktory co 1 wyswietli w konsoli console.log("Hello!"). Dodatkowo, po 5 sekundach interwal powinien przestac pracowac
// nalezy wykorzystac funkcje setInterval, clearInterval, setTimeout
// naprawienie za pomoca domkniecia oraz IIFE
for (var i = 0; i < 5; i++) {
    (function(x) {
      setInterval(function() {
        console.log("Hello!")
      }, x * 1000 + 1000)
    })(i)
  }





