nose_x=0;
nose_y=0;
  function preload(){
  img= loadImage('https://i.postimg.cc/2S9Sfzb5/red-nose.png');
}
function setup(){
canvas =createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet= ml5.poseNet(video, modelloaded);
poseNet.on('pose', gotResult)
}
function gotResult(results){
    if(results.length>0){
        console.log(results);
nose_x=results[0].pose.nose.x;
nose_y=results[0].pose.nose.y;
       console.log("nose x =" +nose_x);
       console.log("nose y ="+ nose_y);
    }
}
function modelloaded(){
    console.log("Model Loaded");
}
function draw(){
image(video, 0, 0, 300, 300);
//fill(255, 0, 0);
//stroke(255, 0, 0);
//circle(nose_x, nose_y, 20);
image(img, nose_x, nose_y, 30, 30);
}
function takeSnapshot(){
    save("Filter_img.png");
}