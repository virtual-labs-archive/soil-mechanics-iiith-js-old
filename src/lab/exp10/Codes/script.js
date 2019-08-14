var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
canvas.width = window.innerWidth; //Setting the canvas to full width of the window
canvas.height = window.innerHeight; //Setting the canvas to full height of the window

function draw_main()
{
		c.beginPath();
	c.strokeStyle="#006599";
	c.lineWidth="10";
	c.rect(250,10,900,650);
	c.closePath();
	c.stroke();
	c.font="20px Arial";
	c.fillStyle="#006599";
	c.fillText("Triaxial Test",650,35);
	c.beginPath();
	c.strokeStyle="black";
	c.lineWidth="1";
	c.moveTo(462,200);
	c.lineTo(612,200);
	c.lineTo(612,165);
	c.lineTo(782,165);
	c.lineTo(782,200);
	c.lineTo(932,200);
	c.lineTo(932,220);
	c.lineTo(742,220);
	c.lineTo(742,260);
	c.lineTo(647,260);
	c.lineTo(647,220);
	c.lineTo(462,220);
	c.lineTo(462,200);
	c.fillStyle="#CCCCCC";
	c.fill();
	c.stroke();
	c.closePath();

	c.beginPath();
	c.strokeStyle="black";
	c.lineWidth="1";
	c.moveTo(475,200);
	c.lineTo(475,189);
	c.lineTo(505,189);
	c.lineTo(505,200);
	c.lineTo(475,200);
	c.fillStyle="#999999";
	c.fill();
	c.stroke();
	c.closePath();

	c.closePath();
	c.beginPath();
	c.strokeStyle="black";
	c.lineWidth="1";
	c.moveTo(919,200);
	c.lineTo(919,189);
	c.lineTo(889,189);
	c.lineTo(889,200);
	c.lineTo(919,200);
	c.fillStyle="#999999";
	c.fill();
	c.stroke();
	c.closePath();

	c.beginPath();
	c.strokeStyle="black";
	c.lineWidth="1";
	c.moveTo(462,600);
	c.lineTo(462,533);
	c.lineTo(654,533);
	c.lineTo(654,300);
	c.lineTo(679.5,300);
	c.lineTo(679.5,135);
	c.lineTo(709.5,135);
	c.lineTo(709.5,300);
	c.lineTo(734.5,300);
	c.lineTo(734.5,533);
	c.lineTo(932,533);
	c.lineTo(932,600);
	c.lineTo(462,600);
	c.fillStyle="#999999";
	c.fill();
	c.stroke();
	c.closePath();

	c.beginPath();
	c.arc(685,290,7.5,1.25*Math.PI,1.75*Math.PI);
	c.stroke();
	c.closePath();
	c.beginPath();
	c.arc(694,279,7.5,0.2*Math.PI,0.7*Math.PI);
	c.stroke();
	c.closePath();
	c.beginPath();
	c.arc(705,289,7.5,1.25*Math.PI,1.7*Math.PI);
	c.lineTo(709.5,135);
	c.lineTo(679.5,135);
	c.lineTo(679.5,283);
	c.fillStyle="#CCCCCC";
	c.fill();
	c.stroke();
	c.closePath();

	c.beginPath();
	c.strokeStyle="#0067FD";
	c.fillStyle="#0067FD";
	c.moveTo(432,560);
	c.lineTo(688,560);
	c.lineTo(688,500);
	c.lineTo(694,500);
	c.lineTo(694,566);
	c.lineTo(432,566);
	c.lineTo(432,560);
	c.fill();
	c.stroke();
	c.closePath();

	c.beginPath();
	c.strokeStyle="#0067FD";
	c.fillStyle="#0067FD";
	c.moveTo(962,566);
	c.lineTo(780,566);
	c.lineTo(780,533);
	c.lineTo(786,533);
	c.lineTo(786,560);
	c.lineTo(962,560);
	c.lineTo(962,566);
	c.fill();
	c.stroke();
	c.closePath();

	c.beginPath();
	c.strokeStyle="black";
	c.lineWidth="1";
	c.moveTo(482.5,187);
	c.lineTo(482.5,600);
	c.lineTo(497.5,600);
	c.lineTo(497.5,187);
	c.lineTo(482.5,187);
	c.fillStyle="#CCCCCC";
	c.fill();
	c.stroke();
	c.closePath();


	c.beginPath();
	c.strokeStyle="black";
	c.lineWidth="1";
	c.moveTo(911.5,187);
	c.lineTo(911.5,600);
	c.lineTo(896.5,600);
	c.lineTo(896.5,187);
	c.lineTo(911.5,187);
	c.fillStyle="#CCCCCC";
	c.fill();
	c.stroke();
	c.closePath();

	c.beginPath();
	c.strokeStyle="black";
	c.lineWidth="1";
	c.moveTo(540,213);
	c.lineTo(550,213);
	c.lineTo(550,540);
	c.lineTo(540,540);
	c.lineTo(540,213);
	c.fillStyle="white";
	c.fill();
	c.stroke();
	c.closePath();

	c.beginPath();
	c.strokeStyle="black";
	c.lineWidth="1";
	c.moveTo(840,213);
	c.lineTo(850,213);
	c.lineTo(850,540);
	c.lineTo(840,540);
	c.lineTo(840,213);
	c.fillStyle="white";
	c.fill();
	c.stroke();
	c.closePath();

	c.beginPath();
	c.strokeStyle="black";
	c.lineWidth="1";
	c.moveTo(654,528);
	c.lineTo(648,528);
	c.lineTo(648,304);
	c.lineTo(654,304);
	c.lineTo(654,528);
	c.fillStyle="white";
	c.fill();
	c.stroke();
	c.closePath();

	c.beginPath();
	c.strokeStyle="black";
	c.lineWidth="1";
	c.moveTo(741,528);
	c.lineTo(735,528);
	c.lineTo(735,304);
	c.lineTo(741,304);
	c.lineTo(741,528);
	c.fillStyle="white";
	c.fill();
	c.stroke();
	c.closePath();

	c.beginPath();
	c.arc(645,515,2,0,2*Math.PI);
	c.fillStyle="black";
	c.fill();
	c.stroke();
	c.closePath();

	c.beginPath();
	c.arc(645,506,2,0,2*Math.PI);
	c.fillStyle="black";
	c.fill();
	c.stroke();
	c.closePath();

	c.beginPath();
	c.arc(645,320,2,0,2*Math.PI);
	c.fillStyle="black";
	c.fill();
	c.stroke();
	c.closePath();

	c.beginPath();
	c.arc(645,329,2,0,2*Math.PI);
	c.fillStyle="black";
	c.fill();
	c.stroke();
	c.closePath();


	c.beginPath();
	c.arc(744,515,2,0,2*Math.PI);
	c.fillStyle="black";
	c.fill();
	c.stroke();
	c.closePath();

	c.beginPath();
	c.arc(744,506,2,0,2*Math.PI);
	c.fillStyle="black";
	c.fill();
	c.stroke();
	c.closePath();

	c.beginPath();
	c.arc(744,320,2,0,2*Math.PI);
	c.fillStyle="black";
	c.fill();
	c.stroke();
	c.closePath();

	c.beginPath();
	c.arc(744,329,2,0,2*Math.PI);
	c.fillStyle="black";
	c.fill();
	c.stroke();
	c.closePath();


	c.beginPath();
	c.moveTo(654,490);
	c.lineTo(654,500);
	c.lineTo(734,500);
	c.lineTo(734,490);
	c.lineTo(654,490);
	c.fillStyle="#FFCC00";
	c.fill();
	c.stroke();
	c.closePath();


	c.beginPath();
	c.moveTo(654,340);
	c.lineTo(654,350);
	c.lineTo(734,350);
	c.lineTo(734,340);
	c.lineTo(654,340);
	c.fillStyle="#FFCC00";
	c.fill();
	c.stroke();
	c.closePath();

	c.beginPath();
	c.rect(654,350,80,140);
	c.fillStyle="#984C2C";
	c.fill();
	c.stroke();

	var random=Math.random();
	for(i=655;i<732;i+=3*Math.random()*2)
		for(j=352;j<488;j+=3*Math.random()*2)
		{
			c.beginPath();
			c.moveTo(i,j);
			c.lineTo(i+Math.random()*2,j+Math.random()*2);
			c.stroke();
			c.closePath();
		}
	c.beginPath();
	c.strokeStyle="red";
	c.lineWidth="3";
	c.arc(565,90,120,1.9*Math.PI,0);
	c.lineTo(675,90);
	c.lineTo(695,105);
	c.lineTo(715,90);
	c.lineTo(703,90);
	c.arc(823,90,120,1*Math.PI,1.1*Math.PI);
	c.lineTo(677.5,53);
	c.fillStyle="red";
	c.fill();
	c.stroke();

	c.beginPath();
	c.strokeStyle="#0067FD";
	c.lineWidth="1";
	c.moveTo(555,365);
	c.lineTo(585,365);
	c.lineTo(585,358);
	c.lineTo(600,368);
	c.lineTo(585,378);
	c.lineTo(585,372);
	c.lineTo(555,372);
	c.lineTo(555,365);
	c.fillStyle="#0067FD";
	c.fill();
	c.stroke();

	c.beginPath();
	c.strokeStyle="#0067FD";
	c.lineWidth="1";
	c.moveTo(555,395);
	c.lineTo(585,395);
	c.lineTo(585,388);
	c.lineTo(600,398);
	c.lineTo(585,408);
	c.lineTo(585,402);
	c.lineTo(555,402);
	c.lineTo(555,395);
	c.fillStyle="#0067FD";
	c.fill();
	c.stroke();

	c.beginPath();
	c.strokeStyle="#0067FD";
	c.lineWidth="1";
	c.moveTo(555,425);
	c.lineTo(585,425);
	c.lineTo(585,418);
	c.lineTo(600,428);
	c.lineTo(585,438);
	c.lineTo(585,432);
	c.lineTo(555,432);
	c.lineTo(555,425);
	c.fillStyle="#0067FD";
	c.fill();
	c.stroke();

	c.beginPath();
	c.strokeStyle="#0067FD";
	c.lineWidth="1";
	c.moveTo(555,455);
	c.lineTo(585,455);
	c.lineTo(585,448);
	c.lineTo(600,458);
	c.lineTo(585,468);
	c.lineTo(585,462);
	c.lineTo(555,462);
	c.lineTo(555,455);
	c.fillStyle="#0067FD";
	c.fill();
	c.stroke();


	c.beginPath();
	c.strokeStyle="#0067FD";
	c.lineWidth="1";
	c.moveTo(835,365);
	c.lineTo(805,365);
	c.lineTo(805,358);
	c.lineTo(790,368);
	c.lineTo(805,378);
	c.lineTo(805,372);
	c.lineTo(835,372);
	c.lineTo(835,365);
	c.fill();
	c.stroke();
	c.closePath();

	c.beginPath();
	c.strokeStyle="#0067FD";
	c.lineWidth="1";
	c.moveTo(835,395);
	c.lineTo(805,395);
	c.lineTo(805,388);
	c.lineTo(790,398);
	c.lineTo(805,408);
	c.lineTo(805,402);
	c.lineTo(835,402);
	c.lineTo(835,395);
	c.fill();
	c.stroke();
	c.closePath();

	c.beginPath();
	c.strokeStyle="#0067FD";
	c.lineWidth="1";
	c.moveTo(835,425);
	c.lineTo(805,425);
	c.lineTo(805,418);
	c.lineTo(790,428);
	c.lineTo(805,438);
	c.lineTo(805,432);
	c.lineTo(835,432);
	c.lineTo(835,425);
	c.fill();
	c.stroke();
	c.closePath();

	c.beginPath();
	c.strokeStyle="#0067FD";
	c.lineWidth="1";
	c.moveTo(835,455);
	c.lineTo(805,455);
	c.lineTo(805,448);
	c.lineTo(790,458);
	c.lineTo(805,468);
	c.lineTo(805,462);
	c.lineTo(835,462);
	c.lineTo(835,455);
	c.fill();
	c.stroke();
	c.closePath();
}
draw_main();

var count=1,y=0.1;
var sign=1;

function arrow()
{ 
	if(105+y<130&&105+y>105)
	{
	
	arrow_id=requestAnimationFrame(arrow);
	c.clearRect(660,50,70,83);
	c.beginPath();
	c.strokeStyle="red";
	c.lineWidth="3";
	c.arc(565,90+y,120,1.9*Math.PI,0);
	c.lineTo(675,90+y);
	c.lineTo(695,105+y);
	c.lineTo(715,90+y);
	c.lineTo(703,90+y);
	c.arc(823,90+y,120,1*Math.PI,1.1*Math.PI);
	c.lineTo(677.5,53+y);
	c.fillStyle="red";
	c.fill();
	c.stroke();
	y=y+0.55*sign;
	}
	else if(count!=10)
	{
		sign=sign*-1;
		y=y+0.55*sign;
		count=count+1;
		arrow_id=requestAnimationFrame(arrow);
	}
}

var arrow1_x=0.1;
var sign1=1;
var count1=1;
function arrow1()
{
	if((600+arrow1_x)<645&&(600+arrow1_x>600))
	{
		c.clearRect(554,350,91,120);
		arrow1_id=requestAnimationFrame(arrow1);
		c.beginPath();
		c.strokeStyle="#0067FD";
		c.lineWidth="1";
		c.moveTo(555+arrow1_x,365);
		c.lineTo(585+arrow1_x,365);
		c.lineTo(585+arrow1_x,358);
		c.lineTo(600+arrow1_x,368);
		c.lineTo(585+arrow1_x,378);
		c.lineTo(585+arrow1_x,372);
		c.lineTo(555+arrow1_x,372);
		c.lineTo(555+arrow1_x,365);
		c.fillStyle="#0067FD";
		c.fill();
		c.stroke();

		c.beginPath();
		c.strokeStyle="#0067FD";
		c.lineWidth="1";
		c.moveTo(555+arrow1_x,395);
		c.lineTo(585+arrow1_x,395);
		c.lineTo(585+arrow1_x,388);
		c.lineTo(600+arrow1_x,398);
		c.lineTo(585+arrow1_x,408);
		c.lineTo(585+arrow1_x,402);
		c.lineTo(555+arrow1_x,402);
		c.lineTo(555+arrow1_x,395);
		c.fillStyle="#0067FD";
		c.fill();
		c.stroke();

		c.beginPath();
		c.strokeStyle="#0067FD";
		c.lineWidth="1";
		c.moveTo(555+arrow1_x,425);
		c.lineTo(585+arrow1_x,425);
		c.lineTo(585+arrow1_x,418);
		c.lineTo(600+arrow1_x,428);
		c.lineTo(585+arrow1_x,438);
		c.lineTo(585+arrow1_x,432);
		c.lineTo(555+arrow1_x,432);
		c.lineTo(555+arrow1_x,425);
		c.fillStyle="#0067FD";
		c.fill();
		c.stroke();

		c.beginPath();
		c.strokeStyle="#0067FD";
		c.lineWidth="1";
		c.moveTo(555+arrow1_x,455);
		c.lineTo(585+arrow1_x,455);
		c.lineTo(585+arrow1_x,448);
		c.lineTo(600+arrow1_x,458);
		c.lineTo(585+arrow1_x,468);
		c.lineTo(585+arrow1_x,462);
		c.lineTo(555+arrow1_x,462);
		c.lineTo(555+arrow1_x,455);
		c.fillStyle="#0067FD";
		c.fill();
		c.stroke();
		arrow1_x+=1*sign1;
	}
	else if(count1!=10)
	{
		sign1=sign1*-1;
		arrow1_x=arrow1_x+1*sign1;
		count1=count1+1;
		arrow1_id=requestAnimationFrame(arrow1);
	}
}

var arrow2_x=-0.1;
var sign2=1;
var count2=1;
function arrow2()
{
		if(790+arrow2_x>745&&790+arrow2_x<790)
		{
			c.clearRect(744,350,92,120);
			arrow2_id=requestAnimationFrame(arrow2);
			c.beginPath();
			c.strokeStyle="#0067FD";
			c.fillStyle="#0067FD";
			c.lineWidth="1";
			c.moveTo(835+arrow2_x,365);
			c.lineTo(805+arrow2_x,365);
			c.lineTo(805+arrow2_x,358);
			c.lineTo(790+arrow2_x,368);
			c.lineTo(805+arrow2_x,378);
			c.lineTo(805+arrow2_x,372);
			c.lineTo(835+arrow2_x,372);
			c.lineTo(835+arrow2_x,365);
			c.fill();
			c.stroke();
			c.closePath();

			c.beginPath();
			c.strokeStyle="#0067FD";
			c.lineWidth="1";
			c.moveTo(835+arrow2_x,395);
			c.lineTo(805+arrow2_x,395);
			c.lineTo(805+arrow2_x,388);
			c.lineTo(790+arrow2_x,398);
			c.lineTo(805+arrow2_x,408);
			c.lineTo(805+arrow2_x,402);
			c.lineTo(835+arrow2_x,402);
			c.lineTo(835+arrow2_x,395);
			c.fill();
			c.stroke();
			c.closePath();

			c.beginPath();
			c.strokeStyle="#0067FD";
			c.lineWidth="1";
			c.moveTo(835+arrow2_x,425);
			c.lineTo(805+arrow2_x,425);
			c.lineTo(805+arrow2_x,418);
			c.lineTo(790+arrow2_x,428);
			c.lineTo(805+arrow2_x,438);
			c.lineTo(805+arrow2_x,432);
			c.lineTo(835+arrow2_x,432);
			c.lineTo(835+arrow2_x,425);
			c.fill();
			c.stroke();
			c.closePath();

			c.beginPath();
			c.strokeStyle="#0067FD";
			c.lineWidth="1";
			c.moveTo(835+arrow2_x,455);
			c.lineTo(805+arrow2_x,455);
			c.lineTo(805+arrow2_x,448);
			c.lineTo(790+arrow2_x,458);
			c.lineTo(805+arrow2_x,468);
			c.lineTo(805+arrow2_x,462);
			c.lineTo(835+arrow2_x,462);
			c.lineTo(835+arrow2_x,455);
			c.fill();
			c.stroke();
			c.closePath();
			c.stroke();
			arrow2_x+=1*sign2;
		}
		else if(count2!=11)
		{
			sign2=sign2*-1;
			arrow2_x=arrow2_x+1*sign2;
			count2=count2+1;
			arrow2_id=requestAnimationFrame(arrow2);
		}
		else
		{
			btn.disabled=false;
		}
}
var btn;
function main()
{
	btn=document.getElementById("b");
	btn.disabled=true;
	count=1,y=0.1;
	sign=1;
	arrow1_x=0.1;
	sign1=1;
	count1=1;
	arrow2_x=-0.1;
	sign2=1;
	count2=1;
	arrow1();
	arrow2();
	arrow();
}
