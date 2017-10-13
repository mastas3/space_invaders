function Ball() {
	const movement = 10;	
	this.x = width / 2;
	this.y = height-80;
	this.bullets = [];
	this.bulletMovement = 10;
	this.aliens = null;

	this.moveX = function(dir) {
		if(this.x + dir*movement > width-40 || this.x + dir*movement < 40) {
			return;
		}
		this.x += dir*movement;
	}

	this.moveY = function(dir) {
		if(this.y + dir*movement > height-40 || this.y + dir*movement < 40) {
			return;
		}
		this.y += dir*movement;
	}	

	this.show = function(movement) {
		fill(0);
		ellipse(this.x, this.y, 40, 40);
		if(this.bullets.length) {
			this.bullets.forEach(bullet => {
				bullet.show();
				bullet.hits(this.aliens || []);
			})
		}
	}

	this.fire = function(aliens) {
		this.aliens = aliens;
		this.bullets.push(new Bullet(this.x, this.y));
	}
}