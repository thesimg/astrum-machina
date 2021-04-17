var seed;
let stars = [];
let elements = [];

let buffer;

function setup() {
  const myCanvas = createCanvas(1000, 1000);
  myCanvas.parent('canvasDiv');
  background(40);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();

  buffer = createGraphics(1000, 1000);

  seed = getUrlParameter('seed') || rand(9999999999);
  randomSeed(seed);
  noiseSeed(seed);
  print("seed: " + seed);
  print("url: " + getUrlParameter('seed'));
  print(seed);
}


function draw() {
  buffer.noStroke();
  buffer.background(40);
  back(rand(2));
  buffer.fill(0, 200);
  buffer.rectMode(CENTER);
  buffer.rect(buffer.width / 2, buffer.height / 2, buffer.width + 20, buffer.height + 20);

  buffer.fill(40);
  buffer.textFont("Source Code Pro", 40);
  buffer.textAlign(CENTER);
  buffer.text(seed, random(100, 900), random(100, 900));


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
    image(buffer, 0, 0, 500, 500);
    noLoop();
  }else{
    strokeWeight(5);
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    textSize(15);
    textFont("Source Code Pro", 40);
    fill(40);
    rect(250, 250, 500+20, 500+20);
    stroke(255, 240-frameCount*4);
    fill(255, 180-frameCount*3);
    ellipse(250, 250, 100, 100);
    fill(40, frameCount*3+100);
    stroke(40, 40, 40, frameCount*3+100);
    ellipse(250, 250, frameCount*2, frameCount*2);
    fill(255);
    textSize(30);
    noStroke();
    text("Generating...", 250, 250-100);
  }
}

function mousePressed() {
  if (mouseX > 0 && mouseX < 500) {
    if (mouseY > 0 && mouseY < 500) {
      save(buffer, "AM" + seed + ".png");
    }
  }
}