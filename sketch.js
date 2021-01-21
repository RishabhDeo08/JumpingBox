var canvas;
var music;
var box1, box2, box3, box4
var ball, edges
function preload() {
    music = loadSound("music.mp3");
}


function setup() {
    canvas = createCanvas(800, 600);
    //create 4 different surfaces
    box1 = createSprite(80, 580, 100, 10)
    box2 = createSprite(250, 580, 100, 10)
    box3 = createSprite(420, 580, 100, 10)
    box4 = createSprite(620, 580, 100, 10)
    ball = createSprite(random(20, 750), 10, 20, 20)

    //create box sprite and give velocity
    ball.velocityY = 6
    ball.velocityX=4
}

function draw() {
    background(rgb(169, 169, 169));
    box1.shapeColor = "blue"
    box2.shapeColor = "red"
    box3.shapeColor = "green"
    box4.shapeColor = "yellow"
    ball.shapeColor = "black"
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges)
    ball.bounceOff(box1)
    ball.bounceOff(box2)
    ball.bounceOff(box3)
    ball.bounceOff(box4)
    drawSprites()
    //add condition to check if box touching surface and make it box
}
