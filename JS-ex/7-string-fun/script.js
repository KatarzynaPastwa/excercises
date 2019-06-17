/*=====================================================
LINK: https://developer.mozilla.org /en-US/docs/Web/JavaScript/Reference/Global_Objects/String
=====================================================
Wskazówki do zadań:
- string.replace() - zmiana dowolnego znaku lub ciągu znaków
- string.split() - konwersja stringa do tablicy
- string.trim() - usunięcie whitespaces
- string.charAt() - odczytanie znaku na zadanym indeksie
- string.substring() - ekstrakcja części znaków ze stringa
- string.toLowerCase() - konwersja na wielkie litery
- string.toUpperCase() - konwersja na małe litery
- string.length - odczytanie ilości znaków */

// TODO: 1. Napisz funkcję, która przyjmuje parametr typu string, oraz zwraca liczbę jego znaków
var name="Kasia";
function stringLength(name){
    return name.length
}


// TODO: 2. Napisz funkcję, która przyjmuje parametr typu string, a następnie zwraca go oczyszczonego z tzw. trailing spaces.

var sentence="      What are You going to do tonight?        ";

function cleanWhitespace(sentence){ 
    var cleanSentence =  sentence.trim();  
    return cleanSentence
}

/* TODO: 3. Poniższe zmienne, rozbij na tablicę liter, oczekiwany wynik to: ['R','a','m','b','o']:
    - var nameOne = 'Rambo';
    - var nameTwo = 'R_a_m_b_o';
    - var nameThree = 'ROX1aOX1mOX1bOX1o';
*/
var nameOne = 'Rambo'

var nameTwo = Array.from(nameOne)
console.log(nameTwo)

var nameThree = nameTwo.join("_")
console.log(nameThree)

var nameFour=nameThree.replace(/_/g, "0X1")
console.log(nameFour)



/* TODO: 4. Stwórz nowe zmienne na podstawie stringa name = "EXPIRED", które zawierają odpowiednio:
    - pierwsze 3 litery tego stringa
    - ostatnie 3 litery tego stringa
*/
var name = "EXPIRED"
var nameFirstLetters=name.substring(0,3)
console.log(nameFirstLetters)

var nameLastLetters=name.substring(4,7)
console.log(nameLastLetters)


// TODO: 5. Napisz funkcję o nazwie capitalize, która jako parametr przyjmuje stringa i go "kapitalizuje"

var motto = "The more I learn the less i know"
function makeItBig(motto){
    return motto.toUpperCase()
}
// TODO: 6. W zmiennej var url = 'users/{id}' podmień "{id}" na liczbę 3 i wynik przypisz do nowej zmiennej

var url = 'users/{id}'
var newUrl = url.replace("{id}", 3 )
console.log(newUrl)


/* TODO: 7. Napisz funkcję która przyjmuje parametr typu string, a następnie jednocześnie:
    - czyści go z whitespaceów
    - litery konwertuje na wielkie
    - zwraca 2 pierwsze znaki
*/

var zdanie = "    To jest moje zdanie do konwersji    "

function changeZdanie(){
    var changedZdanie = zdanie.trim().toUpperCase().substring(0,2)
    return changedZdanie
}