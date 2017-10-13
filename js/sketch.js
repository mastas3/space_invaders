var ball;
var aliens = [];
const numOfAliens = 9;
var timer = 0;

function setup() {
	createCanvas(800,600);
	ball = new Ball();
	for(let i = 0; i < numOfAliens; i++) {
		aliens.push(new Alien(i*80+80, 60));
	}
}

function draw() {
	timer+=1;
	background(51);
	ball.show();
	handleKeyPress();
	aliens.forEach(alien => {
		alien.show();
		if(timer % 100 === 0) {
			alien.move();
		}
	});
}


function handleKeyPress() {
	if(keyIsDown(LEFT_ARROW)) {
		ball.moveX(-1);
	} else if(keyIsDown(RIGHT_ARROW)) {
		ball.moveX(1);
	} else if(keyIsDown(UP_ARROW)) {
		ball.moveY(-1);
	} else if(keyIsDown(DOWN_ARROW)) {
		ball.moveY(1);
	}
	if(keyIsDown(32)) {
		ball.fire(aliens)
	}				
}

