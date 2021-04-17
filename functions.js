var numGenned = 0;
var toGen = [];

function rand(max, min) {
    return round(random(max, min));
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
                    buffer.push();
                    buffer.translate(random(10), random(10));
                    for (var i = 0; i < 55; i++) {
                        for (var j = 0; j < 55; j++) {
                            buffer.fill(200);
                            buffer.rect(i * 20, j * 20, random(20), 10);
                        }
                    }
                    buffer.pop();
                    break;
                case 1:
                    buffer.push();
                    buffer.translate(random(10), random(10));
                    for (var i = 0; i < 55; i++) {
                        for (var j = 0; j < 55; j++) {
                            buffer.fill(200);
                            buffer.rect(i * 20, j * 20, 10, random(20));
                        }
                    }
                    buffer.pop();
                    break;
                case 2:
                    buffer.push();
                    buffer.translate(random(10), random(10));
                    for (var i = 0; i < 55; i++) {
                        for (var j = 0; j < 55; j++) {
                            buffer.fill(200);
                            buffer.rect(random(10) + i * 20, random(10) + j * 20, random(20), 10);
                        }
                    }
                    buffer.pop();
                    break;
                case 3:
                    buffer.push();
                    buffer.translate(random(10), random(10));
                    for (var i = 0; i < 55; i++) {
                        for (var j = 0; j < 55; j++) {
                            buffer.fill(200);
                            buffer.rect(random(10) + i * 20, random(10) + j * 20, 10, random(20));
                        }
                    }
                    buffer.pop();
                    break;
                    break;
            }
            break;
        case 1:
            switch (rand(9)) {
                case 0:
                    for (var x = 0; x < width + 30; x += 10) {
                        for (var y = 0; y < height + 30; y += 10) {
                            var c = 255 * noise(0.01 * x, 0.01 * y);
                            buffer.fill(c, 100 + random(155));
                            buffer.rect(x, y, 10, 10);

                        }
                    }
                    break;
                case 1:
                    for (var x = 0; x < width + 40; x += 20) {
                        for (var y = 0; y < height + 40; y += 20) {
                            var c = 255 * noise(0.01 * x, 0.01 * y);
                            buffer.fill(c, 100 + random(155));
                            buffer.rect(x, y, 10, 10);

                        }
                    }
                    break;
                case 2:
                    for (var x = 0; x < width + 40; x += 20) {
                        for (var y = 0; y < height + 40; y += 20) {
                            var c = 255 * noise(0.01 * x, 0.01 * y);
                            buffer.fill(c, 100 + random(155));
                            buffer.ellipse(x, y, 20, 20);

                        }
                    }
                    break;
                case 3:
                    for (var x = 0; x < width + 40; x += 20) {
                        for (var y = 0; y < height + 40; y += 20) {
                            var c = 255 * noise(0.01 * x, 0.01 * y);
                            buffer.fill(c, 100 + random(155));
                            buffer.ellipse(x + random(10), y + random(10), 20, 20);

                        }
                    }
                    break;
                case 4:
                    for (var x = 0; x < width + 40; x += 10) {
                        for (var y = 0; y < height + 40; y += 10) {
                            var c = 255 * noise(0.01 * x, 0.01 * y);
                            buffer.fill(c, 100 + random(155));
                            buffer.ellipse(x, y, random(10), random(10));

                        }
                    }
                    break;
                case 5:
                    for (var x = 0; x < width + 40; x += 10) {
                        for (var y = 0; y < height + 40; y += 10) {
                            var c = 255 * noise(0.01 * x, 0.01 * y);
                            buffer.fill(c, 100 + random(155));
                            buffer.rect(x, y, random(10), random(10));

                        }
                    }
                    break;
                case 6:
                    for (var x = 0; x < width + 40; x += 20) {
                        for (var y = 0; y < height + 40; y += 20) {
                            var c = 255 * noise(0.01 * x, 0.01 * y);
                            buffer.fill(c, 100 + random(155));
                            buffer.ellipse(x, y, random(20), random(20));

                        }
                    }
                    break;
                case 7:
                    for (var x = 0; x < width + 40; x += 20) {
                        for (var y = 0; y < height + 40; y += 20) {
                            var c = 255 * noise(0.01 * x, 0.01 * y);
                            buffer.fill(c, 100 + random(155));
                            buffer.rect(x, y, random(20), random(20));

                        }
                    }
                    break;
                case 8:
                    for (var x = 0; x < width + 40; x += 20) {
                        for (var y = 0; y < height + 40; y += 20) {
                            var c = 255 * noise(0.01 * x, 0.01 * y);
                            buffer.fill(c, 100 + random(155));
                            buffer.ellipse(x + random(10), y + random(10), random(20), random(20));

                        }
                    }
                    break;
                case 9:
                    for (var x = 0; x < width + 40; x += 20) {
                        for (var y = 0; y < height + 40; y += 20) {
                            var c = 255 * noise(0.01 * x, 0.01 * y);
                            buffer.fill(c, 100 + random(155));
                            buffer.rect(x + random(10), y + random(10), random(20), random(20));

                        }
                    }
                    break;
            }
            break;
        case 2:
            var x = 0;
            var y = 0;
            var gap = 75 + rand(75);
            buffer.push();

            switch (rand(1)) {
                case 0:
                    buffer.translate(width, 0);
                    buffer.rotate(90);
                    break;
            }
            buffer.translate(-50, 0);
            for (var i = 0; i < gap * 20; i++) {
                buffer.stroke(50 + rand(100));
                buffer.strokeWeight(10);
                if (random(2) < 0.5) { // The if statement changes the dibuffer.rection of the lines.
                    buffer.line(x, y, x + gap, y + gap);
                } else {
                    buffer.line(x, y + gap, x + gap, y);
                }

                x = x + (gap / 3); //This allows the lines to go across the canvas.
                if (x > width + 100) {
                    x = 0;
                    y = y + gap;
                }
            }
            buffer.pop();
            break;

    }
}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

const starElements = {
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
            if (rand(100) < starElements.circles.fillWeight) {
                buffer.fill(shade(), 25 + rand(100));
                buffer.noStroke();
            } else {
                buffer.stroke(shade());
                buffer.strokeWeight(0.5 + random(1));
                buffer.noFill();
            }
            circles(0, 0, 4 + rand(6) * 2, 0);

        }
    },
    hexagons: {
        id: "hexagons",
        max: 2,
        fillWeight: 20,
        draw() {
            if (rand(100) < starElements.hexagons.fillWeight) {
                buffer.fill(shade(), 25 + rand(100));
                buffer.noStroke();
            } else {
                buffer.stroke(shade());
                buffer.strokeWeight(0.5 + random(1));
                buffer.noFill();
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
            if (rand(100) < starElements.outline.fillWeight) {
                buffer.fill(shade(), 25 + rand(100));
            } else {
                buffer.noFill();
                buffer.stroke(shade());
                buffer.strokeWeight(0.5 + random(1));
            }
            let randWidth = 50 + rand(starElements.outline.width);
            switch (rand(starElements.outline.shape)) {
                case 0:
                    buffer.ellipse(0, 0, randWidth * 2, randWidth * 2);
                    break;
                case 1:
                    hexagon(0, 0, randWidth, 60);
                    break;
            }

        }
    },
}

const genOptions = [
    starElements.outline,
    starElements.lines,
    starElements.circles,
    starElements.hexagons,
    starElements.dots,
];
const genIndex = [
    0,
    0,
    0,
    0,
    0,
];

function lines(x, y, amount, rot, weight) {
    const rotAngle = 360 / amount;
    const radCap = (100);
    const radius = 15 + rand(75);
    let radRand;

    buffer.push();
    buffer.translate(x, y);
    buffer.rotate(rot);

    buffer.strokeWeight(weight);
    buffer.stroke(shade());
    buffer.strokeCap(SQUARE);

    for (let i = 0; i < amount; i++) {
        buffer.rotate(rotAngle);
        buffer.line(radius, 0, radius + radCap, 0);
    }
    buffer.pop();
}

function dots(x, y, amount, amount2, rot, weight, decay) {
    const rotAngle = 360 / amount;
    const radSpace = 5 + rand(25);
    const radius = 15 + rand(75);
    const decayRand = rand(2);

    buffer.push();
    buffer.translate(x, y);
    buffer.rotate(rot);

    buffer.stroke(shade());

    for (let i = 0; i < amount; i++) {
        buffer.rotate(rotAngle);
        for (let j = 0; j < amount2; j++) {
            switch (decayRand) {
                case 0:
                    buffer.strokeWeight(weight);
                    break;
                case 1:
                    buffer.strokeWeight(weight / 4 + (decay * j));
                    break;
                case 2:
                    buffer.strokeWeight(weight - (decay * j));
                    break;
            }

            point(radius + (j * radSpace), 0);
        }
    }
    buffer.pop();
}

function circles(x, y, amount, rot) {
    const lineWeight = 1 + rand(1);
    buffer.strokeWeight(lineWeight);
    buffer.push();
    buffer.translate(x, y);
    const rotAngle = 360 / amount;
    const radCap = rand(100);
    const radius = 15 + rand(75);

    buffer.stroke(shade());
    buffer.rotate(rot);
    for (let i = 0; i < amount; i++) {
        buffer.rotate(rotAngle);
        buffer.ellipse(radius + radCap, 0, 20, 20);
    }
    buffer.pop();
}

function hexagons(x, y, amount, rot) {
    const lineWeight = 1 + rand(1);
    buffer.strokeWeight(lineWeight);
    buffer.push();
    buffer.translate(x, y);
    const rotAngle = 360 / amount;
    const radCap = rand(100);
    const radius = 15 + rand(75);

    buffer.stroke(shade());
    buffer.rotate(rot);
    for (let i = 0; i < amount; i++) {
        buffer.rotate(rotAngle);
        if (rand(1) === 0) {
            hexagon(radius + radCap, 0, 20, 0);
        } else {
            hexagon(radius + radCap, 0, 20, 30);
        }
    }
    buffer.pop();
}

function star(x, y, sc, rot) {
    buffer.push();
    buffer.translate(x, y);
    buffer.scale(sc);
    buffer.rotate(rot);
    //buffer.fill(255, 0, 0);
    //buffer.ellipse(0, 0, 100, 100)
    if (toGen.length < 4 + rand(4)) {
        var genRand = rand(genOptions.length - 1);
        genIndex[genRand]++;
        if (genIndex[genRand] <= genOptions[genRand].max) {
            toGen.push(genOptions[genRand]);
        }
    } else {
        for (var i = 0; i < toGen.length; i++) {
            toGen[i].draw();
        }
    }
    buffer.pop();

}

function element(x, y, rad) {
    buffer.strokeWeight(5);
    buffer.stroke(shade());
    buffer.fill(255, rand(25));
    switch (rand(4)) {
        case 0:
            circagon(x, y, rad);
            break;
        case 1:
            hexagon(x, y, rad, rand(360));
            break;
        case 2:
            blob(x, y, rad);    
            break;
    }
}
