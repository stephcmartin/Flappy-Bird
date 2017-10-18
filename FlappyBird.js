let bird
let pipes = []

function setup() {
 createCanvas(500, 500)
 bird = new Bird ()
 pipes.push(new Pipe())
}

function draw() {
  background(51)
  bird.update()
  bird.show()
  for (i = 0; i < pipes.length; i++){
    pipes[i].show()
    pipes[i].update()
  }
}
// When user presses space bar it moves the bird
function keyPressed(){
if (key == ' ') {
bird.up()
}
}
