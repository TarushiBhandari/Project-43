var hr, hrAngle;
var mn, mnAngle;
var sc, scAngle;

function setup() {
  createCanvas(800,400);

  angleMode(DEGREES);
}

function draw() {
  background("black"); 
  
  textSize(30);
  fill("white");
  text("TICK-TOCK", 500,200);
 
  textSize(18);
  noStroke();
  fill("white");
  text("12", 195,90);

  noStroke();
  fill("white");
  text("3", 310,205);

  noStroke();
  fill("white");
  text("9", 80,205);

  noStroke();
  fill("white");
  text("6", 200,310);
  
  hr= hour();
  mn= minute();
  sc= second();

  translate(200,200)
  rotate(-90)

  stroke(255, 150, 235);
  strokeWeight(8);
  scAngle = map(sc, 0, 60, 0, 360);

  stroke(154, 234, 101);
  strokeWeight(8);
  mnAngle = map(mn,0,60,0,360);

  stroke(0,255,237);
  strokeWeight(8);
  hrAngle = map(hr % 12,0,12,0,360);

    //drawing seconds hand
    push();
    rotate(scAngle);
    stroke(255,0,0);
    strokeWeight(2);
    line(0,0,100,0);
    pop()

    //drawing minutes hand
    push();
    rotate(mnAngle);
    stroke(240,119,217);
    strokeWeight(5);
    line(0,0,85,0);
    pop();

    //drawing hour hand
    push();
    rotate(hrAngle);
    stroke(4,255,0);
    strokeWeight(7);
    line(0,0,45,0);
    pop();
 
    strokeWeight(2);
    noFill();

    //Seconds
    stroke(255,0,0);
    arc(0,0,300,300,0,scAngle);

    //Minutes
    strokeWeight(5);
    stroke(240,119,217);
    arc(0,0,280,280,0,mnAngle);

    //Hour
    strokeWeight(7);
    stroke(4,255,0);
    arc(0,0,260,260,0,hrAngle);


  drawSprites();
}