var arraycircle = [];
var count = 10;
var loop1 = [];
for (let j = 0; j < count; j++) {
    arraycircle[j] = new Circle();
}


function setup() {
    createCanvas(600, 600);
    for (let i = 0; i < count; i++) {
        arraycircle[i].r1 = random(0, 255);
        arraycircle[i].g = random(0, 255);
        arraycircle[i].b = random(0, 255);
        arraycircle[i].x = random(26, width - 26);
        arraycircle[i].y = random(26, height - 26);
        arraycircle[i].vx = random(2, 10);
        arraycircle[i].vy = random(1, 10);
    }
}

function draw() {
    background(0);
    for (let i = 0; i < count; i++) {
        arraycircle[i].show();
        arraycircle[i].move();
    }
    for (let i = 0; i < count; i++) {
        for (loop[i]; loop[i] < count; loop[i]++)
            arraycircle[loop[i]].collide(arraycircle[i]);
    }


}

function Circle() {


    this.r = 25;
    this.x = 56;;
    this.y = 45;
    this.vx = 2;
    this.vy = 3;
    //distance


    this.show = function () {
        this.r1;
        this.g;
        this.b;
        fill(this.r1, this.g, this.b);
        stroke(0, 255, 0);
        circle(this.x, this.y, this.r * 2, this.r * 2);
        //text('word', this.x, this.y);
        fill(0, 102, 153);
    }
    this.move = function () {
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
        if (this.x > width - this.r || this.x < this.r) {
            this.vx = -this.vx;
        }
        if (this.y > height - this.r || this.y < this.r) {
            this.vy = -this.vy;
        }
    }

    this.collide = function (other) {

        if ((this.r + other.r) > pow((pow(other.x - this.x, 2) + pow(other.y - this.y, 2)), 1 / 2)) {
            this.vx = -this.vx;
            other.vy = -other.vy;
            this.vy = -this.vy;
            other.vx = -other.vx;
        }
    }



}