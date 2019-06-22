/* 1. TODO: stworz obiekt MyMath który posiada trzy metody: do liczenia wierzchołka Y, wierzchołka X oraz delty. Metody
wzory:  peekY = - delta/4a
        peekX = - a / 2b
        delta = b * b - 4 * a * c
        Wykorzystaj stworzony obiekt i wywołaj jego metody z odpowiednimi parametrami, sprwadz czy zwraca dobre wartości
 */
var a=1;
var b=2;
var c=3;
var delta = b * b - 4 * a * c;
var MyMath={

    peekY: function(){
        let pY=(delta/4*a);
        console.log(pY)
    };
    peekX: function(){
        let pX=(a / 2*b);
        console.log(pX)
    };
    delta: function(){
        console.log(delta);
    };
}