var circles = {};

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noFill();
  // topLayer = createGraphics(windowWidth, windowHeight);
  // noStroke();
  for (var i = 0; i < 5; i++) {
    var x = Math.floor(Math.random() * windowWidth - 25);
    var y = Math.floor(Math.random() * windowHeight - 25);

    circles[i] = [x, y];
  }
}

function draw() {
  var hitbox = 25;

  stroke("red");
  ellipse(circles[0][0], circles[0][1], 50, 50);
  stroke("blue");
  ellipse(circles[1][0], circles[1][1], 50, 50);
  stroke("yellow");
  ellipse(circles[2][0], circles[2][1], 50, 50);
  stroke("green");
  ellipse(circles[3][0], circles[3][1], 50, 50);
  stroke("purple");
  ellipse(circles[4][0], circles[4][1], 50, 50);

  if (
    mouseX > circles[0][0] - hitbox &&
    mouseX < circles[0][0] + hitbox &&
    mouseY > circles[0][1] - hitbox &&
    mouseY < circles[0][1] + hitbox
  ) {
    console.log("*** 0 ***");
  } else if (
    mouseX > circles[1][0] - hitbox &&
    mouseX < circles[1][0] + hitbox &&
    mouseY > circles[1][1] - hitbox &&
    mouseY < circles[1][1] + hitbox
  ) {
    console.log("*** 1 ***");
  } else if (
    mouseX > circles[2][0] - hitbox &&
    mouseX < circles[2][0] + hitbox &&
    mouseY > circles[2][1] - hitbox &&
    mouseY < circles[2][1] + hitbox
  ) {
    console.log("*** 2 ***");
  } else if (
    mouseX > circles[3][0] - hitbox &&
    mouseX < circles[3][0] + hitbox &&
    mouseY > circles[3][1] - hitbox &&
    mouseY < circles[3][1] + hitbox
  ) {
    console.log("*** 3 ***");
  } else if (
    mouseX > circles[4][0] - hitbox &&
    mouseX < circles[4][0] + hitbox &&
    mouseY > circles[4][1] - hitbox &&
    mouseY < circles[4][1] + hitbox
  ) {
    console.log("*** 4 ***");
  }
  // var r = Math.floor(Math.random() * 255);
  // var g = Math.floor(Math.random() * 255);
  // var b = Math.floor(Math.random() * 255);
  // fill(color(r, g, b));
  // topLayer.rect(random(windowWidth), random(windowHeight), 50, 50);
  // image(topLayer, 0, 0);
}
