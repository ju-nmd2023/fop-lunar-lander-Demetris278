
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



function keyPressed(){
    if(keyIsDown(87)){
        if(thrust==0){
            velocityY = 0;
            thrust= 0.3;
        }
        else{
        thrust= thrust * 1.5;
        }
        if (thrust > 3){
            thrust = 3;
        }
    }
    console.log(thrust);
}

function draw(){
    background(0,0,0);
    quad(x1,y1,x2,y2,x3,y3,x4,y4);
    //console.log(velocityY);
    
    velocityY=velocityY + gravity - thrust;
    if (velocityY < -3){
        velocityY = -3;
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




























