// 1. TODO. Wyłap kraje, których powierzchnia jest większa niż 1000000 km2 lub mniejsza niż 30000 km2

var countriesArea1=countries.filter(function(country){
if ( country.area > 1000000 && country.area < 30000){
    console.log(country.name)
} 
});

// 2. TODO. Wyłap kraje, których powierzchnia jest mniejsza niż 5000000 km2 i liczba ludności większa od 10 mln.

var countriesAreaAndPeople=countries.filter(function(country){
    if ( country.area < 5000000 && country.population > 10000000){
        console.log(country.name)
    } 
    });
    

// 3. TODO. Wyłap kraje, które mają co najmniej 3 sasiądów
var countriesBorders=countries.filter(function(country){
    if ( country.borders.length >3 ){
        console.log(country.name)
    } 
    });
// 4. TODO. Wyłap kraje, których region to europa

var countriesRegion=countries.filter(function(country){
    if ( country.region == "Europe" ){
        console.log(country.name)
    } 
    });

// 5. TODO. Wyłap kraje, których stolica zaczna się na literę przekazaną w parametrze

function countriesCapital(letter){
countries.filter(function(country){
    if(country.capital[0]==letter){
        console.log(country.name)
    }
})
}

// 7. TODO. Wyłap kraje, które za sasiąda mają Niemców

var germanNeighbours=countries.filter(function(country){
    if ( country.borders.some(x => x=="DEU")  ){
        console.log(country.name)
    } 
    });


// 8. TODO: Sprawdź, czy czy jakikolwiek kraj ma stolicę na literę "Y"

 var countryCapitalY=countries.filter(function(country){
        if(country.capital[0]=="Y"){
            console.log(country.name)
        }
    })

// 9. TODO: Sprawdź, czy wszystkie kraje mają populację powyżej 50 tys.

var countriesPopulation=countries.filter(function(country){
    if ( country.population > 50000){       
    } 
    });