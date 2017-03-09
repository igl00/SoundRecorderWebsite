var canvas = document.getElementById('specgen');
var side_fade_ratio = 0.25;

var spectrum = new Spectrum(canvas.getContext('2d'));
spectrum.init();	

render();

function render() {
	spectrum.update();
	spectrum.draw();
	requestAnimationFrame(render);
}

function Spectrum(ctx) {
	var lines = [];
	var generator = new Generator();
	var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);

	gradient.addColorStop(0, "rgba(150, 150, 150, 0)");
	gradient.addColorStop(side_fade_ratio, "rgba(150, 150, 150, 1)");
	gradient.addColorStop(1 - side_fade_ratio, "rgba(150, 150, 150, 1)");
	gradient.addColorStop(1, "rgba(150, 150, 150, 0)");

	this.init = function () {
		for (var i = 0; i < canvas.width; i++) {
			this.update();
		}
		for (var j = 0; j < canvas.width; j++) {
			lines[j].x = j;
		}
	};

	this.update = function() {
		if (lines.length >= canvas.width) {
			lines.shift();
		}

		line_height = generator.run();
		lines.push(new Line(ctx, canvas.width, canvas.height / 2 - line_height / 2, canvas.height / 2 - line_height / 2 + line_height))
	};

	this.draw = function() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.beginPath();
		for (var i = 0; i < lines.length; i++) {
			lines[i].update();
			lines[i].draw();
		}
		ctx.strokeStyle = gradient;
		ctx.stroke();
	}
}

function Line(ctx, i_x, i_y_0, i_y_1) {
	this.x = i_x;
	this.y_0 = i_y_0;
	this.y_1 = i_y_1;
	this.alpha = 1;

	this.update = function (n_x, n_color) {
		this.x -= 1;
	};

	this.draw = function() {
		ctx.moveTo(this.x, this.y_0);
		ctx.lineTo(this.x, this.y_1);
	}
}

function Generator() {
	// return Math.random() * canvas.height;
	this.time = Date.now() / 1000;
	this.max = 0;

	this.run = function() {
		this.time += 0.01;

		wave = (Math.sin(this.time) + Math.sin(5 * this.time + 3.12) + Math.sin(2 * this.time + 7.21) + Math.sin(3.5 * this.time + 23.1432)) / 4;

		// return Math.random() * canvas.height ** wave * 10; // Looks nice
		return Math.random() * wave * canvas.height;
	}
}