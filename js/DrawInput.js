game.DrawInput = function() {
	this.x = 0;
	this.y = 0;
	this.z = 1;
	this.r = 50;
	this.color = "rgba(0,0,255, 0.5)";
	this.isShow = false;

	this.updatePosition = function() {
		var x = game.level.pusher.x + (game.level.pusher.w / 2);
		var y = game.level.pusher.y + (game.level.pusher.h / 2);
		this.x = x;
		this.y = y;
	};

	this.setShow = function(show) {
		this.isShow = show ? true : false;
	};

	this.drawLeftArrow = function(isGreen) {
		var points = [], point = {
		},
						color = isGreen ? "green" : "blue";
		point.x = this.x - this.r - 2;
		point.y = this.y - 15;
		points.push(point);
		point = {
		};

		point.x = this.x - this.r - 10;
		point.y = this.y;
		points.push(point);
		point = {
		};

		point.x = this.x - this.r - 2;
		point.y = this.y + 15;
		points.push(point);
		point = {
		};

		game.canvas.fillPoligon(points, color);
	};

	this.drawRightArrow = function(isGreen) {
		var points = [], point = {
		},
						color = isGreen ? "green" : "blue";
		point.x = this.x + this.r + 2;
		point.y = this.y - 15;
		points.push(point);
		point = {
		};

		point.x = this.x + this.r + 10;
		point.y = this.y;
		points.push(point);
		point = {
		};

		point.x = this.x + this.r + 2;
		point.y = this.y + 15;
		points.push(point);
		point = {
		};

		game.canvas.fillPoligon(points, color);
	};

	this.drawDownArrow = function(isGreen) {
		var points = [], point = {
		},
						color = isGreen ? "green" : "blue";
		point.y = this.y + this.r + 2;
		point.x = this.x - 15;
		points.push(point);
		point = {
		};

		point.y = this.y + this.r + 10;
		point.x = this.x;
		points.push(point);
		point = {
		};

		point.y = this.y + this.r + 2;
		point.x = this.x + 15;
		points.push(point);
		point = {
		};

		game.canvas.fillPoligon(points, color);
	};

	this.drawUpArrow = function(isGreen) {
		var points = [], point = {
		},
						color = isGreen ? "green" : "blue";
		point.y = this.y - this.r - 2;
		point.x = this.x - 15;
		points.push(point);
		point = {
		};

		point.y = this.y - this.r - 10;
		point.x = this.x;
		points.push(point);
		point = {
		};

		point.y = this.y - this.r - 2;
		point.x = this.x + 15;
		points.push(point);
		point = {
		};

		game.canvas.fillPoligon(points, color);
	};

	this.draw = function() {
		if (this.isShow) {
			game.canvas.fillCircle(this.x, this.y, this.r, this.color);

			this.drawLeftArrow(game.userInput.moveRoute.x < 0);
			this.drawRightArrow(game.userInput.moveRoute.x > 0);
			this.drawDownArrow(game.userInput.moveRoute.y < 0);
			this.drawUpArrow(game.userInput.moveRoute.y > 0);
		}
	};

	this.step = function() {
		if (this.isShow) {
			this.updatePosition();
		}
	};
};

