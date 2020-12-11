const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball1
var table
var cup

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    
    ball1 = new Ball(400,350,15);
    table = new Table(400,200,100,50);
    
    for(var i = 10; i<80; i=i+10){
        cup = new Cup(i,190,PI/2)
    }
    for(var i = 30; i < 60; i=i+10){
        cup = new Cup(i,170,PI/2)
    }
    for(var i = 60; i < 40; i=i+10){
        cup = new Cup(i,150,PI/2)
    }

}
function draw() {
    background(rgb(225,225,225));
    ball1.display();
    table.display();
    cup.display()

    /*if(keyCode === 32){
        ball1.velocityY = 5
    }

    if(ball1.isTouching(table)){

    }*/
    drawSprites()


   }

