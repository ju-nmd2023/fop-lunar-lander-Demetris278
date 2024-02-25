
//NASA2.0
let width=150;
let height=200;
let y=150;
let x=400;
let gravity=0.1;
let thrust=0;
let velocityY=0;
let screen=1;
let starsX=[];
let starsY=[];
let starsAlpha=[];
let starsDrawn = false;
let win = false;

canvas {
    width : 1000px;
    height : 1000px;
 }

function checkInput(){
    if(keyIsDown(32)){
        console.log(thrust);
        if(thrust===0){
            thrust= 0.1;
        }
        else{
            thrust= thrust * 1.05;
        }
        if (thrust > 0.5){
            thrust = 0.5;
        }
    }
    else{
        thrust = 0;
    }
    
    /*console.log(thrust);*/
}


function drawStars(){
    if (starsDrawn === false){
        for (let i = 0; i < 225; i++){
            starsX[i] = Math.random() * 850;
            starsY[i] = Math.random() * 600;
            starsAlpha[i]=Math.random() * 200;
        }
        starsDrawn = true;
    }
    for (let i = 0; i<225; i++){
        fill(255,255,255,Math.abs(Math.sin(starsAlpha[i]))*255);
        x1 = starsX[i];
        y1 = starsY[i];
        ellipse(x1,y1,5,5);
        starsAlpha[i] += 0.01;
        starsX[i] -= 0.1;
        starsY[i] += 0.1;
        if (starsX[i] < 0){
            starsX[i] = 850;
        }
        if (starsY[i] > 650){
            starsY[i] = 0;
        }
    }
}

function characterMovement(){
    checkInput();
    noStroke();
    //Fire
    if(thrust>0){
        fill(200,35,10);
        triangle(x-width*0.17,y+height/3,x-width*0.02,y+height/3,x-width*0.19,y+height/2);
        triangle(x+width*0.17,y+height/3,x+width*0.02,y+height/3,x+width*0.19,y+height/2);
        triangle(x-width*0.10,y+height/3,x+width*0.10,y+height/3,x,y+height/1.6);
        fill(200,100,40);
        ellipse(x,y+height/3,width/3,width/5);
        fill(220,200,40);
        ellipse(x,y+height/3,width/5,width/8);
    }
    // Nose cone
    fill(220,20,20);
    const noseConeWidth = width / 4;
    const noseConeHeight = height / 4;
    ellipse(x, y-height / 4, noseConeWidth, noseConeHeight, 0, 0, Math.PI);
    //Head
    fill(200,200,200);
    quad(x-width/7, y-height/4, x+width / 7, y-height / 4,x+width /4 , y+height /4, x-width / 4, y+height / 4);
    // Windows
    fill(10,10,60);
    const windowWidth = width / 10;
    const windowHeight = height / 5;
    rect(x-width / 7, y-height / 10, windowWidth, windowHeight);
    rect(x+width  / 7 - windowWidth, y-height / 10, windowWidth, windowHeight);
    //Engine
    fill(100,100,100);
    quad(x-width/7, y+height/4, x+width / 7, y+height / 4,x+width /4 , y+height /3, x-width / 4, y+height / 3);
    
    
    fill(255,255,255);
    textSize(30);
    text("Velocity:"+velocityY.toFixed(2),700,200);
    
    if(y<700-(height/3.5)){
        velocityY=velocityY + gravity - thrust;
        if (velocityY < -4){
            velocityY = -4;
        }
        y= y+velocityY;
    }
    //Landing Coordinates
    else{
        if (velocityY > 5){
            velocityY=0;
            win = false;
        }
        else{
            velocityY=0;
            win = true;
        }
        screen = 3;
        clear();
    }
    if(y<height/3){
        y=height/3;
        
    }
}


function drawPlatform(){
    fill(86,86,86);
    ellipse(400,750,1000,400);
    noStroke();
    fill(120,120,120);
    ellipse(220,740,180,140);
    ellipse(560,650,140,120);
    ellipse(620,840,160,140);
    fill(211,197,44);
    ellipse(400,700,150,40);
}

function drawStart(){
    background(0,0,0);
    fill(255,255,255);
    textSize(100);
    textAlign(CENTER);
    text("Moon Lander",450,300);

    textSize(60);
    textAlign(CENTER);
    fill(255,255,20);
    text("Click A to start",450,400);

    if (keyIsDown(65)){
        clear();
        screen=2;
        x=400;
        y=150;
        gravity=0.1;
        thrust=0;
        velocityY=0;
    }
}

function drawGameOver(){
    
    

    if (win){
        background(10,100,100);
        textSize(60);
        textAlign(CENTER);
        fill(40,255,40);
        
        text("GG EASY",450,400);
    }
    else{
        background(20,0,5);
        textSize(60);
        textAlign(CENTER);
        fill(200,30,30);
        text("SKILL ISSUE",450,400);
    }

    //  Game Over text
    fill(255,255,255);
    textSize(100);
    textAlign(CENTER);
    text("GAME OVER",450,300);

    //  Try Again
    fill(50,50,100);
    quad(250,520,650,520,650,630,250,630);
    fill(120,180,255);
    textSize(80);
    textAlign(CENTER);
    text("Play Again",450,600);
    
    if (mouseIsPressed && mouseX >250 && mouseX < 650 && mouseY >520 && mouseY < 630){
        //console.log(screen);
        clear();
        screen=1;
    }
}

function drawGame(){
    drawStars();
    drawPlatform();
    
    characterMovement();
    
    
}

function draw(){
    clear();
    //console.log(screen);
    if (screen ===1){
        drawStart();
    }
    
    //Game - Screen 2
    if (screen===2){
        drawGame();
    }

    if (screen===3){
        drawGameOver();
    }

}






















