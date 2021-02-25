function setup() {
  createCanvas(1000, 1000);
  background(40);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(40);
  back(1);
  fill(0, 230);
  rect(width/2, height/2, width+20, height+20)
  star(rand(1000), rand(1000), random(0.5, 2), rand(360));

  
}