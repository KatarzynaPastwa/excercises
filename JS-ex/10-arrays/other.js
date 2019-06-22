
// 1. TODO: Posortuj tablicę względem powierzchni, malejąco

countries.sort((a, b) => (a.area > b.area) ? 1 : -1).reverse()


/* 2. TODO: Posortuj tablicę względem liczby ludności, rosnąco, i zwróć tylko
    tablicę obiektów, które mają tylko nazwy krajów i ich populację */

    countries.sort((a, b) => (a.population> b.population) ? 1 : -1)

    var sortedNameAndPopulationTable = countries.map(function(country){
        var newtab=[];
    newtab[0]=country.name;
    newtab[1]=country.population;
    return newtab
    })

// 3. TODO: Dla każdego, zawołaj poniższą funkcję:
function helloFromCountry(country) {
    console.log('Pozdrowienia z ' + country.name);
}


countries.forEach(function helloFromCountry(country){
    console.log('Pozdrowienia z ' + country.name);
})

// 4. TODO: Znajdź kraj, którego domena to ".cn"

var theCountryWithCnDomene = countries.filter(function(country){
    if(country.topLevelDomain == ".cn"){
        console.log(country.name) 
    }
})

// 5. TODO: Zwróć sumę populacji krajów, które mają za sąsiada Polskę

// 6. TODO: Sprawdź, czy wszyscy sąsiedzi Chin, mają razem populację większą niż Chiny (zadanie na szóstkę!)
/* 7. aTODO: Dana jest tablica users. Napisz funkcję, która jako parametr przyjmuje
      ID usera i usuwa element o usera o zadanym ID. */

var users = [
    { id: 1, name: 'John'},
    { id: 5, name: 'Monica'},
    { id: 12, name: 'Luke'},
    { id: 17, name: 'Mike'}
];
