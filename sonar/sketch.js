var circles = {};
var deletedCircles = [];
var playMode = "sustain";
var tone1;
var tone2;
var tone3;
var hitbox1 = 75;
var hitbox2 = 50;
var hitbox3 = 25;

function checkCoordinates(circleName, hitbox) {
  if (
    circles.hasOwnProperty([circleName]) &&
    mouseX > circles[circleName][0] - hitbox &&
    mouseX < circles[circleName][0] + hitbox &&
    mouseY > circles[circleName][1] - hitbox &&
    mouseY < circles[circleName][1] + hitbox
  ) {
    return true;
  } else {
    return false;
  }
}

function setup() {
  tone1 = loadSound("one.wav");
  tone2 = loadSound("two.wav");
  tone3 = loadSound("three.wav");
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noFill();

  for (var i = 0; i < 5; i++) {
    var x = Math.floor(Math.random() * windowWidth - 25);
    var y = Math.floor(Math.random() * windowHeight - 25);

    circles[i] = [x, y];
  }
}

function draw() {
  background("white");
  renderCircles();
  noLoop();
}

function mouseMoved() {
  if (checkCoordinates(0, hitbox1)) {
    console.log("*** 0 *** - första tonen");
    tone1.play();

    if (checkCoordinates(0, hitbox2)) {
      console.log("*** 0 *** - andra tonen");
      tone2.play();

      if (checkCoordinates(0, hitbox3)) {
        console.log("*** 0 *** - tredje tonen");
        tone3.play();
      }
    }
  } else if (checkCoordinates(1, hitbox1)) {
    console.log("*** 1 ***");
  } else if (checkCoordinates(2, hitbox1)) {
    console.log("*** 2 ***");
  } else if (checkCoordinates(3, hitbox1)) {
    console.log("*** 3 ***");
  } else if (checkCoordinates(4, hitbox1)) {
    console.log("*** 4 ***");
  }
}

function mouseClicked() {
  if (checkCoordinates(0, hitbox3)) {
    deletedCircles.push(0);
    delete circles[0];
    redraw();
    renderCircles();
  }
}

function renderCircles() {
  for (var i = 0; i < 5; i++) {
    if (deletedCircles.includes(i)) {
      continue;
    }
    ellipse(circles[i][0], circles[i][1], 50, 50);
  }
}
