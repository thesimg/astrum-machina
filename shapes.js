function hexagon(x, y, radius, rot) {
    push();
    translate(x, y);
    rotate(rot);
    const rotAngle = 360 / 6;
    beginShape()
    for (let i = 0; i < 6; i++) {
        const thisVertex = pointOnCircle(0, 0, radius, i * rotAngle)
        vertex(thisVertex.x, thisVertex.y)
    }
    endShape(CLOSE)
    pop();
}

function circagon(x, y, radius) {
    ellipse(x, y, radius * 2, radius * 2);
}

function blob(x, y, radius){
    translate(width / 2, height / 2)
  beginShape();
  for (var k = 0; k < n; k++) {
    var perl = 1.4 / 1 *
      (noise(3 + 0.7 * cos(TWO_PI / n * k), 3 + 0.7 * sin(TWO_PI / n * k), z) - 0.5);
    var d = r * (1 + perl);
    vertex(d * cos(TWO_PI / n * k), d * sin(TWO_PI / n * k));
  }

  endShape(CLOSE);
  z = z + 0.008;
}