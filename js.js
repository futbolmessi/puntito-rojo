var cancion="";
function preload() {
cancion=loadSound("Barcaa.mp3")
}
scoreRightWrist=0;
scoreLeftWrist=0;

rightWristX=0;
rightWristY=0;

leftWristX=0;
leftWristY=0;

function setup() {
canvas=createCanvas(499,449);
canvas.center(); 
canvas.position(299,299);
video=createCapture(VIDEO); 
video.hide();
poseNet=ml5.poseNet(video,dumb_ways_to_die);
poseNet.on("pose",a)
}

function dumb_ways_to_die() {
 console.log("poseNet")   
}

function a(hi) {
 if (hi.lenght>0) {
scoreRightWrist=hi[0].pose.keypoints[10].score;
scoreLeftWrist=hi[0].pose.keypoints[9].score;
//---------------------------------------------//
rightWristX=hi[0].pose.rightWrist.x;
rightWristY=hi[0].pose.rightWrist.y;
//--------------------------------------------//
leftWristX=hi[0].pose.leftWrist.x;
rleftWristY=hi[0].pose.leftWrist.y;
}   
}

function draw() {
 image(video,0,0,550,549); 
 fill("#0080ff");
 stroke("#0080ff");
 if (scoreRightWrist>0.2) {
 circle(rightWristX,rightWristY,19);
 if (rightWristY>0 && 100>rightWristY) {
 document.getElementById("xy_yx").innerHTML="0.5";
 cancion.rate(0.5)  
 }  
 if (rightWristY>100 && 200>rightWristY) {
document.getElementById("xy_yx").innerHTML="1";
cancion.rate(1)  
    } 
 if (rightWristY>200 && 300>rightWristY) {
document.getElementById("xy_yx").innerHTML="1.5";
cancion.rate(1.5)  
} 
if (rightWristY>300 && 400>rightWristY) {
 document.getElementById("xy_yx").innerHTML="2";
cancion.rate(2)  
  }  
if (rightWristY>400 && 500>rightWristY)
{
document.getElementById("xy_yx").innerHTML="2.5";
cancion.rate(2.5)
 }     
} 
if (scoreLeftWrist>0.2) {
circle(leftWristX,leftWristY,19);   
Q=Number(leftWristX);
U=floor(Q*2);
E=U/1000;
document.getElementById("yx_xy").innerHTML="volumen"+E;
cancion.setVolumen(E);
} 
}
function reproducir_un_temaso() {
cancion.play();
cancion.setVolumen(1);
cancion.rate(1);
}