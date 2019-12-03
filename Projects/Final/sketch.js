
var ball;
var ball1;
var ball2;
var pipes = [];
var pipesCleared

var gravity = .5;




//yeet
function setup() {
	
	createCanvas(windowWidth, windowHeight);
	pipesCleared = 0

	ball1 = new Ball(150, windowHeight/2, 25);
	pipes.push(new Pipe());
}

function draw() {
	background(51);
	
	
	for (var i = pipes.length-1; i >= 0; i--){
		pipes[i].show();
		pipes[i].update();


		if (pipes[i].hits(ball1)){
console.log("HIT");
pipesCleared--
		}

		if(pipes[i].offscreen()){
			pipes.splice(i, 1);
			pipesCleared += 2
		}
	}

	ball1.display();

	ball1.update();


	fill(255)
	textSize(40)
	text('SCORE: ' + pipesCleared, 50, 50)

	
	if (frameCount % 150 == 0){
		pipes.push(new Pipe());
		
			}

}



