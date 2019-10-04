function setup() {
  createCanvas(550, 500);
}
function draw() {
  stroke("#fff0");
  frameRate(random(500,1000));
  fill(0, mouseX-random(1,countBlocks*10+10), 100-random(10,25));
  circle(267,235,250);
  fill(mouseX-random(1,countBlocks*10+10), 100, 100-random(10,25));
for (var countRows = 0; countRows < 10; countRows++) {
  for (var countBlocks = 0; countBlocks < 6; countBlocks++) {
    fill(((mouseX+mouseY)/2)-random(1,countBlocks*10+10), mouseX-random(1,countBlocks*10+10), 100-random(10,25));
    rect(200,50,420,75);
    translate(600, 100);
    rotate((mouseX-mouseY)*10);
  }
}

}
