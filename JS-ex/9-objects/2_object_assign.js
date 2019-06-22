/* 1. TODO. Dany jest obiekt superman i powers. Stworz nowy obiekt supermanWithPowers, nie modyfikując żadnego
z obiektów superman i powers) */

var superman = {
    origin: 'Krypton',
    alterEgo: 'Klark Kent'
};

var powers = {
    speed: 300,
    strength: 200
};


var supermanWithPowers = Object.assign({}, superman, powers)

/* 2. Puść pętlę po obiekcie supermanWithPowers i wyświetl w konsoli klucze oraz wartości.*/

var supTab=Object.keys(supermanWithPowers)
for(let i=0; i<supTab.length;i++){
  console.log(supTab[i])
}





/* 3. Z użyciem Object.keys stwórz tablicę o nazwie supermanKeys, która trzyma klucze obiektu
supermanWithPowers */

var supermanKeys=Object.keys(supermanWithPowers)

/* 4. Podepnij z CDN bibliotekę lodash w pliku index.html. Wykorzystaj metodę isEqual, do sprwadzenia czy obiekty
  woman i man mają te same wartości
 */

var man = {
    legs: 2,
    hasHands: true
};

var woman = {
    legs: 2,
    hasHands: true
};
