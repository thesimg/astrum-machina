var seed;
function setup() {
  const myCanvas = createCanvas(1000, 1000);
  myCanvas.parent('canvasDiv');
  background(40);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();

  seed = getUrlParameter('seed') || rand(9999999999);
  randomSeed(seed);
  print("seed: " + seed);
  print("url: " + getUrlParameter('seed'));
  print(seed);
}

function draw() {
  background(40);
  back(rand(2));
  fill(0, 230);
  rect(width / 2, height / 2, width + 20, height + 20)
  
  fill(15);
  textFont("Source Code Pro", 40);
  textAlign(CENTER);
  text(seed, random(100, 900), random(100, 900));

  star(random(0, 400), random(0, 400), random(0.5, 2), rand(360));
  star(random(500, 900), random(500, 900), random(0.5, 2), rand(360));

  if(frameCount > 10){
    noLoop();
  }
}

function mousePressed(){
  if(mouseX > 0 && mouseX < width){
    if(mouseY > 0 && mouseY < height){
      save("AM" + seed + ".png");
    }
  }
}