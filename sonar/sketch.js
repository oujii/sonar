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
  ellipseMode(CENTER);
  noFill();

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
  background("white");
  push(); // Startar ny design för rektangeln
  fill(255, 0, 0);
  rect(windowWidth / 2, windowHeight / 2, 250, 250);
  pop(); //Avslutar rektangelns stil
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
