var seed;
let stars = [];
let elements = [];

function setup() {
  const myCanvas = createCanvas(1000, 1000);
  myCanvas.parent('canvasDiv');
  background(40);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();

  seed = getUrlParameter('seed') || rand(9999999999);
  randomSeed(seed);
  noiseSeed(seed);
  print("seed: " + seed);
  print("url: " + getUrlParameter('seed'));
  print(seed);
}


function draw() {
  noStroke();
  background(40);
  back(rand(2));
  fill(0, 200);
  rect(width / 2, height / 2, width + 20, height + 20);

  fill(40);
  textFont("Source Code Pro", 40);
  textAlign(CENTER);
  text(seed, random(100, 900), random(100, 900));


  if (rand(1) === 0) {
    star(random(1000), random(1000), random(1, 2), random(360));
  } else {
    star(random(1000), random(1000), random(1, 2), random(360));
    star(random(1000), random(1000), random(1, 2), random(360));
  }

  let elementRand = rand(2);
  if (elementRand === 0) {
    element(random(1000), random(1000), random(100, 500));
  } else if (elementRand === 1) {
    element(random(1000), random(1000), random(100, 500));
    element(random(1000), random(1000), random(100, 500));
  } else if (elementRand === 2) {
    element(random(1000), random(1000), random(100, 500));
    element(random(1000), random(1000), random(100, 500));
    element(random(1000), random(1000), random(100, 500));
  }

  //print("FRAME "+frameCount);
  if (frameCount >= 60) {
    print("If you see this I hope you have a good day");
    print("Also you should go follow @astrummachina :)");
    noLoop();
  }else{
    fill(40);
    rect(width/2, height/2, width+20, height+20);
    stroke(255, 240-frameCount*4);
    fill(255, 180-frameCount*3);
    ellipse(width/2, height/2, 100, 100);
    fill(40, frameCount*3+100);
    stroke(40, 40, 40, frameCount*3+100);
    ellipse(width/2, height/2, frameCount*2, frameCount*2);
    fill(255);
    textSize(30);
    noStroke();
    text("Generating...", width/2, height/2-100);
  }
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width) {
    if (mouseY > 0 && mouseY < height) {
      save("AM" + seed + ".png");
    }
  }
}