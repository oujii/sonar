var circles = {};
var playMode = "sustain";
var tone1;
var tone2;
var tone3;
var hitbox1 = 75;
var hitbox2 = 50;
var hitbox3 = 25;

function setup() {
  tone1 = loadSound("one.wav");
  tone2 = loadSound("two.wav");
  tone3 = loadSound("three.wav");
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  ellipseMode(CENTER);
  noFill();
  // topLayer = createGraphics(windowWidth, windowHeight);
  // noStroke();
  for (var i = 0; i < 5; i++) {
    // För att inte få X eller Y att fastna i rektangeln
    var x1 = windowWidth / 2 - 125;
    var xmer = random(0, x1); // 0 till vänster sida
    var x2 = windowWidth / 2 + 125;
    var xmindre = random(x2, windowWidth); // rektangelns högra sida till slutet av sidan.

    var y1 = windowHeight / 2 - 125;
    var ymer = random(0, y1); // 0 till topp sida
    var y2 = windowHeight / 2 + 125;
    var ymindre = random(y2, windowHeight); // rektangelns undre sida till slutet av sidan.

    var x = random(0, windowWidth);
    var y = random(0, windowHeight);
    if (x > x1) {
      var x = xmer;
      console.log("random blev mer än vänstra sidan");
    } else if (x < x2) {
      var x = xmindre;
      console.log("Random blev mindre än högra sidan");
    } else {
      console.log("random kördes utan att fastna i rektangeln");
    }

    if (y > y1) {
      var y = ymer;
      console.log("random blev mer än topp sidan");
    } else if (y < y2) {
      var y = ymindre;
      console.log("Random blev mindre än undre sidan");
    } else {
      console.log("random kördes utan att fastna i rektangeln");
    }

    circles[i] = [x, y];
  }
}

function draw() {
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

  push(); // Startar ny design för rektangeln
  fill(255, 0, 0);
  rect(windowWidth / 2, windowHeight / 2, 250, 250);
  pop(); //Avslutar rektangelns stil
}

function mouseMoved() {
  if (
    mouseX > circles[0][0] - hitbox1 &&
    mouseX < circles[0][0] + hitbox1 &&
    mouseY > circles[0][1] - hitbox1 &&
    mouseY < circles[0][1] + hitbox1
  ) {
    console.log("*** 0 *** - första tonen");
    tone1.play();

    if (
      mouseX > circles[0][0] - hitbox2 &&
      mouseX < circles[0][0] + hitbox2 &&
      mouseY > circles[0][1] - hitbox2 &&
      mouseY < circles[0][1] + hitbox2
    ) {
      console.log("*** 0 *** - andra tonen");
      tone2.play();

      if (
        mouseX > circles[0][0] - hitbox3 &&
        mouseX < circles[0][0] + hitbox3 &&
        mouseY > circles[0][1] - hitbox3 &&
        mouseY < circles[0][1] + hitbox3
      ) {
        console.log("*** 0 *** - tredje tonen");
        tone3.play();
      }
    }
  } else if (
    mouseX > circles[1][0] - hitbox1 &&
    mouseX < circles[1][0] + hitbox1 &&
    mouseY > circles[1][1] - hitbox1 &&
    mouseY < circles[1][1] + hitbox1
  ) {
    console.log("*** 1 ***");
  } else if (
    mouseX > circles[2][0] - hitbox1 &&
    mouseX < circles[2][0] + hitbox1 &&
    mouseY > circles[2][1] - hitbox1 &&
    mouseY < circles[2][1] + hitbox1
  ) {
    console.log("*** 2 ***");
  } else if (
    mouseX > circles[3][0] - hitbox1 &&
    mouseX < circles[3][0] + hitbox1 &&
    mouseY > circles[3][1] - hitbox1 &&
    mouseY < circles[3][1] + hitbox1
  ) {
    console.log("*** 3 ***");
  } else if (
    mouseX > circles[4][0] - hitbox1 &&
    mouseX < circles[4][0] + hitbox1 &&
    mouseY > circles[4][1] - hitbox1 &&
    mouseY < circles[4][1] + hitbox1
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
