let bird

function setup() {
 createCanvas(500, 500)
 bird = new Bird ()
}

function draw() {
  background(51)
  bird.update()
  bird.show()
}
// When user presses space bar it moves the bird
function keyPressed(){
if (key == ' ') {
bird.up()
}
}
