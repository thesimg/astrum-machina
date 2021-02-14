function rand(max) {
    return round(random() * max);
}

function hexagon(posX, posY, radius, rot) {
    push();
    translate(posX, posY);
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

function pentagon(posX, posY, radius, rot) {
    push();
    translate(posX, posY);
    rotate(rot);
    const rotAngle = 360 / 5;
    beginShape()
    for (let i = 0; i < 5; i++) {
        const thisVertex = pointOnCircle(0, 0, radius, i * rotAngle)
        vertex(thisVertex.x, thisVertex.y)
    }
    endShape(CLOSE)
    pop();
}

function lines(posX, posY, amount, rot) {
    const lineWeight = 1 + rand(1);
    strokeWeight(lineWeight);
    push();
    translate(posX, posY);
    const rotAngle = 360 / amount;
    const radCap = rand(100);
    const radius = 15 + rand(75);
    let radRand;

    stroke(shade());
    rotate(rot);
    strokeCap(SQUARE);
    if (rand(1) === 0) {
        radRand = rand(10);
    } else {
        radRand = -20;
    }
    for (let i = 0; i < amount; i++) {
        rotate(rotAngle);
        line(radius, 0, radius + radCap + radRand, 0);
    }
    pop();
}

function circles(posX, posY, amount, rot) {
    const lineWeight = 1 + rand(1);
    strokeWeight(lineWeight);
    push();
    translate(posX, posY);
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

function circagon(posX, posY, radius) {
    ellipse(posX, posY, radius * 2, radius * 2);
}

function pointOnCircle(posX, posY, radius, angle) {
    const x = posX + radius * cos(angle)
    const y = posY + radius * sin(angle)
    return createVector(x, y)
}

function shade() {
    return 150 + rand(105);
}