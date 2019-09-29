var gif_loadImg, gif_createImg;

function preload() {
  gif_loadImg = loadImage("https://creativecodingart2210fall2019section2.github.io/Finnell_Logan_ART2210/Assignments/CLOCKthatworks/clock/flower.gif");
  gif_createImg = createImg("https://creativecodingart2210fall2019section2.github.io/Finnell_Logan_ART2210/Assignments/CLOCKthatworks/clock/flower.gif");
}

function setup() {
  createCanvas(500, 700);
  background(0);
}

function draw() {
  // loads only first frame
  image(gif_loadImg, 50, 50);
  
  // updates animation frames by using an html
  // img element, positioning it over top of
  // the canvas.
  gif_createImg.position(50, 350);
}
