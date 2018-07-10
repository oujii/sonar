var circles = {};
var deletedCircles = [];
var highscore = 0;
var highscoreElement = document.getElementsByClassName("highscore")[0];
var timerElement = document.getElementsByClassName("timer")[0];

var tone1;
var tone2;
var tone3;
var hitbogoalLeftSide = 75;
var hitbogoalRightSide = 50;
var hitbox3 = 25;
var dragging = false;
var draggedCircle;
var goalLeftSide;
var goalRightSide;
var goalTopSide;
var goalBottomSide;

var a = 0;
var b = 0;
var targeta = 0;
var targetb = 0;

let counter = 0;

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
  stroke("#292227");
  strokeWeight(10);
  noFill();

  function timeIt() {
    counter++;
    timerElement.innerHTML = counter;
  }
  setInterval(timeIt, 1000);

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
  background(236, 235, 236);
  push(); // Startar ny design för rektangeln
  fill("rgba(71, 15, 244, 1)");
  noStroke();
  var easing = 0.2;
  var diffa = targeta - a;
  a += diffa * easing;
  var diffb = targetb - b;
  b += diffb * easing;

  rect(windowWidth / 2, windowHeight / 2, a, b);
  rect(windowWidth / 2, windowHeight / 2, 200, 200);
  pop(); // Avslutar rektangelns stil
  renderCircles();
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

    targeta = 250;
    targetb = 250;

    updateHighscore();
    redraw();
    renderCircles();
  }
}

function mouseMoved() {
  if (checkCoordinates(0, hitbogoalLeftSide)) {
    tone1.playMode("untilDone");
    tone1.play();

    if (checkCoordinates(0, hitbogoalRightSide)) {
      tone2.playMode("untilDone");
      tone2.play();

      if (checkCoordinates(0, hitbox3)) {
        tone3.playMode("sustain");
        tone3.play();
      }
    }
  } else if (checkCoordinates(1, hitbogoalLeftSide)) {
    tone1.playMode("untilDone");
    tone1.play();

    if (checkCoordinates(1, hitbogoalRightSide)) {
      tone2.playMode("untilDone");
      tone2.play();

      if (checkCoordinates(1, hitbox3)) {
        tone3.playMode("sustain");
        tone3.play();
      }
    }
  } else if (checkCoordinates(2, hitbogoalLeftSide)) {
    tone1.playMode("untilDone");
    tone1.play();

    if (checkCoordinates(2, hitbogoalRightSide)) {
      tone2.playMode("untilDone");
      tone2.play();

      if (checkCoordinates(2, hitbox3)) {
        tone3.playMode("sustain");
        tone3.play();
      }
    }
  } else if (checkCoordinates(3, hitbogoalLeftSide)) {
    tone1.playMode("untilDone");
    tone1.play();

    if (checkCoordinates(3, hitbogoalRightSide)) {
      tone2.playMode("untilDone");
      tone2.play();

      if (checkCoordinates(3, hitbox3)) {
        tone3.playMode("sustain");
        tone3.play();
      }
    }
  } else if (checkCoordinates(4, hitbogoalLeftSide)) {
    tone1.playMode("untilDone");
    tone1.play();

    if (checkCoordinates(4, hitbogoalRightSide)) {
      tone2.playMode("untilDone");
      tone2.play();

      if (checkCoordinates(4, hitbox3)) {
        tone3.playMode("sustain");
        tone3.play();
      }
    }
  }
}

function updateHighscore() {
  highscore = highscore + 100;
  highscoreElement.innerHTML = `${highscore}`;
}

function mouseClicked() {
  if (checkCoordinates(0, hitbox3)) {
    dragging = true;
    draggedCircle = 0;
  } else if (checkCoordinates(1, hitbox3)) {
    dragging = true;
    draggedCircle = 1;
  } else if (checkCoordinates(2, hitbox3)) {
    dragging = true;
    draggedCircle = 2;
  } else if (checkCoordinates(3, hitbox3)) {
    dragging = true;
    draggedCircle = 3;
  } else if (checkCoordinates(4, hitbox3)) {
    dragging = true;
    draggedCircle = 4;
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
