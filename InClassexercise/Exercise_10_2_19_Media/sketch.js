var img;
function preload() {
img = loadImage("https://github.com/loganfinnell/Finnell_Logan_ART2210/raw/master/InClassexercise/Exercise_10_2_19_Media/download.jpg");
}


function setup(){
 
    createCanvas(windowWidth,windowHeight);
  
 }
  
 function draw(){// three-digit hexadecimal RGB notation
  

 
    image(img, 0, 0);
    
      



 }
 
  
 function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
 }
 

 

 
