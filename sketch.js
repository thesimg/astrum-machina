function setup() {
  createCanvas(1000, 1000);
  background(40);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  let stars = 2 + rand(2);
  let starsGenned = 0;
  background(40);
  back(rand(2));
  fill(0, 230);
  rect(width / 2, height / 2, width + 20, height + 20)
  
  for(var i = 0; i < stars; i++){
    star(rand(1000), rand(1000), random(0.5, 2), rand(360));
  }

  if(millis() > 2000){
    noLoop();
  }
}