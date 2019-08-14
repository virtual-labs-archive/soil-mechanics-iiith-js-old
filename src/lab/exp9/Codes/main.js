let ut, sl, lt;
var start = 0,
	count = 0,
	run = 0;
var ww = window.innerWidth,
	wh = window.innerHeight;

function init() {
	ut = new upper_tool();
	sl = new soil(ut);
	lt = new lower_part(ut, sl);
	count = 0;
	start = 0;
	if (run > 0)
		setTimeout(function () {
			sl.update_y(ut);
			start = 1;
		}, 500);
	else {
		start = 1;
		sl.update_y(ut);
	}
	run = 1;
}

function setup() {
	frameRate(5);
	ut = new upper_tool();
	sl = new soil(ut);
	lt = new lower_part(ut, sl);
}

function draw() {
	var cnv = createCanvas(ww * 0.73, wh * 0.95);
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 2;
	cnv.position(x, y);
	background(255);
	fill(0);
	textSize(4 / 3 * ww * 0.02);
	text('Direct Shear Test', (windowWidth - width) / 2 + 5 * ww * 0.02, ww * 0.035);
	ut.show();
	lt.show();
	sl.show();

	if (start % 2 == 1) {
		lt.move_left(count);
		sl.move_left(count);
		count++;
	}
}