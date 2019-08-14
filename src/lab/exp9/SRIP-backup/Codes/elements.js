var ch = wh * 0.95;
var cw = ww * 0.8;

class soil {

    constructor(ut) {
        this.x1 = ut.x5;
        this.x2 = ut.x5;
        this.width = ut.width5;
        this.y1 = wh*0.2;
        this.height = ut.y3 + ut.height3 - (ut.y5 + ut.height5);
        this.y2 = this.y1 + this.height;
        this.ln = [];
        this.ln2 = [];
        this.strk();
        this.strk2();
    }

    update_y(ut){
        this.y1 = ut.y5 + ut.height5;
        this.y2 = this.y1 + this.height;
        this.ln=[];
        this.ln2=[];
        this.strk();
        this.strk2();
    }

    strk() {
        this.lh = this.y1 + 1;
        while (this.lh < (this.y2 + this.height - 5)) {
            this.wid = 0;
            this.dif = Math.floor(Math.random() * 10);
            while (this.wid + this.dif < this.width) {
                this.wid += this.dif;
                this.ln.push([this.x1 + this.wid, this.lh]);
                this.dif = Math.floor(Math.random() * 10);
            }
            this.lh += 5;
        }
    }

    move_left(count) {
        if (count <= 7) {
            this.x2 = this.x2 - 2;
            this.i = 0;
            while (this.i < this.ln.length) {
                if (this.ln[this.i][1] > this.y2) {
                    this.ln[this.i][0] -= 2;
                }
                this.i++;
            }
        }
    }
    strk2() {
        this.lh = this.y2 - 3;
        while (this.lh < (this.y2 + 3)) {
            this.wid = 0;
            this.dif = Math.floor(Math.random() * 10);
            while (this.wid + this.dif < this.width) {
                this.wid += this.dif;
                this.ln2.push([this.x1 + this.wid, this.lh]);
                this.dif = Math.floor(Math.random() * 10);
            }
            this.lh += 2;
        }
    }

    text_write(){
        fill(255);
        textSize(4 / 3 * ch * 0.02);
            text('Compaction Soil', this.x1 + this.width/2 - 0.01 * cw, this.y1 + 0.025 * ch);
    }

    show() {
        stroke(129, 60, 32)
        fill(129, 60, 32);
        rect(this.x1, this.y1, this.width, this.height);
        rect(this.x2, this.y2, this.width, this.height);
        this.it = 0;
        fill(0, 0, 0);
        stroke(0);
        strokeWeight(1);
        while (this.it < this.ln.length) {
            line(this.ln[this.it][0], this.ln[this.it][1], this.ln[this.it][0] + 1, this.ln[this.it][1]);
            this.it += 1;
        }
        noStroke();
        if (count > 7) {
            this.it = 0;
            fill(0, 0, 0);
            stroke(0);
            strokeWeight(1);
            while (this.it < this.ln2.length) {
                line(this.ln2[this.it][0], this.ln2[this.it][1], this.ln2[this.it][0] + 1, this.ln2[this.it][1]);
                this.it += 1;
            }
        }
    }
};

class upper_tool {
    constructor() {
        this.x2 = cw * 0.2;
        this.y2 = 0.4 * ch;
        this.height2 = 0.05 * ch;
        this.width2 = ch * 0.2;

        this.x1 = this.x2;
        this.y1 = this.y2 + this.height2;
        this.height1 = ch * 0.15;
        this.width1 = this.height2;

        this.x3 = this.x2 + this.width2 - this.height2;
        this.y3 = this.y1;
        this.height3 = ch * 0.17;
        this.width3 = this.height2;


        this.x5 = this.x2 + this.width2;
        this.y5 = this.y2 + 0.13 * ch;
        this.height5 = this.height2;
        this.width5 = 0.3 * cw;

        this.x4 = this.x5 + this.width5;
        this.y4 = this.y2;
        this.height4 = this.height2 + this.height3;
        this.width4 = this.height2;

        this.x6 = this.x5 + 0.05 * cw;
        this.height6 = this.height2;
        this.y6 = this.y2 + 0.13 * ch - this.height6;
        this.width6 = 0.2 * cw;
        this.wdt = 0.04 * cw;

        this.x7 = this.x6 + 0.05 * cw;
        this.y7 = this.y6 - 0.05 * ch;
        this.height7 = 0.05 * ch;
        this.width7 = 0.1 * cw;

        this.x8 = cw * 0.1;
        this.y8 = ch * 0.2;
        this.height8 = ch * 0.885 - this.y8;
        this.width8 = ch * 0.025;

        this.x9 = this.x8;
        this.y9 = ch * 0.885;
        this.height9 = this.width8;
        this.width9 = cw * 0.7;

        this.x10 = this.x7 + 0.05 * cw;
        this.y10 = this.y7 - 0.025 * ch;
        this.rad = 0.05 * ch;
    }

    show() {
        fill(93);
        stroke(94);
        rect(this.x1, this.y1, this.width1, this.height1);
        rect(this.x2, this.y2, this.width2, this.height2);
        rect(this.x3, this.y3, this.width3, this.height3);
        rect(this.x4, this.y4, this.width4, this.height4);
        rect(this.x5, this.y5, this.width5, this.height5);
        fill(255);
        strokeWeight(4)
        stroke(0)
        rect(this.x7, this.y7, this.width7, this.height7);
        fill(93);
        stroke(94);
        rect(this.x8, this.y8, this.width8, this.height8);
        rect(this.x9, this.y9, this.width9, this.height9);
        rect(this.x6, this.y6, this.width6, this.height6);
        triangle(this.x6, this.y6, this.x6, this.y6 + this.height6, this.x6 - this.wdt, this.y6 + this.height6);
        triangle(this.x6 + this.width6, this.y6, this.x6 + this.width6, this.y6 + this.height6, this.x6 + this.wdt + this.width6, this.y6 + this.height6);
        circle(this.x10, this.y10, this.rad);
        fill(255);
        circle(this.x10, this.y10, this.rad - 5);
    }
};

class lower_part {
    constructor(up, sl) {
        this.x1 = up.x3;
        this.y1 = up.y3 + up.height3;
        this.height = sl.height;
        this.width = up.width3;
        this.x2 = up.x4;
        this.y2 = up.y4 + up.height4;
        this.x3 = this.x1;
        this.y3 = this.y1 + this.height;
        this.height3 = up.height3;
        this.width3 = up.x4 + up.width4 - up.x3;
        this.x4 = up.x2 + (up.width2 / 2);
        this.y4 = 0.5 * ch;
        this.height4 = this.y1 + this.height - this.y4;
        this.width4 = ch * 0.02;
        this.x5 = this.x4;
        this.y5 = this.y1 + this.height;
        this.height5 = this.width4;
        this.width5 = up.x3 - this.x4;
        this.x6 = up.x4 + (up.width2 / 2) - ch * 0.02;
        this.y6 = 0.5 * ch;
        this.height6 = this.y1 + this.height - this.y4;
        this.width6 = ch * 0.02;
        this.x7 = this.x3 + this.width3;
        this.y7 = this.y1 + this.height;
        this.height7 = this.width4;
        this.width7 = up.x3 - this.x4;
        this.crx = up.x5 + (up.width5 / 2);
        this.crr = 0.05 * ch;
        this.cry = this.y3 + this.height3 + this.crr / 2;
        this.dif = up.width5 / 5;
        //counter
        this.x8 = up.x2 - cw * 0.03;
        this.y8 = this.y3 + 0.1 * ch;
        this.height8 = ch * 0.05;
        this.width8 = cw * 0.06;
        this.x9 = up.x2 - 0.005 * cw;
        this.y9 = this.y8 + this.height8;
        this.height9 = up.y9 - this.y9;
        this.width9 = 0.01 * cw;
        this.x10 = this.x8 + this.width8;
        this.y10 = this.y8 + this.height8 / 2 - 0.005 * cw;
        this.width10 = this.x3 - this.x9;
        this.height10 = 0.01 * cw;
    }
    move_left(count) {
        if (count <= 7) {
            this.x1 -= 2;
            this.x2 -= 2;
            this.x3 -= 2;
            this.x4 -= 2;
            this.x5 -= 2;
            this.x6 -= 2;
            this.x7 -= 2;
            this.crx -= 2;
        }
    }
    show() {
        fill(93);
        strokeWeight(4);
        stroke(94);
        rect(this.x1, this.y1, this.width, this.height);
        rect(this.x2, this.y2, this.width, this.height);
        rect(this.x3, this.y3, this.width3, this.height3);
        rect(this.x4, this.y4, this.width4, this.height4);
        rect(this.x5, this.y5, this.width5, this.height5);
        rect(this.x6, this.y6, this.width6, this.height6);
        rect(this.x7, this.y7, this.width7, this.height7);
        circle(this.crx, this.cry, this.crr);
        fill(255);
        circle(this.crx, this.cry, this.crr - 5);
        fill(254);
        circle(this.crx - this.dif, this.cry, this.crr);
        fill(255);
        circle(this.crx - this.dif, this.cry, this.crr - 5);
        fill(254);
        circle(this.crx - (2 * this.dif), this.cry, this.crr);
        fill(255);
        circle(this.crx - (2 * this.dif), this.cry, this.crr - 5);
        fill(254);
        circle(this.crx + (2 * this.dif), this.cry, this.crr);
        fill(255);
        circle(this.crx + (2 * this.dif), this.cry, this.crr - 5);
        fill(254);
        circle(this.crx + this.dif, this.cry, this.crr);
        fill(255);
        circle(this.crx + this.dif, this.cry, this.crr - 5);
        fill(93);
        rect(this.x8, this.y8, this.width8, this.height8);
        rect(this.x9, this.y9, this.width9, this.height9);
        rect(this.x10, this.y10, this.width10, this.height10);
        fill(255);
        textSize(4 / 3 * ch * 0.03);
        if (count <= 7)
            text(count, this.x9, this.y10 + 0.025 * ch);
        else
            text('7', this.x9, this.y10 + 0.025 * ch);
    }
};