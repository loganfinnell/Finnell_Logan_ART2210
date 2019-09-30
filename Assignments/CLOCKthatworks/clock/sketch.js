var gif_loadImg, gif_createImg;

function preload() {
<<<<<<< HEAD
  gif_loadImg = loadImage("flower.gif");
=======

>>>>>>> 37a924a818b75f9e7bec80d516a18d1193568ecf
  gif_createImg = createImg("flower.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
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
