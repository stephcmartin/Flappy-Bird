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
  }
}
