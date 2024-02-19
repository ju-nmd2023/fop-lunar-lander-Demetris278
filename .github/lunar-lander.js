
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
let screen=2;
let s_start_game = "Start Game";
let starsX=[];
let starsY=[];
let starsAlpha=[];
let starsDrawn = false;
function checkInput(){
    if(keyIsDown(87)){
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

function obstaclesMovement(){
    if (starsDrawn === false){
        for (let i = 0; i < 30; i++){
            starsX[i] = Math.random() * 775 +  25;
            starsY[i] = Math.random() * 550 + 50;
            starsAlpha[i]=Math.random() * 255;
        }
        starsDrawn = true;
    }
    for (let i = 0; i<30; i++){
        fill(255,255,255,starsAlpha[i]);
        x = starsX[i];
        y = starsY[i];
        ellipse(x,y,5,5);
        starsAlpha[i]
    }
}
function characterMovement(){
    checkInput();
    fill(100,200,250);
    quad(x1,y1,x2,y2,x3,y3,x4,y4);
    //console.log(velocityY);
    
    velocityY=velocityY + gravity - thrust;
    if (velocityY < -4){
        velocityY = -4;
    }
    if(y3<700 && y4<700 ){ 
        y1=y1+velocityY;
        y2=y2+velocityY;
        y3=y3+velocityY;
        y4=y4+velocityY;
        //gravity= gravity * 1.02;
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
    }
}

function drawGame(){
    obstaclesMovement();
    drawPlatform();
    
    characterMovement();

    
}

function draw(){
    background(0,0,0);
    //console.log(screen);
    if (screen ===1){
        drawStart();
    }
    
    //Game - Screen 2
    if (screen===2){
        drawGame();
    }
}




















