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

        //dotanie elmentu     
function addElement(element, text, target){                 // tworzymy jedna funkcje i potem ją wykorzystujemy 
    let HTMLElement = document.createElement(element)
    HTMLElement.innerText = text
    target.after(HTMLElement)
}        

   //  wykorzystanie tej funkcji:  wywoluje funckie: nazwafunkcji (typ np. 'button', z jaką nazwą np. '.', gdzie(zmienna) , np. zeroButton)


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
// zeroButton.after(dotButton) // ---> to samoco ponizsze, ale latfwiej ALE nie dziala na wszytskich przegladarkach, ta samo dziąła before
lastRowButton.insertBefore(dotButton, zeroButton.nextElementSibling) // teraz kropka jest meidzy 0 a + ale nei ma spacji
