var seed;
function setup() {
  createCanvas(1000, 1000);
  background(40);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();

  seed = getUrlParameter('seed') || rand(9999999999);
  randomSeed("seed: " + seed);
  print("url: " + getUrlParameter('seed'));
  print(seed);
}

function draw() {
  background(40);
  back(rand(2));
  fill(0, 230);
  rect(width / 2, height / 2, width + 20, height + 20)
  
  fill(15);
  textFont("Monospace", 40);
  textAlign(CENTER);
  text(seed, random(100, 900), random(100, 900));


  star(random(0, 400), random(0, 400), random(0.5, 2), rand(360));

  if(frameCount > 10){
    save("AM" + seed + ".png")
    noLoop();
  }
}