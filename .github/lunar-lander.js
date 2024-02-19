
//dragon
let x1=350;
let y1=0;
let x2=450;
let y2=0;
let x3=450;
let y3=50;
let x4=350;
let y4=50;
let gravity=0.1;
let thrust=0;
let velocityY=0;
let screen=1;
let s_start_game = "Start Game";
let starsX=[];
let starsY=[];
let starsAlpha=[];
let starsDrawn = false;
let win = true;

function checkInput(){
    if(keyIsDown(32)){
        console.log(thrust);
        if(thrust===0){
            //velocityY = 0;
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
    for (let i = 0; i<255; i++){
        fill(255,255,255,Math.abs(Math.sin(starsAlpha[i]))*255);
        x = starsX[i];
        y = starsY[i];
        ellipse(x,y,5,5);
        starsAlpha[i] += 0.01;/*(Math.random() - 0.5);*/
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
    fill(100,200,250);
    quad(x1,y1,x2,y2,x3,y3,x4,y4);
    //console.log(velocityY);
    
    
    fill(255,255,255);
    textSize(30);
    text(velocityY,600,200);
    
    if(y3<700 && y4<700 ){
        velocityY=velocityY + gravity - thrust;
        if (velocityY < -4){
            velocityY = -4;
        }
        y1=y1+velocityY;
        y2=y2+velocityY;
        y3=y3+velocityY;
        y4=y4+velocityY;
        //gravity= gravity * 1.02;
    }
    //Landing Coordinates
    else{
        if (velocityY > 5){
            velocityY=0;
            console.log("Peos");
            win = false;
        }
        else{
            velocityY=0;
            console.log("No peos");
            win = true;
        }
        screen = 3;
        clear();
    }
    if(y1<0 && y2<0){
        y1=0;
        y2=0;
        y3=50;
        y4=50;
        thrust = 0;
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
    fill(255,255,255);
    textSize(100);
    textAlign(CENTER);
    text(s_start_game,450,300);

    textSize(60);
    textAlign(CENTER);
    fill(255,255,20);
    text("Click A to start",450,400);

    if (keyIsDown(65)){
        //console.log(screen);
        clear();
        screen=2;
        x1=350;
        y1=0;
        x2=450;
        y2=0;
        x3=450;
        y3=50;
        x4=350;
        y4=50;
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
        
        text("GeGe",450,400);
    }
    else{
        background(20,0,5);
        textSize(60);
        textAlign(CENTER);
        fill(200,30,30);
        text("play minecraft",450,400);
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























