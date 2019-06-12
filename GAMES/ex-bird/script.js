const canvas = document.createElement('canvas')
canvas.setAttribute('height', '512px')
canvas.setAttribute('width', '288px')

const body = document.querySelector('body')

body.append(canvas)

const ctx = canvas.getContext('2d')

drawImage("background-day.png", 0, 0, 288, 512, () => {
  drawImage("base.png", 0, (512 - 112), 336, 112)
})

function drawImage (imageUrl, x, y, w, h, onload) {
  const image = new Image()
  image.src = `assets/sprites/${imageUrl}`
  image.onload = function() {
    ctx.drawImage(image, x, y, w, h)
    onload()
  }
}

