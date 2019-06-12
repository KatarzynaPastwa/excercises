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

let head = {
  x: 4 * SIZE,
  y: 2 * SIZE
}

const snake = [
  head,
  { x: 3 * SIZE, y : 2 * SIZE},
  { x: 2 * SIZE, y : 2 * SIZE}
]

drawRect(0, 0, SIZE * 20, SIZE * 20, '#eee')

// Rysowanie weza, sklada sie z 3 czesci, głowy i dwoch dodatkowych
//drawRect(snake[0].x, snake[0].y, SIZE, SIZE)
//drawRect(snake[1].x, snake[1].y, SIZE, SIZE)
//drawRect(snake[2].x, snake[2].y, SIZE, SIZE)

snake.forEach(part =>{
    drawRect(part.x, part.y, SIZE, SIZE)
})

let dx = 1;
let dy = 0;

function moveSnake(){
    head=snake[0]
    let lastPart = snake.pop()
    lastPart.x = head.x + SIZE * dx
    lastPart.y = head.y + SIZE * dy
    snake.unshift(lastPart)  
}

function cleanCanvas(){
    drawRect(0,0,20*SIZE,20*SIZE, '#eee')
}

function drawSnake(){
    snake.forEach(part =>{
        drawRect(part.x, part.y, SIZE, SIZE)
     })
}


setInterval(() => {

    moveSnake()
    cleanCanvas()
    drawSnake()

},300
)




body.addEventListener('keydown', event =>{

    const isMovingRight = dx===1 && dy===0
    const isMovingLeft = dx===-1 && dy===0
    const isMovingDown = dx===0 && dy===1
    const isMovingUp = dx===0 && dy===-1

    if (event.key ==='ArrowRight'&& !isMovingLeft){
        dx=1
        dy=0
    } else if (event.key ==='ArrowLeft' && !isMovingRight){
        dx=-1
        dy=0
    } else if (event.key ==='ArrowDown' && !isMovingUp){
        dx=0
        dy=1
    } else if (event.key ==='ArrowUp'&& !isMovingDown){
        dx=0
        dy=-1
    }

})

