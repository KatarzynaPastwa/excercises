const WIDTH = 288
const HEIGHT = 512
const BASE_HEIGHT = 112
const BASE_WIDTH = 336
const MESSAGE_WIDTH = 184
const MESSAGE_HEIGHT = 267
let GRAVITY = 2
const canvas = document.createElement('canvas')
canvas.setAttribute('height', `${HEIGHT}px`)
canvas.setAttribute('width', `${WIDTH}px`)

let bird = {
  x: 20,
  y: 20,
  height: 24,
  width: 34
}

const body = document.querySelector('body')

body.append(canvas)

const ctx = canvas.getContext('2d')

let backgroundImage
let baseImage
let messageImage

backgroundImage = drawImage("background-day.png", 0, 0, WIDTH, HEIGHT, () => {
  baseImage = drawImage("base.png", 0, (HEIGHT - BASE_HEIGHT), BASE_WIDTH, BASE_HEIGHT, () => {
    messageImage = drawImage("message.png", (WIDTH - MESSAGE_WIDTH) / 2, (HEIGHT - MESSAGE_HEIGHT) / 2, MESSAGE_WIDTH, MESSAGE_HEIGHT)
  })
})

function drawImage (imageUrl, x, y, w, h, onload = () => {}) {
  const image = new Image()
  image.src = `assets/sprites/${imageUrl}`
  image.onload = function() {
    ctx.drawImage(image, x, y, w, h)
    onload()
  }
  return image
}

let isPlaying = false

canvas.addEventListener('click', () => {
  if (!isPlaying) {
    isPlaying = true
    loop(0)
  } else {
    bird.y = bird.y - 60
  }
})

let birdImageMid = drawImage('redbird-midflap.png')
let birdImageUp = drawImage('redbird-upflap.png')
let birdImageDown = drawImage('redbird-downflap.png')

let birdImages = [birdImageMid, birdImageDown, birdImageMid, birdImageUp]
let birdPosition = 0

let lastTime = 0 // need to count delta
let delta = 0 // lastTime - time -> should be delta
let flapTime = 0 // count deltas up to 600 and then flap
function loop (time) { // 300
  delta = time - lastTime // 16
  lastTime = time // 316
  flapTime += delta // 200 + 16

  // console.log(delta)
  // console.log(flapTime)
  if (isPlaying) {
    drawBackground()
    drawBase()
    birdFall()
    ctx.beginPath()
    ctx.moveTo(20,0)
    ctx.strokeStyle= 'red'
    ctx.lineTo(20, HEIGHT - BASE_HEIGHT - bird.height)
    ctx.stroke()
    if (bird.y < (HEIGHT - BASE_HEIGHT - bird.height)) {
      animateBird()
    } else {
      GRAVITY = 0
      ctx.drawImage(birdImages[birdPosition], bird.x, bird.y)
     
    }
  }
  requestAnimationFrame(loop)
}

function drawBackground() {
  ctx.drawImage(backgroundImage, 0, 0)
}

function drawBase() {
  ctx.drawImage(baseImage, 0, HEIGHT - BASE_HEIGHT)
}

function birdFall () {
  bird.y = bird.y + GRAVITY
}

function animateBird () {
  if (flapTime > 250) { // 266
    birdPosition += 1
    if (birdPosition > 3) {
      birdPosition = 0
    }
    flapTime = 0
  }
  ctx.drawImage(birdImages[birdPosition], bird.x, bird.y)
}
