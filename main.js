function bedroom(){
    window.location="bedroom.html"
}
function masterbedroom(){
    window.location="masterbedroom.html"
}
function livingroom(){
    window.location="livingroom.html"
}
function kitchen(){
    window.location="kitchen.html"
}
function party(){
    window.location="party.html"
}
pix=""
status=""
function preload(){
    pix=loadImage("dog_cat.jpg")
}
function setup(){
    canvas=createCanvas(600,400)
    canvas.center()
    objectDetector=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML="status-Detecting Objects"
}
function draw(){
    image(pix,0,0,600,400)
    fill("black")
    text("Cat",280,70)
    noFill()
    stroke("blue")
    rect(280,90,200,450)
}

function modelLoaded(){
console.log("model loaded")
status=true
objectDetector.detect(pix, gotResult)
}

function gotResult(error, results){
if (error) {
    console.log(error)
} else {
    console.log(results)
}
}

