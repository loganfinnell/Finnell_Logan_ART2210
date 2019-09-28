function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}
function draw() {

  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;


  background(255);
  rotate(h);
  ![glass](https://loganfinnell.github.io/Finnell_Logan_ART2210/Assignments/CLOCKthatworks/clock/Screenshot_20190926-102242_Instagram.png)
}