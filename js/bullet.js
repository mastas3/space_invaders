function Bullet(x, y) {
	let movement = 10;
	this.x = x;
	this.y = y-50;
	this.r = 8;

	this.hits = function(aliens = []) {
		aliens.forEach((alien, i) => {
			let d = dist(this.x, this.y, alien.x, alien.y);
			if(d < this.r + alien.r) {
				aliens.splice(i, 1);
			}
		});
	}

	this.show = function() {
		noStroke();
		movement -= 5;
		fill(255, 0 , 200, 150);
		rect(this.x, this.y+=movement, this.r*2, this.r*2);
	}

}