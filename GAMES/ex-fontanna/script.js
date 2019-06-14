console.log('Particles!')
const G = 0.1

function randomNumber (min, max) {
  return (Math.random() * (max-min) + min)
}

function Particle (x, y, color = "white") {
  this.initX = x
  this.initY = y
  this.reset()
  this.r = 25
  this.color = color
  this.life = 100
}

Particle.prototype = {
  draw: function (context) {
    context.fillStyle = this.color
    context.beginPath()
    context.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
    context.fill()
  },
  reset: function () {
    this.x = this.initX
    this.y = this.initY
    this.vx = randomNumber(-10, 10)
    this.vy = randomNumber(-7, 0.5)
    this.r = randomNumber(2,10)
    this.c1 = randomNumber(0,255)
    this.color=`rgb(${randomNumber(0,255)},${randomNumber(0,255)},${randomNumber(0,255)})`
    

  },
  move: function () {
    this.x = this.x + this.vx
    this.y = this.y + this.vy
    this.vy = this.vy + G
  },
  changeColor: function (c) {
    this.color = c
  }
}

function Lab (width, height, color, numberOfParticles = 1) {
  this.width = width
  this.height = height
  this.color = color
  this.numberOfParticles = numberOfParticles
  //const particles = [new Particle(this.width / 2, 100, "yellow")]
  //this.particles = particles

  this.createCanvas()
  this.generateParticles()
}

Lab.prototype = {
    generateParticles: function(){
    
        const particles = [] 
        for (let i =0; i < this.numberOfParticles; i++){
            particles.push(new Particle(this.width/2, 100))
        }
        this.particles=particles

    },

  clearCanvas: function() {
    this.context.fillStyle = this.color
    this.context.fillRect(0, 0, this.width, this.height)
  },
  createCanvas: function () {
    const canvas = document.createElement('canvas')
    canvas.setAttribute('width', this.width)
    canvas.setAttribute('height', this.height)
    this.context = canvas.getContext('2d')
    const body = document.querySelector('body')
    body.append(canvas)
    this.clearCanvas()
  },
  simulate: function(time) {
    this.particles[0].move()
    this.clearCanvas()
    this.particles[0].draw(this.context)
    if (this.isOutOfLab(this.particles[0])) {
      this.particles[0].reset()
    }
    requestAnimationFrame(this.simulate.bind(this))
  },
  isOutOfLab: function(particle) {
    return (particle.x - particle.r > this.width ||
      particle.x + particle.r < 0 ||
      particle.y + particle.r < 0 ||
      particle.y - particle.r > this.height
    )
  }
}

const lab = new Lab(600, 500, "#ddd", 2)
lab.simulate()

const lab2 = new Lab(300, 300, "#999", 1)
lab2.simulate()


//setInterval(lab.simulate(), 3000);
