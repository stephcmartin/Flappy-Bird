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
