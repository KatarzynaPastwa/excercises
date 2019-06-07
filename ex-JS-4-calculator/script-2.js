let display = document.getElementById("display")
display.disabled = true

// let operators = document.getElementsByClassName("operator")
let operators = document.querySelectorAll('.operator')
const o = document.querySelector('.operator')
operators = Array.from(operators)

let buttons = document.getElementsByTagName('button')
buttons = Array.from(buttons)
let numbers = buttons.filter((button) => {
  let number = Number(button.textContent)
  if (isNaN(number)) {
    return false
  } else {
    return true
  }
})
console.log(numbers)

// TRAVERSING od document do przycisku +
let divs = Array.from(document.firstElementChild.children[1].children)
  .filter(element => element.tagName === 'DIV')

// HACK
divs[4].lastElementChild.previousElementSibling

function addElement(element, text, target) {
  let htmlElement = document.createElement(element)
  htmlElement.innerText = text
  target.after(htmlElement)
  // target.after(htmlElement)
  // htmlElement.before(target)
  return htmlElement
}

// Create AC button
let acButton = addElement('button', 'AC', display)

let lastRowButtons = document.firstElementChild.children[1].children[4]
                  // document.firstElementChild.lastElementChild.children[4]
let zeroButton = lastRowButtons.firstElementChild
// Create dot button
let dotButton = addElement('button', '.', zeroButton)

numbers.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation()
    const number = event.target.innerText
    display.value = display.value + number
  })
})

operators.forEach((operator) => {
  const listener = (event) => {
    event.stopPropagation()
    const operator = event.target.innerText
    const displayValue = display.value
    const arrayOfOperators = ['+', '-', '/', '*']

    if(operator === '=') {
      display.value = eval(displayValue)
    }

    const hasOperator = arrayOfOperators.some(opr => {
      return displayValue.includes(opr)
    })
    if (hasOperator) {
      return
    } else {
      display.value = display.value + ' ' + operator + ' '
    }
  }
  operator.addEventListener('click', listener)
})

acButton.addEventListener('click', (event) => {
  display.value = ''
})

let body = document.querySelector('body')
body.addEventListener('click', () => {
  body.classList.toggle('light-background-color')
})
