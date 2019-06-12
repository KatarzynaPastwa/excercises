const SIZE = 30

const body = document.querySelector('body')
const canvas = document.createElement('canvas')
body.append(canvas)

canvas.setAttribute('width', `${20 * SIZE}px`)
canvas.setAttribute('height', `${20 * SIZE}px`)

const ctx = canvas.getContext('2d')

function drawRect (x, y, width, height, color = 'green') {
  ctx.fillStyle = color
  ctx.fillRect(x, y, width, height)
}

let head
let snake
let dx
let dy
let food
let intervalId
let timeout = 300

function moveSnake() {
  const head = {
    x: snake[0].x + SIZE * dx,
    y: snake[0].y + SIZE * dy
  }

  snake.unshift(head)

  if (food.x === head.x && food.y === head.y) {
    createFood()
    loop()
  } else {
    snake.pop()
  }
}

function cleanCanvas() {
  drawRect(0, 0, 20 * SIZE, 20 * SIZE, '#eee')
}

function drawSnake() {
  snake.forEach(part => {
    drawRect(part.x, part.y, SIZE, SIZE)
  })
}

function drawFood() {
  drawRect(food.x, food.y, SIZE, SIZE, 'red')
}

resetGame()
loop()

body.addEventListener('keydown', event => {
  const isMovingRight = dx === 1 && dy === 0
  const isMovingLeft = dx === -1 && dy === 0
  const isMovingDown = dx === 0 && dy === 1
  const isMovingUp = dx === 0 && dy === -1

  if (event.key === 'ArrowRight' && !isMovingLeft) {
    dx = 1
    dy = 0
  } else if(event.key === 'ArrowLeft' && !isMovingRight) {
    dx = -1
    dy = 0
  } else if(event.key === 'ArrowUp' && !isMovingDown) {
    dx = 0
    dy = -1
  } else if(event.key === 'ArrowDown' && !isMovingUp) {
    dx = 0
    dy = 1
  }
  console.log('dx: ', dx, ' dy: ', dy)
})

function randomNumber(min, max) {
  return Math.round((Math.random() * (max-min) + min) / SIZE) * SIZE;
}

function loop () {
  if (intervalId !== undefined) {
    timeout -= 10
    clearInterval(intervalId)
  }
  intervalId = setInterval(() => {
    moveSnake()
    if (collision()) {
      resetGame()
    }
    cleanCanvas()
    drawScore()
    drawFood()
    drawSnake()
  }, timeout)
}



function createFood () {
  const x = randomNumber(0, 600 - SIZE)
  const y = randomNumber(0, 600 - SIZE)

  const canDrawFood = !snake.some(part => {
    return part.x === x && part.y === y
  })

  if (!canDrawFood) {
    createFood()
  }

  food = {
    x,
    y
  }
}

function collision () {
  const [ head, ...tail ] = snake
  const selfEating = tail.some(part => {
    return part.x === head.x && part.y === head.y
  })

  const touchingWall = head.x < 0 || head.y < 0 || head.x > 19 * SIZE || head.y > 19 * SIZE

  return selfEating || touchingWall
}

function resetGame () {
  // 1. 
  head = {
    x: 4 * SIZE,
    y: 2 * SIZE
  }

  snake = [
    head,
    { x: 3 * SIZE, y : 2 * SIZE},
    { x: 2 * SIZE, y : 2 * SIZE}
  ]

  dx = 1
  dy = 0

  timeout = 300

  createFood()
}

function drawScore () {
  ctx.fillStyle = '#ddd'
  ctx.font = '120px Arial'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText((snake.length - 3) * 10, 10 * SIZE, 10 * SIZE, 500)
}