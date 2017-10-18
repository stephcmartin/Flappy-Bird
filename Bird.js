function Bird() {
  this.y = height/2 // The Bird Will ONLY move along the Y Axis
  this.x = 64 // The Bird will be fixed
  this.gravity = 1 // the force that pushes the force down
  this.velocity = 0
  this.show = function (){
    fill(255)
    ellipse(this.x, this.y, 32, 32) // this makes the bird a circle
  }
  this.update = function (){
    this.velocity += this.gravity
    this.y += this.velocity // y is changed by velocity
// The bird stops if it gets to the bottom of the window
    if (this.y > height) {
// keep the bird on the screen
this.y = height
this.velocity = 0
    }
    // The bird stops if it gets to the top of the window
        if (this.y < 0) {
    // keep the bird on the screen
    this.y = 0
    this.velocity = 0
  }
  }
}
