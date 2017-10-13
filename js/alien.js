function Alien(x, y) {
	this.x = x;
	this.y = y;
	this.r = 30;

	this.move = function() {
		this.y += 50;
	}

	this.show = function() {
		noStroke();
		fill(50, 255 , 160, 80);
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}

}