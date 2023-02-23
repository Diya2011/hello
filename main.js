function setup(){
    canvas=createCanvas(900,600)
}
function preload(){
    apple=loadImage("apple.png")
}
x=0; 
y=0;
draw_circle="";
draw_rect="";
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();
function start(){
document.getElementById("status").innerHTML="System is listening, Please speak"
recognition.start()
}
recognition.onresult=function(event)
{
    console.log(event)

var content=event.results[0][0].transcript
document.getElementById("status").innerHTML="Speech has been recognized as "+content
if (content=="Apple") {
    x=Math.floor(Math.random()*900)
    y=Math.floor(Math.random()*600)
    document.getElementById("status").innerHTML="Started drawing Apple... "
     draw_circle="set"
}
}

function draw(){
    if (draw_circle=="set") {
       radius =Math.floor(Math.random()*100)
image(apple,x,y,50,50)
       document.getElementById("status").innerHTML="Apple is drawn!"
       draw_circle=""
    }
   
}