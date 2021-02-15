function shade() {
    return 150 + rand(105);
}

function rand(max) {
    return round(random() * max);
}

function pointOnCircle(x, y, radius, angle) {
    const posX = x + radius * cos(angle)
    const posY = y + radius * sin(angle)
    return createVector(posX, posY)
}


const elements = {
    lines: {
        max: 2,
        weight: 90,
        draw() {
            if (rand(100) < elements.lines.weight) {
                for (var i = 0; i < rand(elements.lines.max); i++) {
                    stroke(shade());
                    strokeWeight(0.5 + random(1));
                    lines(200, 200, 4 + rand(6) * 2, 0, rand(1) + 0.5);
                }
            }
        }
    },
    circles: {
        max: 1,
        weight: 80,
        fillWeight: 20,
        draw() {
            if (rand(100) < elements.circles.weight) {
                for (var i = 0; i < rand(elements.circles.max); i++) {
                    if (rand(100) < elements.circles.fillWeight) {
                        fill(shade(), 25+rand(100));
                        noStroke();
                    } else {
                        stroke(shade());
                        strokeWeight(0.5 + random(1))
                        noFill();
                    }
                    circles(200, 200, 4 + rand(6) * 2, 0);
                }
            }
        }
    },
    hexagons: {
        max: 1,
        weight: 70,
        draw() {
            if (rand(100) < elements.hexagons.weight) {
                if (rand(100) < elements.circles.fillWeight) {
                    fill(shade(), 25+rand(100));
                    noStroke();
                } else {
                    stroke(shade());
                    strokeWeight(0.5 + random(1))
                    noFill();
                }
                for (var i = 0; i < rand(elements.hexagons.max); i++) {
                    hexagons(200, 200, 4 + rand(6) * 2, 0);
                }
            }
        }
    },
    outline: {
        weight: 100,
        shape: 1,
        fillWeight: 20,
        width: 140,
        draw() {
            if (rand(100) < elements.outline.weight) {
                if (rand(100) < elements.outline.fillWeight) {
                    fill(shade(), 25+rand(100));
                } else {
                    noFill();
                    stroke(shade());
                    strokeWeight(rand(1) + 0.5);
                }
                let randWidth = 50 + rand(elements.outline.width);
                switch (rand(elements.outline.shape)) {
                    case 0:
                        ellipse(200, 200, randWidth * 2, randWidth * 2);
                        break;
                    case 1:
                        hexagon(200, 200, randWidth, 60);
                        break;
                }
            }
        }
    },
    generate: {
        gen() {
            elements.outline.draw();
            elements.lines.draw();
            elements.circles.draw();
            elements.hexagons.draw();
        },
    }
}

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


function lines(x, y, amount, rot, weight) {
    const rotAngle = 360 / amount;
    const radCap = rand(100);
    const radius = 15 + rand(75);
    let radRand;

    push();
    translate(x, y);
    rotate(rot);

    strokeWeight(weight);
    stroke(shade());
    strokeCap(SQUARE);

    if (rand(1) === 0) {
        radRand = rand(40);
    } else {
        radRand = -20;
    }
    for (let i = 0; i < amount; i++) {
        rotate(rotAngle);
        line(radius, 0, radius + radCap + radRand, 0);
    }
    pop();
}

function circles(x, y, amount, rot) {
    const lineWeight = 1 + rand(1);
    strokeWeight(lineWeight);
    push();
    translate(x, y);
    const rotAngle = 360 / amount;
    const radCap = rand(100);
    const radius = 15 + rand(75);

    stroke(shade());
    rotate(rot);
    for (let i = 0; i < amount; i++) {
        rotate(rotAngle);
        ellipse(radius + radCap, 0, 20, 20);
    }
    pop();
}

function hexagons(x, y, amount, rot) {
    const lineWeight = 1 + rand(1);
    strokeWeight(lineWeight);
    push();
    translate(x, y);
    const rotAngle = 360 / amount;
    const radCap = rand(100);
    const radius = 15 + rand(75);

    stroke(shade());
    rotate(rot);
    for (let i = 0; i < amount; i++) {
        rotate(rotAngle);
        if (rand(1) === 0) {
            hexagon(radius + radCap, 0, 20, 0);
        } else {
            hexagon(radius + radCap, 0, 20, 30);
        }
    }
    pop();
}