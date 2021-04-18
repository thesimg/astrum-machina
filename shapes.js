function hexagon(x, y, radius, rot) {
  buffer.push();
  buffer.translate(x, y);
  buffer.rotate(rot);
  const rotAngle = 360 / 6;
  buffer.beginShape()
  for (let i = 0; i < 6; i++) {
    const thisVertex = pointOnCircle(0, 0, radius, i * rotAngle)
    buffer.vertex(thisVertex.x, thisVertex.y)
  }
  buffer.endShape(CLOSE)
  buffer.pop();
}

function circagon(x, y, radius) {
  buffer.ellipse(x, y, radius * 2, radius * 2);
}

function blob(x, y, r) {
  var n = 200;
  var z = 0;
  buffer.push();
  buffer.translate(x, y);
  buffer.angleMode(DEGREES);
  buffer.rotate(noise(x, y)*270);
  angleMode(RADIANS);
  buffer.beginShape();
  for (var k = 0; k < n; k++) {
    var perl = 1.4 / 1 *  (noise(3 + 0.7 * cos(TWO_PI / n * k), 3 + 0.7 * sin(TWO_PI / n * k), z) - 0.5);
    var d = r * (1 + perl);
    buffer.vertex(d * cos(TWO_PI / n * k), d * sin(TWO_PI / n * k));
  }

  buffer.endShape(CLOSE);
  z = z + 0.008;

  angleMode(DEGREES);
  buffer.angleMode(DEGREES);
  buffer.noStroke();
  buffer.pop();
}