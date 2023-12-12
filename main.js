noseX = 0;
noseY = 0;
difference = 0;
leftwristX = 0;
rightwristX = 0;

function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(10,50);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('poseNet is initialised!');
}


function draw(){
    background('#00C28B ');
    document.getElementById("idk").innerHTML ="FONT SIZE OF THE TEXT =" +difference+"px";
    text("SHREYAAN",noseX,noseY);
    textSize(difference);
    fill('#8e3838');
   
}

function gotPoses(results) {
  if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX + "noseY = " + noseY);

    leftwristX = results[0].pose.leftWrist.x;
    rightwristX = results[0].pose.rightWrist.x;
    difference = floor(leftwristX - rightwristX);
    console.log("leftWristX = " + leftwristX + "rightWristX = " + rightwristX + "difference = " + difference);

  }

}
