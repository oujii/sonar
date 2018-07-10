var circles = {};
var deletedCircles = [];
var highscore = 0;
var goalSize = 250;
var highscoreElement = document.getElementsByClassName("highscore")[0];
var timerElement = document.getElementsByClassName("timer")[0];

var tone1;
var tone2;
var tone3;
var hitboxGoalLeftSide = 75;
var hitboxGoalRightSide = 50;
var circleHitbox = 25;
var dragging = false;
var draggedCircle;

let timer = 0;

var sizeX = 250;
var sizeY = 250;
var targetSizeX = 250;
var targetSizeY = 250;
var goalScored = false;

function setup() {
  tone1 = loadSound("one.wav");
  tone2 = loadSound("two.wav");
  tone3 = loadSound("three.wav");
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  ellipseMode(CENTER);
  stroke("#292227");
  strokeWeight(10);
  noFill();
  createCircleCoordinates();

  function timeIt() {
    timer++;
    timerElement.innerHTML = timer;
  }
  setInterval(timeIt, 1000);
}

function draw() {
  background(236, 235, 236);

  goalAnimation();
  renderCircles();
  circleIsBeingDragged();

  push(); // Start of overlay design
  fill("rgba(0, 0, 0, 1)");
  noStroke();
  rect(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
  pop(); // End of overlay design

  push(); // Start of new design for the goal
  fill("rgba(71, 15, 244, 1)");
  noStroke();
  ellipse(windowWidth / 2, windowHeight / 2, sizeX, sizeY);
  pop(); // End of new design for the goal
}

function mouseMoved() {
  if (checkCoordinates(0, hitboxGoalLeftSide)) {
    tone1.play();

    if (checkCoordinates(0, hitboxGoalRightSide)) {
      tone2.play();

      if (checkCoordinates(0, circleHitbox)) {
        tone3.play();
      }
    }
  } else if (checkCoordinates(1, hitboxGoalLeftSide)) {
    tone1.play();

    if (checkCoordinates(1, hitboxGoalRightSide)) {
      tone2.play();

      if (checkCoordinates(1, circleHitbox)) {
        tone3.play();
      }
    }
  } else if (checkCoordinates(2, hitboxGoalLeftSide)) {
    tone1.play();

    if (checkCoordinates(2, hitboxGoalRightSide)) {
      tone2.play();

      if (checkCoordinates(2, circleHitbox)) {
        tone3.play();
      }
    }
  } else if (checkCoordinates(3, hitboxGoalLeftSide)) {
    tone1.play();

    if (checkCoordinates(3, hitboxGoalRightSide)) {
      tone2.play();

      if (checkCoordinates(3, circleHitbox)) {
        tone3.play();
      }
    }
  } else if (checkCoordinates(4, hitboxGoalLeftSide)) {
    tone1.play();

    if (checkCoordinates(4, hitboxGoalRightSide)) {
      tone2.play();

      if (checkCoordinates(4, circleHitbox)) {
        tone3.play();
      }
    }
  }
}

function updateHighscore() {
  goalScored = true;
  highscore += 100;
  highscoreElement.innerHTML = `${highscore}`;
}

function mouseClicked() {
  if (checkCoordinates(0, circleHitbox)) {
    dragging = true;
    draggedCircle = 0;
  } else if (checkCoordinates(1, circleHitbox)) {
    dragging = true;
    draggedCircle = 1;
  } else if (checkCoordinates(2, circleHitbox)) {
    dragging = true;
    draggedCircle = 2;
  } else if (checkCoordinates(3, circleHitbox)) {
    dragging = true;
    draggedCircle = 3;
  } else if (checkCoordinates(4, circleHitbox)) {
    dragging = true;
    draggedCircle = 4;
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

function createCircleCoordinates() {
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
    }

    if (y > goalTopSide) {
      var y = yTopToGoal;
    } else if (y < goalBottomSide) {
      var y = yBottomToGoal;
    }

    circles[i] = [x, y];
  }
}

function circleIsBeingDragged() {
  if (dragging == true) {
    circles[draggedCircle][0] = mouseX;
    circles[draggedCircle][1] = mouseY;
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
    deletedCircles.push(draggedCircle);
    delete circles[draggedCircle];
    updateHighscore();
    targetSizeX += 400;
    targetSizeY += 400;
    renderCircles();
  }
}

function goalAnimation() {
  var easing = 0.05;
  var diffx = targetSizeX - sizeX;
  sizeX += diffx * easing;
  var diffy = targetSizeY - sizeY;
  sizeY += diffy * easing;

  if (goalScored) {
    targetSizeX -= 400;
    targetSizeY -= 400;
    goalScored = false;
  }
}
