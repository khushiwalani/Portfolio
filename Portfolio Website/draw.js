function setup() {
    createCanvas(1525, 500);
    background(0);
  }
  
  function draw() {
    stroke(255);
    
    if (mouseIsPressed === true) {
      line(mouseX, mouseY, pmouseX, pmouseY);
      
    }
  }
  