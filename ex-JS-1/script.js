  
// TODO: 1. Podepnij ten plik do pliku index.html

ok

// TODO: 2. Zadeklaruj 2 zmienne typu string

var myName="Kasia";
var mySurname= "Pastwa";

// TODO: 3. Zadeklaruj 2 zmienne typu number

var x=1;
var y=2;


// TODO: 4. Zadeklaruj 2 zmienne typu boolean

var prawda=true;
var falsz=false;

// TODO: 5. Zadeklaruj zmienna typu undefined

var h;
var j;

// TODO: 6. Zadeklaruj zmienna typu null



// TODO: 7. Zadeklaruj tablicę zawierajacą zmienne typu string

var tablica1=["pon", "wt", "śr"];

// TODO: 8. Zadeklaruj tablicę zawierajacą zmienne różnego typu

var tablica2=["pon", 23 , false ];

// TODO: 9. Zadeklaruj obiekt o nazwie person zawierajacy pola:
//  - firstName
//  - lastName
//  - age
//  - country

var person = {
    firstName: "Jan",
    lastName: "Nowak",
    age: 35,
    country: "Poland"
};

// TODO: 10. Sprawdź typ co najmniej jeden zmiennej z poprzednich zadań

typeof(person) //object
typeof(tablica2) //object
typeof(h) //undefined
typeof(prawda) //boolean
typeof(x) //number
typeof(myName) //string

// TODO: 11. Nadpisz wartość dowolnej zmiennej zadeklarownej w poprzednim zadaniu

x=5
y=7

// TODO: 12. wyswietl w konsoli dane obiektu person w sensownym zdaniu typu:
// Hej, jestem firstName lastName, mam age i jestem z country.

console.log("Hej, jestem ", person.firstName, " ", person.lastName, ",  mam ", person.age, " lat i jestem z ", person.country, ".");

// TODO: 13. nadpisz za pomocą dynamicznego klucza wartość country w obiekcie person
// na inny kraj, wyswietl w konsoli tekst w taki sam sposob jak zadanie wyzej.

person.country="Peru";
console.log("Hej, jestem ", person.firstName, " ", person.lastName, ",  mam ", person.age, " lat i jestem z ", person.country, ".");