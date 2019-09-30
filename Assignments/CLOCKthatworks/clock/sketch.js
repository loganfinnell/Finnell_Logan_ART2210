var gif_loadImg, gif_createImg;

function preload() {

  gif_createImg = createImg("flower.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  // loads only first frame
 
  // updates animation frames by using an html
  // img element, positioning it over top of
  // the canvas.
  gif_createImg.position(50, 350);
}
