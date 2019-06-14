console.log('Hello!!')

const title = document.createElement('h1')
title.innerText = "Todo List"

console.log(title)

const todoInputElement = document.getElementById('todo-input')

console.log(todoInputElement)
// after wstawia za element
todoInputElement.before(title)

const todoItem = document.createElement('li')
todoItem.innerHTML = 'buy a milk <button>x</button>'

const todoItem2 = document.createElement('li')
todoItem2.innerHTML = 'buy a milk <button>x</button>'

console.log(todoItem)

const todoList = document.getElementById('todo-list')
console.log(todoList)

todoList.append(todoItem)
todoList.append(todoItem2)

const addButton = document.getElementById('todo-add-button')
console.log(addButton)

addButton.addEventListener('click', function(event) {
  console.log(todoInputElement.value)
  // Utworz element li
  const todoItem = document.createElement('li')
  // Ustaw jego tekst na taki jest jest w input.value
  todoItem.innerHTML = `${todoInputElement.value} <button>x</button>`
  // Dodaj nowo utworzony element do todo listy
  todoList.append(todoItem)
  // Wyzeruj wartosc input.value
  todoInputElement.value = ""
})
