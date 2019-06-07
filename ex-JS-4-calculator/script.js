let display = document.getElementById('display');
display.disabled=true;

let operators = document.getElementsByClassName('operator');
operators = Array.from(operators)

let numbers = document.getElementsByTagName('button')   //do zmiennej numbers przypisuje wszystkei typy buttony
numbers = Array.from(numbers).filter((value) => {       // no zmiennej numbers przypisuje tablice 
   let number = Number(value.textContent)           //zapytac sie KACPRA!!!
   if (!isNaN(number)) {
       return true
   } else {
       return false
   }
})

console.log(numbers);




//TRAVERSING od document do przycisku plus 


let divs = Array.from(document.firstElementChild.children[1].children).filter(element => element.tagName === 'DIV');

//HACK -> nie zamienione z powrtoem z tablicy na kolekcje


divs[4].lastElementChild.previousElementSibling


// Creating AC button


let acButton = document.createElement('button')
acButton.innerHTML = 'AC'

let displayParent = display.parentElement

        //displayParent.append(acButton)   ---> teraz wyswietlioby mi sie drugi raz AC na przysisku


        // let body = display.parentElement.parentElement //body


// ROBIENIE IKROPKI


let dotButton = document.createElement('button')
dotButton.innerHTML = '.'

let lastRowButton = document.firstElementChild.lastElementChild.children[4];


// lastRowButton.append(dot) --- > doda mi kropkę na końcu

let zeroButton =lastRowButton.firstElementChild;
lastRowButton.insertBefore(dotButton, zeroButton.nextElementSibling) // teraz kropka jest meidzy 0 a + ale nei ma spacji
