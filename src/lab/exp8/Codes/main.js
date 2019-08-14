let s = [],
	w = [],
	wtr = [];
var start = 0;
let wtn = 1;
var change = 0;

function setup() {
	noStroke();
	stuff();
}

function draw() {
	var cnv = createCanvas(window.innerWidth * 0.73, window.innerHeight * 0.95);
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 2;
	cnv.position(x, y);

	//not working
	if (change == window.innerHeight + window.innerWidth) {
		change = window.innerHeight + window.innerWidth;
		stuff();
	}
	background(255);



	fill(0);
	textSize(4 / 3 * window.innerWidth * 0.02);
	text('Consolidation Test', (windowWidth - width) / 2 + 5 * window.innerWidth * 0.02, window.innerWidth * 0.035);

	s[0].show();
	w[0].show(0);
	wtr[0].show();
	s[1].show();

	w[1].show(1);
	wtr[1].show();
	s[2].show();

	w[2].show(2);
	wtr[2].show();
	s[3].show();

	if (start % 2 == 1) {

		if (wtn > 6) {
			w[3].show(3);
			s[4].show();
		}

		switch (wtn) {
			case 1:
				wtn = w[0].fall(wtn, Math.floor(415 / 610 * window.innerHeight * 0.95), 1);
				break;
			case 2:
				s[1].compress(10);
				wtr[0].flow1();
				wtn = w[0].fall(wtn, Math.floor(42 / 61 * window.innerHeight * 0.95), 1);
				break;
			case 3:
				wtn = w[1].fall(wtn, Math.floor(415 / 610 * window.innerHeight * 0.95), 2);
				break;
			case 4:
				s[2].compress(20);
				wtr[1].flow2();
				wtn = w[1].fall(wtn, Math.floor(430 / 610 * window.innerHeight * 0.95), 2);
				break;
			case 5:
				wtn = w[2].fall(wtn, Math.floor(415 / 610 * window.innerHeight * 0.95), 3);
				break;
			case 6:
				s[3].compress(30);
				wtr[2].flow3();
				wtn = w[2].fall(wtn, Math.floor(435 / 610 * window.innerHeight * 0.95), 3);
				break;
			case 7:
				s[4].expand(5 / 6 * window.innerHeight * 0.95);
				wtn = w[3].lift(wtn);
		}

	}
}

function strt() {
	start = 1;
	stuff();
	wtn = 1;
}

function stuff() {
	s[0] = new soil(100);
	s[1] = new soil(250);
	s[2] = new soil(400);
	s[3] = new soil(550);
	s[4] = new soil(700);

	w[0] = new weight(255);
	w[1] = new weight(405);
	w[2] = new weight(555);
	w[3] = new weight(705);

	wtr[0] = new water_patch(250);
	wtr[1] = new water_patch(400);
	wtr[2] = new water_patch(550);

	s[4].height = Math.floor(40 / 610 * window.innerHeight * 0.95);
	s[4].y = Math.floor(445 / 610 * window.innerHeight * 0.95);
	w[3].y1 = w[3].y2 = Math.floor(435 / 610 * window.innerHeight * 0.95);
	w[3].y3 = Math.floor(385 / 610 * window.innerHeight * 0.95);

	wtr[0].s1();
	wtr[1].s2();
	wtr[2].s3();

}