# Flappy-Bird
kaboom()

loadBean()
loadSprite("flappy","download smaller.png")
loadSprite("background","images (1).jfif")
loadSprite("fireworks","firework backgrond.jfif")

scene ("game", () => {
  


let score = 0
let highScore = 0
const SPEED = 320
const PIPE_OPEN = 240
const PIPE_MIN = 60
const CEILING = -60
let RIGHT = 250
const jump = 600
let gravity = 3200

const player = add([
  sprite("flappy","download smaller.png"), //image
  pos(50,50), //position
  body(), //gravity
  area(),//collision
  scale (0.45),
  z(1)
])

const background = add([
  sprite("background",{
    width:width()+100,
    height:height()
  }),
  pos(0,0),
])

let scoreLabel = add([
  text("0"),
  pos(250,0),
  z(1),
  fixed,
])

let highScoreLabel = add([
  text("0"),
  pos(250,0),
  z(1),
  fixed,
])

onKeyPress("space",() => {
  player.jump(jump)
})
//kaboomjs

	// kaboomjs
function spawnPipe() {
let h1 = rand(PIPE_MIN, height() - PIPE_MIN - PIPE_OPEN)
let h2 = height() - h1 - PIPE_OPEN

add([
  pos(width(), 0),
  rect(64, h1),
  color(0, 127, 5),
  outline(4),
  area(),
  move(LEFT, SPEED),
  cleanup(),
  "pipe",
])
add([
  pos(width(), h1 + PIPE_OPEN),
  rect(64, h2),
  color(0, 127, 5),
  outline(4),
  area(),
  move(LEFT, SPEED),
  cleanup(),
  "pipe",
  { passed: false, },
 ])
}
  
player.onCollide("pipe", () => {
  go ("lose")
})
  
player.onUpdate(() => {
if (player.pos.y >= height() || player.pos.y <= CEILING) {
  go ("lose")
 }
})
  
onUpdate("pipe", (p) => {
if (p.pos.x + p.width <= player.pos.x && p.passed === false) {
  addScore()
  addHighScore()
  p.passed = true
  }
})
  loop (1, () => {
  spawnPipe()
 })
  
function addScore() {
  score += 1
  scoreLabel.text = score
 }

function addHighScore() {
  highScore += 1
  highScoreLabel.text = highScore
 }

scene ("lose", () => {
const fireworks = add([
  sprite("fireworks",{
    width:width(),
    height:height()
  }),
  pos(0,0),
])

/*add([
  text(highScore),
  pos(width() / 2, height() / 2 - 150 ),
  origin("center"),
  color(RED)
])*/
  
if(score > highScore){
  highScoreLabel.text = scoreLabel.text
  add([
  text(highScore),
  pos(width() / 2, height() / 2 - 150 ),
  origin("center"),
  color(RED)
])
}
  
add([
  text("NEW SCORE"),
  pos(width() / 2, height() / 2 ),
  color(225,100,0),
  origin("center")
  
])
  
add([
  text(score),
  pos(width() / 2, height() / 2 + 108),
  origin("center"),
  color(RED)
])

onKeyPress("space", () => go("game"))
})
  
})

go ("game")




  
  
  
  
  
