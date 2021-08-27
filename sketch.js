const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var base;
var left;
var right;
var bridge;
var jointPoint;
var jointLink;
var stones = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  base = new Base(0,height-10,width*2,20);
  left = new Base(100,height-300,200,height/2+100);
  right = new Base(width-100,height-300,200,height/2+100);

  bridge = new Bridge(30,{x:50,y:height/2-140});
  jointPoint = new Base(width-250,height/2-100,40,20);
  Matter.Composite.add(bridge.body,jointPoint);
  jointLink = new Link(bridge,jointPoint);

     for (var i = 0; i <= 8; i++) {
     var x = random(width / 2 - 200, width / 2 + 300);
     var y = random(-10,140);
     var stone = new Stone(x,y,80,80);
     stones.push(stone);
     }

  ellipseMode(RADIUS);
  rectMode(CENTER);
}

function draw() {
  background(51);
  Engine.update(engine);
  
  base.show();
  bridge.show();
  left.show();
  right.show();

  for (var stone of stones){
  stone.show();
  }

  drawSprites();

}
