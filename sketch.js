kaboom()

loadBean()

let score = 0

const player = add([
  sprite("bean"), //image
  pos(50,300), //position
  //body(), //gravity
  area(), //collision
])

const scoreLabel = add([
  text("Score: "+score),
  pos(20,20),
  z(1)
])
  
  
  
    
    if (Math.random() < 0.0005) {
      const bPos = a.pos.add(0,a.heigh/2)
    add([
      "bomb",
      pos(a.pos),
      rect(15,15),
      //origin("center"),
      area(),
      color(0,0,0),
      move(DOWN,400),
      cleanup()
    ])
   
   
    }

  onKeyPress("space",() => {
     moveLeft(0,100)
      pos(player.pos)
  })



  








  
  
  
  
  
