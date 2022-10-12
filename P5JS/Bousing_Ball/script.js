var px = 300, py = 100;
var c = 2, v = 3;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    fill(0);
    circle(px, py, 25 * 2);
    px = px + c;
    py = py + v;
    if (px > width - 25 || px < 25) {
        c = -c;
    }

    if (py > height - 25 || py < 25)
    {
        v = -v;
    }
    circle(px, py, 25 * 2);
}