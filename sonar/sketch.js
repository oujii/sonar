var circles = {};
var deletedCircles = [];
var highscore = document.getElementsByClassName("highscore")[0];
var playMode = "sustain";
var tone1;
var tone2;
var tone3;
var hitbogoalLeftSide = 75;
var hitbogoalRightSide = 50;
var hitbox3 = 25;
var dragging = false;
var goalLeftSide;
var goalRightSide;
var goalTopSide;
var goalBottomSide;

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
    var goalLeftSide = windowWidth / 2 - 125;
    var xStartToGoal = random(0, goalLeftSide); // 0 till vänster sida
    var goalRightSide = windowWidth / 2 + 125;
    var xGoalToEnd = random(goalRightSide, windowWidth); // rektangelns högra sida till slutet av sidan.

    var goalTopSide = windowHeight / 2 - 125;
    var yTopToGoal = random(0, goalTopSide); // 0 till topp sida
    var goalBottomSide = windowHeight / 2 + 125;
    var yBottomToGoal = random(goalBottomSide, windowHeight); // rektangelns undre sida till slutet av sidan.

    var x = random(0, windowWidth);
    var y = random(0, windowHeight);
    if (x > goalLeftSide) {
      var x = xStartToGoal;
    } else if (x < goalRightSide) {
      var x = xGoalToEnd;
    } else {
    }

    if (y > goalTopSide) {
      var y = yTopToGoal;
    } else if (y < goalBottomSide) {
      var y = yBottomToGoal;
    } else {
    }

    circles[i] = [x, y];
  }
}

function draw() {
  background("white");
  push(); // Startar ny design för rektangeln
  fill(255, 0, 0);
  rect(windowWidth / 2, windowHeight / 2, 250, 250);
  pop(); // Avslutar rektangelns stil
  renderCircles();
  if (dragging == true) {
    circles[0][0] = mouseX;
    circles[0][1] = mouseY;
  }
  var xBeforeGoal = windowWidth - windowWidth / 2 + 125;
  var xAfterGoal = windowWidth / 2 - 125;
  var yBeforeGoal = windowHeight - windowHeight / 2 + 125;
  var yAfterGoal = windowHeight / 2 - 125;

  if (
    dragging &&
    mouseX > xAfterGoal &&
    mouseX < xBeforeGoal &&
    mouseY > yAfterGoal &&
    mouseY < yBeforeGoal
  ) {
    dragging = false;
  }
}

function mouseMoved() {
  if (checkCoordinates(0, hitbogoalLeftSide)) {
    tone1.play();

    if (checkCoordinates(0, hitbogoalRightSide)) {
      tone2.play();

      if (checkCoordinates(0, hitbox3)) {
        tone3.play();
      }
    }
  } else if (checkCoordinates(1, hitbogoalLeftSide)) {
    tone1.play();

    if (checkCoordinates(1, hitbogoalRightSide)) {
      tone2.play();

      if (checkCoordinates(1, hitbox3)) {
        tone3.play();
      }
    }
  } else if (checkCoordinates(2, hitbogoalLeftSide)) {
    tone1.play();

    if (checkCoordinates(2, hitbogoalRightSide)) {
      tone2.play();

      if (checkCoordinates(2, hitbox3)) {
        tone3.play();
      }
    }
  } else if (checkCoordinates(3, hitbogoalLeftSide)) {
    tone1.play();

    if (checkCoordinates(3, hitbogoalRightSide)) {
      tone2.play();

      if (checkCoordinates(3, hitbox3)) {
        tone3.play();
      }
    }
  } else if (checkCoordinates(4, hitbogoalLeftSide)) {
    tone1.play();

    if (checkCoordinates(4, hitbogoalRightSide)) {
      tone2.play();

      if (checkCoordinates(4, hitbox3)) {
        tone3.play();
      }
    }
  }
}

function mouseClicked() {
  if (checkCoordinates(0, hitbox3)) {
    dragging = true;
  }
}

// function mouseClicked() {
//   if (checkCoordinates(0, hitbox3)) {
//     dragging = true;
//     // circles[0][0]; är x
//     // circles[0][1]; är  y
//   } else if (checkCoordinates(1, hitbox3)) {
//     deletedCircles.push(1);
//     delete circles[1];
//     redraw();
//     renderCircles();
//   } else if (checkCoordinates(2, hitbox3)) {
//     deletedCircles.push(2);
//     delete circles[2];
//     redraw();
//     renderCircles();
//   } else if (checkCoordinates(3, hitbox3)) {
//     deletedCircles.push(3);
//     delete circles[3];
//     redraw();
//     renderCircles();
//   } else if (checkCoordinates(4, hitbox3)) {
//     deletedCircles.push(4);
//     delete circles[4];
//     redraw();
//     renderCircles();
//   }
// }

function renderCircles() {
  for (var i = 0; i < 5; i++) {
    if (deletedCircles.includes(i)) {
      continue;
    }
    ellipse(circles[i][0], circles[i][1], 50, 50);
  }
}
