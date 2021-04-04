function rand(max) {
    return round(random() * max);
}

function shade() {
    return 150 + rand(105);
}

function pointOnCircle(x, y, radius, angle) {
    const posX = x + radius * cos(angle)
    const posY = y + radius * sin(angle)
    return createVector(posX, posY)
}

function back(type) {
    switch (type) {
        case 0:
            switch (rand(3)) {
                case 0:
                    push();
                    translate(random(10), random(10));
                    for (var i = 0; i < 52; i++) {
                        for (var j = 0; j < 50; j++) {
                            fill(200);
                            rect(i * 20, j * 20, random(20), 10);
                        }
                    }
                    pop();
                    break;
                case 1:
                    push();
                    translate(random(10), random(10));
                    for (var i = 0; i < 52; i++) {
                        for (var j = 0; j < 50; j++) {
                            fill(200);
                            rect(i * 20, j * 20, 10, random(20));
                        }
                    }
                    pop();
                    break;
                case 2:
                    push();
                    translate(random(10), random(10));
                    for (var i = 0; i < 52; i++) {
                        for (var j = 0; j < 50; j++) {
                            fill(200);
                            rect(random(10) + i * 20, random(10) + j * 20, random(20), 10);
                        }
                    }
                    pop();
                    break;
                case 3:
                    push();
                    translate(random(10), random(10));
                    for (var i = 0; i < 52; i++) {
                        for (var j = 0; j < 50; j++) {
                            fill(200);
                            rect(random(10) + i * 20, random(10) + j * 20, 10, random(20));
                        }
                    }
                    pop();
                    break;
                    break;
            }
            break;
        case 1:
            switch (rand(9)) {
                case 0:
                    for (var x = 0; x < width; x += 10) {
                        for (var y = 0; y < height; y += 10) {
                            var c = 255 * noise(0.01 * x, 0.01 * y);
                            fill(c, 100 + random(155));
                            rect(x, y, 10, 10);

                        }
                    }
                    break;
                case 1:
                    for (var x = 0; x < width; x += 20) {
                        for (var y = 0; y < height; y += 20) {
                            var c = 255 * noise(0.01 * x, 0.01 * y);
                            fill(c, 100 + random(155));
                            rect(x, y, 10, 10);

                        }
                    }
                    break;
                case 2:
                    for (var x = 0; x < width; x += 20) {
                        for (var y = 0; y < height; y += 20) {
                            var c = 255 * noise(0.01 * x, 0.01 * y);
                            fill(c, 100 + random(155));
                            ellipse(x, y, 20, 20);

                        }
                    }
                    break;
                case 3:
                    for (var x = 0; x < width; x += 20) {
                        for (var y = 0; y < height; y += 20) {
                            var c = 255 * noise(0.01 * x, 0.01 * y);
                            fill(c, 100 + random(155));
                            ellipse(x + random(10), y + random(10), 20, 20);

                        }
                    }
                    break;
                case 4:
                    for (var x = 0; x < width; x += 10) {
                        for (var y = 0; y < height; y += 10) {
                            var c = 255 * noise(0.01 * x, 0.01 * y);
                            fill(c, 100 + random(155));
                            ellipse(x, y, random(10), random(10));

                        }
                    }
                    break;
                case 5:
                    for (var x = 0; x < width; x += 10) {
                        for (var y = 0; y < height; y += 10) {
                            var c = 255 * noise(0.01 * x, 0.01 * y);
                            fill(c, 100 + random(155));
                            rect(x, y, random(10), random(10));

                        }
                    }
                    break;
                case 6:
                    for (var x = 0; x < width; x += 20) {
                        for (var y = 0; y < height; y += 20) {
                            var c = 255 * noise(0.01 * x, 0.01 * y);
                            fill(c, 100 + random(155));
                            ellipse(x, y, random(20), random(20));

                        }
                    }
                    break;
                case 7:
                    for (var x = 0; x < width; x += 20) {
                        for (var y = 0; y < height; y += 20) {
                            var c = 255 * noise(0.01 * x, 0.01 * y);
                            fill(c, 100 + random(155));
                            rect(x, y, random(20), random(20));

                        }
                    }
                    break;
                case 8:
                    for (var x = 0; x < width; x += 20) {
                        for (var y = 0; y < height; y += 20) {
                            var c = 255 * noise(0.01 * x, 0.01 * y);
                            fill(c, 100 + random(155));
                            ellipse(x + random(10), y + random(10), random(20), random(20));

                        }
                    }
                    break;
                case 9:
                    for (var x = 0; x < width; x += 20) {
                        for (var y = 0; y < height; y += 20) {
                            var c = 255 * noise(0.01 * x, 0.01 * y);
                            fill(c, 100 + random(155));
                            rect(x + random(10), y + random(10), random(20), random(20));

                        }
                    }
                    break;
            }
            break;
        case 2:
            var x = 0;
            var y = 0;
            var gap = 75 + rand(75);
            push();
            
            switch (rand(1)) {
                case 0:
                    translate(width, 0);
                    rotate(90);
                    break;
            }
            translate(-50, 0);
            for (var i = 0; i < gap * 20; i++) {
                stroke(50+rand(100));
                strokeWeight(10);
                if (random(2) < 0.5) { // The if statement changes the direction of the lines.
                    line(x, y, x + gap, y + gap);
                } else {
                    line(x, y + gap, x + gap, y);
                }

                x = x + (gap / 3); //This allows the lines to go across the canvas.
                if (x > width+100) {
                    x = 0;
                    y = y + gap;
                }
            }
            pop();
            break;

    }
}

const elements = {
    lines: {
        id: "lines",
        max: 2,
        draw() {
            lines(0, 0, 4 + rand(6) * 2, 0, rand(1) + 0.5);

        }
    },
    dots: {
        id: "dots",
        max: 2,
        draw() {
            dots(0, 0, 6 + rand(10) * 2, 3 + rand(5), 0, rand(3) + 2, random(0.5));
        }
    },
    circles: {
        id: "circles",
        max: 2,
        fillWeight: 20,
        draw() {
            if (rand(100) < elements.circles.fillWeight) {
                fill(shade(), 25 + rand(100));
                noStroke();
            } else {
                stroke(shade());
                strokeWeight(0.5 + random(1));
                noFill();
            }
            circles(0, 0, 4 + rand(6) * 2, 0);

        }
    },
    hexagons: {
        id: "hexagons",
        max: 2,
        fillWeight: 20,
        draw() {
            if (rand(100) < elements.hexagons.fillWeight) {
                fill(shade(), 25 + rand(100));
                noStroke();
            } else {
                stroke(shade());
                strokeWeight(0.5 + random(1));
                noFill();
            }
            hexagons(0, 0, 4 + rand(6) * 2, 0);
        }
    },
    outline: {
        id: "outline",
        max: 2,
        shape: 1,
        fillWeight: 20,
        width: 140,
        draw() {
            if (rand(100) < elements.outline.fillWeight) {
                fill(shade(), 25 + rand(100));
            } else {
                noFill();
                stroke(shade());
                strokeWeight(0.5 + random(1));
            }
            let randWidth = 50 + rand(elements.outline.width);
            switch (rand(elements.outline.shape)) {
                case 0:
                    ellipse(0, 0, randWidth * 2, randWidth * 2);
                    break;
                case 1:
                    hexagon(0, 0, randWidth, 60);
                    break;
            }

        }
    },
}

const genOptions = [
    elements.outline,
    elements.lines,
    elements.circles,
    elements.hexagons,
    elements.dots,
];
const genIndex = [
    0,
    0,
    0,
    0,
    0,
];
const numGenned = 0;
const toGen = [];

function star(x, y, sc, rot) {
    push();
    translate(x, y);
    scale(sc);
    rotate(rot);
    if (toGen.length < 4 + rand(4)) {
        var genRand = rand(genOptions.length - 1);
        genIndex[genRand]++;
        if (genIndex[genRand] <= genOptions[genRand].max) {
            print(genOptions[genRand].id);
            toGen.push(genOptions[genRand]);
        }
    } else {
        for (var i = 0; i < toGen.length; i++) {
            toGen[i].draw();
        }
    }
    pop();
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
    const radCap = (100);
    const radius = 15 + rand(75);
    let radRand;

    push();
    translate(x, y);
    rotate(rot);

    strokeWeight(weight);
    stroke(shade());
    strokeCap(SQUARE);

    for (let i = 0; i < amount; i++) {
        rotate(rotAngle);
        line(radius, 0, radius + radCap, 0);
    }
    pop();
}

function dots(x, y, amount, amount2, rot, weight, decay) {
    const rotAngle = 360 / amount;
    const radSpace = 5 + rand(25);
    const radius = 15 + rand(75);
    const decayRand = rand(2);

    push();
    translate(x, y);
    rotate(rot);

    stroke(shade());

    for (let i = 0; i < amount; i++) {
        rotate(rotAngle);
        for (let j = 0; j < amount2; j++) {
            switch (decayRand) {
                case 0:
                    strokeWeight(weight);
                    break;
                case 1:
                    strokeWeight(weight / 4 + (decay * j));
                    break;
                case 2:
                    strokeWeight(weight - (decay * j));
                    break;
            }

            point(radius + (j * radSpace), 0);
        }
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