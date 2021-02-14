function setup() {
  createCanvas(400, 400);
  background(40);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(40);

  star();

  noLoop();
}

const elements = {
  lines: {
    max: 2,
    min: 0,
    weight: 20,
    stroke: 1+rand(5),
  },
  circles: {
    max: 3,
    min: 0,
    weight: 20,
    fillWeight: 20,
    stroke: 1+rand(5),
  },
  pentagons: {
    max: 3,
    min: 0,
    weight: 20,
    stroke: 1+rand(5),
  },
  hexagons: {
    max: 3,
    min: 0,
    weight: 20,
    stroke: 1+rand(5),
    
  },
  outline: {
    weight: 60,
    shape: rand(2),
  }
}

function star() {
  const shape = rand(0);
  const weight = 1+rand(5);
  let repeat;
  let repeat2;
  let gen = rand(2);

  noFill();
  strokeWeight(weight);
  stroke(shade());

  switch (shape) {
    case 0:
      repeat = (1+rand(5))*2;
      repeat2 = (1+rand(5))*2;

      switch(gen){
        case 0:
          circagon(200, 200, 100);
          lines(200, 200, repeat);
          circles(200, 200, repeat);
        break;
        case 1:
          circagon(200, 200, 100);
          lines(200, 200, repeat);
          circles(200, 200, repeat2);
        break;
        case 2:
          circagon(200, 200, 100);
          lines(200, 200, repeat2);
          circles(200, 200, repeat);
        break;
      }
      
      
      break;
    case 1:
      repeat = (1+rand(1))*6;
      repeat2 = (1+rand(1))*6;

      switch(gen){
        case 0:
          hexagon(200, 200, 100, 60);
          lines(200, 200, repeat);
          circles(200, 200, repeat);
        break;
        case 1:
          hexagon(200, 200, 100, 60);
          lines(200, 200, repeat);
          circles(200, 200, repeat2);
        break;
        case 2:
          hexagon(200, 200, 100, 60);
          lines(200, 200, repeat2);
          circles(200, 200, repeat);
        break;
      }
      break;
    case 2:
      repeat = (1+rand(1))*5;
      repeat2 = (1+rand(1))*5;

      switch(gen){
        case 0:
          pentagon(200, 200, 100, 54);
          lines(200, 200, repeat, 18);
          circles(200, 200, repeat, 18);
        break;
        case 1:
          pentagon(200, 200, 100, 54);
          lines(200, 200, repeat, 18);
          circles(200, 200, repeat2, 18);
        break;
        case 2:
          pentagon(200, 200, 100, 54);
          lines(200, 200, repeat, 18);
          circles(200, 200, repeat, 18);
        break;
      }
      break;
  }
}