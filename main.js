music1 = "";
music2 = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;


function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video , modelLoaded);

    posenet.on('pose' , gotPoses);


}

function modelLoaded(){
    console.log("pose net initialized");
}



function draw(){
    image(video , 0 , 0 , 600 , 530);

}

function preload(){
    music1 = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("left wrist x =  " + leftWristX + "leftWrist Y = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("right wrist x =  " + rightWristX + "rightWrist Y = " + rightWristY);
        }
}