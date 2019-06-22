var names = ['Janek', 'Bolek', 'Rysiu'];

// 1. TODO. Do tablicy names dodaj parę imion na koniec tablicy

names.push("Ola", "Ala")

// 2. TODO. Z tablicy names usuń imię z końca tablicy

names.pop()

// 3. TODO. Z tablicy names usuń imię z początku tablicy

names.shift()

// 4. TODO. Do tablicy names dodaj parę imion na początek tablicy

names.unshift("Roland", "Grzesiu", "Kazik")

// 5. TODO: Do tablicy names, dołącz tablicę englishNames (zmodyfikuj)
var englishNames = ['Monica', 'Jessica', 'John'];

names=names.concat(names, englishNames)
// 6. TODO: Skopiuj tablicę names bez referencji

console.log(names.join(", "))
