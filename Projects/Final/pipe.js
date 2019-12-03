function Pipe(){
this.top = random(height/2);
this.bottom = random(height/2);
this.x = width;
this.w = random(width/8);
this.speed = 3;


this.highlight = false;

this.hits = function(ball){
if (ball.y < this.top || ball.y > height - this.bottom){
 
 if (ball.x > this.x && ball.x < this.x + this.w){
    
    this.highlight = true;
    return true;  
 }
}

return false;



}




this.show = function(){
fill(255);
if (this.highlight){
    fill (random(0, 100));
}

rect(this.x, 0, this.w, this.top);
rect(this.x, height-this.bottom, this.w, this.bottom);
}

this.update = function(){
this.x -= this.speed;
}

this.offscreen = function() {
    if (this.x <-this.w){
    return true;
} else{
    return false;

}
}
}