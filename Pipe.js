// constructor function that creates the top and bottom pipe
function Pipe(){
  this.top = random(height/2)
  this.bottom = random(height/2) // randomise pipe sizes
  this.x = width // where the pipe starts with an X position
  this.w = 40 // The width of the pipe
  this.speed = 4
// where we draw the pipe
  this.show = function(){
    fill(255)
    rect(this.x, 0, this.w, this.top)// This is the top pipe
    rect(this.x, height-this.bottom, this.w, this.bottom)// This is the bottom pipe
  }

  //an update function that updates the pipe
  this.update = function (){
this.x -= this.speed
}
}
