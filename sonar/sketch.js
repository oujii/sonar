function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  fill(color(255, 204, 0));
  pg = createGraphics(500, 500);
  for (var i = 0; i < 5; i++) {
    var x = random(windowWidth);
    var y = random(windowHeight);

    ellipse(x, y, 50, 50);
  }
}

function draw() {
  // ett objekt

  pg.fill(200, 0, 200);

  pg.rect(random(500), random(200), 200, 200);

  image(pg, 0, 0);
  pg.background(250);
}
