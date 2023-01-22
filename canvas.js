colorList = ["red","orange","yellow","lime","cyan","blue","magenta","brown","white","black"]
size = 30
curColor = "black"

function setup() {
  createCanvas(400, 400);
  background(255);
  stroke("white")
  sqColor();
}

function draw() { 
  
  stroke(curColor)
  strokeWeight(10);
  if(mouseIsPressed){
    if(mouseX <= size && mouseY <= 30*colorList.length){
      index = (int) (mouseY/30)
      print(colorList[index]);
      curColor = colorList[index]
    } else{
  	  line(mouseX,mouseY,pmouseX,pmouseY) 
    }
  } 
}

function sqColor(){
  for(var i=0; i< colorList.length; i++){
    fill(colorList[i])
    square(0,size*i,size)
  }
  
}