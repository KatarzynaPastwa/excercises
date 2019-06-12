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
let food;

function moveSnake(){

   const head={
       x: snake[0].x + SIZE * dx,
       y: snake[0].y + SIZE * dy
   }

    snake.unshift(head)

    if (food.x === head.x && food.y===head.y){
        createFood()
    }else{
        snake.pop()
    }


}

function cleanCanvas(){
    drawRect(0,0,20*SIZE,20*SIZE, '#eee')
}

function drawSnake(){
    snake.forEach(part =>{
        drawRect(part.x, part.y, SIZE, SIZE)
     })
}


function drawFood(){
    drawRect(food.x, food.y, SIZE, SIZE, 'red')
}



createFood()




setInterval(() => {

    moveSnake()
    cleanCanvas()
    drawSnake()
    drawFood()

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


function randomNumber(min, max){
    return Math.round( (Math.random() * (max-min) + min ) / SIZE) *SIZE;
}



function createFood(){

    const x =randomNumber(0,600-SIZE)
    const y =randomNumber(0,600-SIZE)

    const canDrawFood = !snake.some(part => {
        return part.x === x  && part.y === y
    })

    if (!canDrawFood){
        createFood()
    }

    food={
        x,
        y
    }
   

}



