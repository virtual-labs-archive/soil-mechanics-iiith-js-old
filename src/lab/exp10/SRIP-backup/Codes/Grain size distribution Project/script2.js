var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = window.innerWidth; //Setting the canvas to full width of the window
canvas.height = window.innerHeight; //Setting the canvas to full height of the window
var random=Math.random();
var start=470;
var end=588;
var y=590;
var btn;
var x=470;
var z;
var k;
var s_x=820;
var flag=1;
var selection="Course";
function heading(pid)  //function for replacing the heading as per user selection
			{
				var x=pid.name;
				var h=document.getElementById("heading");
				h.innerHTML=x;
				selection=x;
				c.globalAlpha=1;
				btn.disabled=false;
				if(selection=="Course")
				{	
					
					c.clearRect(0,0,canvas.width,canvas.height);
					y=590;
					x=470;
					s_x=800;
					drawMain("#8C4527",0);
					cancelAnimationFrame(move1_id);
					cancelAnimationFrame(move1_right_id);
					cancelAnimationFrame(reform1_id);
					cancelAnimationFrame(move1_down_id);
					
					
				}
				else
				{   
				
					c.globalAlpha=1;
					c.clearRect(0,0,canvas.width,canvas.height);	
					y=590;
					x=470;
					s_x=800;
					drawMain("#8E7368",1);
					cancelAnimationFrame(move_id);
					cancelAnimationFrame(move_right_id);
					cancelAnimationFrame(reform_id);
					cancelAnimationFrame(move_down_id);
				}
			}
function left_box()
 {
		c.beginPath();
		c.lineWidth="1";
		c.strokeStyle="white";
		c.fillStyle="gray";
		c.moveTo(425,600);
		c.lineTo(425,625);
		c.lineTo(600,625);
		c.lineTo(600,600);
		c.lineTo(425,600);
		c.fill();
		c.lineTo(520,540);
		c.lineTo(695,540);
		c.lineTo(600,600);
		c.fill();
		c.lineTo(600,625);
		c.lineTo(695,565);
		c.lineTo(695,540);
		c.fill();
		c.stroke();
		c.closePath();
 }		

function right_box()
{
		c.beginPath();
		c.lineWidth="1";
		c.strokeStyle="white";
		c.fillStyle="gray";
		c.moveTo(750,600);
		c.lineTo(750,625);
		c.lineTo(925,625);
		c.lineTo(925,600);
		c.lineTo(750,600);
		c.fill();
		c.lineTo(845,540);
		c.lineTo(1020,540);
		c.lineTo(925,600);
		c.fill();
		c.lineTo(925,625);
		c.lineTo(1020,565);
		c.lineTo(1020,540);
		c.fill();
		c.stroke();
		c.closePath();
}
function static_mud(color)
{
		c.beginPath();
		c.strokeStyle=color;
		c.fillStyle=color;
		c.moveTo(470,590);
		c.lineTo(485,470);
		c.lineTo(600,470);
		c.lineTo(585,590);
		c.fill();
		c.lineTo(600,470);
		c.lineTo(650,550);
		c.lineTo(585,590);
		c.fill();
		c.stroke();
		c.strokeStyle="black";
		c.closePath();
}

function draw(lw,ss,x1,y1,x2,y2) //function for generalized drawing
			{
			c.beginPath();
			c.lineWidth=lw;
			c.StrokeStyle=ss;
			c.moveTo(x1,y1);
			c.lineTo(x2,y2);
			c.closePath();
			c.stroke();
			}
function static_dots()
{
	for(i=485;i<598;i+=3*Math.random()*2)
	{
		var temp=i;
		for(j=470;j<588;j+=3*Math.random()*2)
		{
			i=i-0.35;
			c.beginPath();
			c.moveTo(i,j);
			c.lineTo(i+Math.random()*2,j+Math.random()*2);
			c.stroke();
			c.closePath();
		
		}
		i=temp;
	}
	
	random=Math.random();
	start=y-120;
	end=y-2;
	for(i=598;i<650;i+=3*Math.random()*2)
	{
		var temp=i;
		end-=2;
		for(j=start;j<end;j+=3*Math.random()*2)
		{
			i=i-0.35;
			c.beginPath();
			c.moveTo(i,j);
			c.lineTo(i+Math.random()*2,j+Math.random()*2);
			c.stroke();
			c.closePath();
		
		}
		i=temp;
	
	}
}
function sieve()
{
	c.strokeStyle="black";
	c.fillStyle="gray";
	c.globalAlpha=0.7;
	var temp=0;
	for(i=0;i<6;i++)
	{   
		
		c.beginPath();
		c.moveTo(800,580-temp);
		c.lineTo(800,520-temp);
		c.lineTo(950,520-temp);
		c.lineTo(950,580-temp);
		c.lineTo(800,580-temp);
		c.fill();
		c.stroke();
		temp=temp+60;
	}
}
function drawMain(color,num)
{
		c.beginPath();
		c.lineWidth="10";
		c.strokeStyle="#006599";
		c.rect(150,50,1000,600);
		c.closePath();
		c.stroke();
		draw("3","#006599",350,50,350,650);
		draw("1","#006599",535,39,775,39);
		c.font="25px Arial";
		c.fillStyle="#006599";
		c.fillText("Grain size distribution",535,35);
		c.stroke();
		left_box();
		right_box();
		static_mud(color);
		static_dots();
		c.strokeStyle="white";
		c.fillStyle="white";
		c.beginPath();
		c.moveTo(598,470);
		c.lineTo(650,470);
		c.lineTo(646,540);
		c.fill();
		c.stroke();
		c.closePath();
		sieve();
		c.font="18px Arial";
		c.fillStyle="blue";
		if(num==0)
		{
			c.fillText("300 mm",840,240);
			c.fillText("80 mm",840,300);
			c.fillText("40 mm",840,360);
			c.fillText("20 mm",840,420);
			c.fillText("10 mm",840,480);
			c.fillText("4.75 mm",840,540);
		}
		else
		{
			c.fillText("2 mm",840,240);
			c.fillText("850 micron",830,300);
			c.fillText("425 micron",830,360);
			c.fillText("150 micron",830,420);
			c.fillText("75 micron",830,480);
			c.fillText("35 micron",830,540);
		}
		
}
function main()
	{   
		c.globalAlpha=1;
		c.clearRect(0,0,canvas.width,canvas.height);
		if(selection=="Course")
		{
			drawMain("#8C4527",0);
		}
		else
		{
			drawMain("#8E7368",1);
		}
		y=590;
		x=470;
		s_x=800;
		btn=document.getElementById("b");
		if(selection=="Course")
		{
			move();
		}
		else
		{
			move1();
		}
		
	}		


	
function move()
	{   
		btn.disabled=true;
		if(y>200)
			{
				move_id=requestAnimationFrame(move);
				c.clearRect(440,150,300,450);
				left_box();
				c.beginPath();
				c.strokeStyle="#8C4527";
				c.fillStyle="#8C4527";
				c.moveTo(470,y);
				c.lineTo(485,y-120);
				c.lineTo(600,y-120);
				c.lineTo(585,y);
				c.fill();
				c.lineTo(600,y-120);
				c.lineTo(650,y-40);
				c.lineTo(585,y);
				c.fill();
				c.stroke();
				c.strokeStyle="black";

			random=Math.random();
			for(i=487;i<598;i+=3*Math.random()*2)
			{
				var temp=i;
				for(j=y-120;j<y-2;j+=3*Math.random()*2)
				{
					i=i-0.35;
					c.beginPath();
					c.moveTo(i,j);
					c.lineTo(i+Math.random()*2,j+Math.random()*2);
					c.stroke();
					c.closePath();
				
				}
				i=temp;
			}
			random=Math.random();
			start=y-120;
			end=y-2;
			for(i=598;i<650;i+=3*Math.random()*2)
			{
				var temp=i;
				end-=2;
				for(j=start;j<end;j+=3*Math.random()*2)
				{
					i=i-0.35;
					c.beginPath();
					c.moveTo(i,j);
					c.lineTo(i+Math.random()*2,j+Math.random()*2);
					c.stroke();
					c.closePath();
				
				}
				i=temp;
			
			}
			c.strokeStyle="white";
			c.fillStyle="white";
			c.beginPath();
			c.moveTo(598,y-120);
			c.lineTo(650,y-120);
			c.lineTo(646,y-50);
			c.fill();
			c.stroke();
			c.closePath();
			y=y-6;
			}
			else
			{
				y=y+6;
				cancelAnimationFrame(move_id);
				move_right();
			}
	}
function move_right()
	{
		if(x<820)
			{
				move_right_id=requestAnimationFrame(move_right);
				c.clearRect(450,70,500,137);
				c.beginPath();
				c.strokeStyle="#8C4527";
				c.fillStyle="#8C4527";
				c.moveTo(x,y);
				c.lineTo(x+15,y-120);
				c.lineTo(x+130,y-120);
				c.lineTo(x+115,y);
				c.fill();
				c.lineTo(x+130,y-120);
				c.lineTo(x+180,y-40);
				c.lineTo(x+115,y);
				c.fill();
				c.stroke();
				c.strokeStyle="black";

			var random=Math.random();
			for(i=x+17;i<x+128;i+=3*Math.random()*2)
			{
				var temp=i;
				for(j=y-120;j<y-2;j+=3*Math.random()*2)
				{
					i=i-0.35;
					c.beginPath();
					c.moveTo(i,j);
					c.lineTo(i+Math.random()*2,j+Math.random()*2);
					c.stroke();
					c.closePath();
				
				}
				i=temp;
			}
			var random=Math.random();
			var start=y-120;
			var end=y-2;
			for(i=x+128;i<x+180;i+=3*Math.random()*2)
			{
				var temp=i;
				end-=2;
				for(j=start;j<end;j+=3*Math.random()*2)
				{
					i=i-0.35;
					c.beginPath();
					c.moveTo(i,j);
					c.lineTo(i+Math.random()*2,j+Math.random()*2);
					c.stroke();
					c.closePath();
				
				}
				i=temp;
			
			}
			c.strokeStyle="white";
			c.fillStyle="white";
			c.beginPath();
			c.moveTo(x+128,y-120);
			c.lineTo(x+180,y-120);
			c.lineTo(x+176,y-50);
			c.fill();
			c.stroke();
			c.closePath();
			x=x+6;
			}
			else
			{
				cancelAnimationFrame(move_right_id);
				x=x-6;
				z=y-120;
				k=x+180;
				
				reform();
				
			}
	}
	function reform()
	{   	
			if(z<y-50&&k>x+125)
			{
				reform_id=requestAnimationFrame(reform);
				c.clearRect(800,70,200,130);
				c.beginPath();
				c.strokeStyle="#8C4527";
				c.fillStyle="#8C4527";
				c.moveTo(x,y);
				c.lineTo(x+15,z);
				c.lineTo(x+130,z);
				c.lineTo(x+115,y);
				c.fill();
				c.lineTo(x+130,z);
				c.lineTo(k,y-40);
				c.lineTo(k-65,y);
				c.fill();
				c.stroke();
				c.strokeStyle="black";

			random=Math.random();
			for(i=x+17;i<x+128;i+=3*Math.random()*2)
			{
				var temp=i;
				for(j=z;j<y-2;j+=3*Math.random()*2)
				{
					i=i-0.35;
					c.beginPath();
					c.moveTo(i,j);
					c.lineTo(i+Math.random()*2,j+Math.random()*2);
					c.stroke();
					c.closePath();
				
				}
				i=temp;
			}
			random=Math.random();
			start=y-120;
			end=y-2;
			c.strokeStyle="white";
			c.fillStyle="white";
			c.beginPath();
			c.moveTo(x+128,y-120);
			c.lineTo(x+180,y-120);
			c.lineTo(x+176,y-50);
			c.fill();
			c.stroke();
			c.closePath();
			z=z+0.5;
			k=k-0.5;
	}
	else{
		cancelAnimationFrame(reform_id);
		move_down();
		
		}
	}
function move_down()
	{
		if(z<581)
	{
		
		move_down_id=requestAnimationFrame(move_down);
		c.clearRect(750,90,350,550);
		c.strokeStyle="black";
		c.fillStyle="gray";
		c.beginPath();
		c.moveTo(s_x,580);
		c.lineTo(s_x,520);
		c.lineTo(s_x+150,520);
		c.lineTo(s_x+150,580);
		c.lineTo(s_x,580);
		c.fillStyle="gray";
		c.globalAlpha=0.7;
		c.fill();
		c.stroke();
		
		c.strokeStyle="black";
		c.fillStyle="gray";
		c.beginPath();
		c.moveTo(s_x,520);
		c.lineTo(s_x,460);
		c.lineTo(s_x+150,460);
		c.lineTo(s_x+150,520);
		c.lineTo(s_x+150,520);
		c.fillStyle="gray";
		c.globalAlpha=0.7;
		c.fill();
		c.stroke();
		
		c.strokeStyle="black";
		c.fillStyle="gray";
		c.beginPath();
		c.moveTo(s_x,460);
		c.lineTo(s_x,400);
		c.lineTo(s_x+150,400);
		c.lineTo(s_x+150,460);
		c.lineTo(s_x+150,460);
		c.fillStyle="gray";
		c.globalAlpha=0.7;
		c.fill();
		c.stroke();
		
		c.strokeStyle="black";
		c.fillStyle="gray";
		c.beginPath();
		c.moveTo(s_x,400);
		c.lineTo(s_x,340);
		c.lineTo(s_x+150,340);
		c.lineTo(s_x+150,400);
		c.lineTo(s_x,400);
		c.fillStyle="gray";
		c.globalAlpha=0.7;
		c.fill();
		c.stroke();
		
		c.strokeStyle="black";
		c.fillStyle="gray";
		c.beginPath();
		c.moveTo(s_x,340);
		c.lineTo(s_x,280);
		c.lineTo(s_x+150,280);
		c.lineTo(s_x+150,340);
		c.lineTo(s_x,340);
		c.fillStyle="gray";
		c.globalAlpha=0.7;
		c.fill();
		c.stroke();
		
		c.strokeStyle="black";
		c.fillStyle="gray";
		c.beginPath();
		c.moveTo(s_x,280);
		c.lineTo(s_x,220);
		c.lineTo(s_x+150,220);
		c.lineTo(s_x+150,280);
		c.lineTo(s_x,280);
		c.fillStyle="gray";
		c.globalAlpha=0.7;
		c.fill();
		c.stroke();
		c.font="18px Arial";
		c.fillStyle="blue";
		c.fillText("300 mm",s_x+40,240);
		c.fillText("80 mm",s_x+40,300);
		c.fillText("40 mm",s_x+40,360);
		c.fillText("20 mm",s_x+40,420);
		c.fillText("10 mm",s_x+40,480);
		c.fillText("4.75 mm",s_x+40,540);	
		c.beginPath();
		c.lineWidth="1";
		c.strokeStyle="white";
		c.fillStyle="gray";
		c.moveTo(s_x-50,600);
		c.lineTo(s_x-50,625);
		c.lineTo(s_x+125,625);
		c.lineTo(s_x+125,600);
		c.lineTo(s_x-50,600);
		c.fill();
		c.lineTo(s_x+45,540);
		c.lineTo(s_x+220,540);
		c.lineTo(s_x+125,600);
		c.fill();
		c.lineTo(s_x+125,625);
		c.lineTo(s_x+220,565);
		c.lineTo(s_x+220,540);
		c.fill();
		c.stroke();
		c.closePath();
			c.beginPath();
				c.strokeStyle="#8C4527";
				c.fillStyle="#8C4527";
				c.moveTo(s_x,y);
				c.lineTo(s_x+15,z);
				c.lineTo(s_x+130,z);
				c.lineTo(s_x+115,y);
				c.fill();
				c.stroke();
				c.strokeStyle="black";

			var random=Math.random();
			for(i=s_x+15;i<s_x+128;i+=3*Math.random()*2)
			{
				var temp=i;
				for(j=z;j<y-2;j+=3*Math.random()*2)
				{
					i=i-0.35;
					c.beginPath();
					c.moveTo(i,j);
					c.lineTo(i+Math.random()*2,j+Math.random()*2);
					c.stroke();
					c.closePath();
				
				}
				i=temp;
			}
			
			y++;
			z++;
			
			if(s_x>835)
				flag=-1;
			if(s_x<805)
				flag=1;
			s_x=s_x+flag*0.4;
		if(z>280)
		{
			c.fillRect(s_x,270,150,10);
			c.stroke();
			
		}
		if(z>340)
		{
			c.fillRect(s_x,330,150,10);
			c.stroke();
		}
		if(z>400)
		{
			c.fillRect(s_x,390,150,10);
			c.stroke();
		}
		if(z>460)
		{
			c.fillRect(s_x,450,150,10);
			c.stroke();
		}
		if(z>520)
		{
			c.fillRect(s_x,510,150,10);
			c.stroke();
			
		}
		if(z>540)
		{
			c.fillRect(s_x,570,150,10);
			c.stroke();
			cancelAnimationFrame(move_down_id);
			exit("#8C4527",0);
			
			
		}
	}
}

function move1()
	{   
		btn.disabled=true;
		if(y>200)
			{
				move1_id=requestAnimationFrame(move1);
				c.clearRect(440,150,300,450);
				left_box();
				c.beginPath();
				c.strokeStyle="#8E7368";
				c.fillStyle="#8E7368";
				c.moveTo(470,y);
				c.lineTo(485,y-120);
				c.lineTo(600,y-120);
				c.lineTo(585,y);
				c.fill();
				c.lineTo(600,y-120);
				c.lineTo(650,y-40);
				c.lineTo(585,y);
				c.fill();
				c.stroke();
				c.strokeStyle="black";

			random=Math.random();
			for(i=487;i<598;i+=3*Math.random()*2)
			{
				var temp=i;
				for(j=y-120;j<y-2;j+=3*Math.random()*2)
				{
					i=i-0.35;
					c.beginPath();
					c.moveTo(i,j);
					c.lineTo(i+Math.random()*2,j+Math.random()*2);
					c.stroke();
					c.closePath();
				
				}
				i=temp;
			}
			random=Math.random();
			start=y-120;
			end=y-2;
			for(i=598;i<650;i+=3*Math.random()*2)
			{
				var temp=i;
				end-=2;
				for(j=start;j<end;j+=3*Math.random()*2)
				{
					i=i-0.35;
					c.beginPath();
					c.moveTo(i,j);
					c.lineTo(i+Math.random()*2,j+Math.random()*2);
					c.stroke();
					c.closePath();
				
				}
				i=temp;
			
			}
			c.strokeStyle="white";
			c.fillStyle="white";
			c.beginPath();
			c.moveTo(598,y-120);
			c.lineTo(650,y-120);
			c.lineTo(646,y-50);
			c.fill();
			c.stroke();
			c.closePath();
			y=y-6;
			}
			else
			{
				y=y+6;
				cancelAnimationFrame(move1_id);
				move1_right();
			}
	}
	function move1_right()
	{
		if(x<820)
			{
				move1_right_id=requestAnimationFrame(move1_right);
				c.clearRect(450,70,500,137);
				c.beginPath();
				c.strokeStyle="#8E7368";
				c.fillStyle="#8E7368";
				c.moveTo(x,y);
				c.lineTo(x+15,y-120);
				c.lineTo(x+130,y-120);
				c.lineTo(x+115,y);
				c.fill();
				c.lineTo(x+130,y-120);
				c.lineTo(x+180,y-40);
				c.lineTo(x+115,y);
				c.fill();
				c.stroke();
				c.strokeStyle="black";

			var random=Math.random();
			for(i=x+17;i<x+128;i+=3*Math.random()*2)
			{
				var temp=i;
				for(j=y-120;j<y-2;j+=3*Math.random()*2)
				{
					i=i-0.35;
					c.beginPath();
					c.moveTo(i,j);
					c.lineTo(i+Math.random()*2,j+Math.random()*2);
					c.stroke();
					c.closePath();
				
				}
				i=temp;
			}
			var random=Math.random();
			var start=y-120;
			var end=y-2;
			for(i=x+128;i<x+180;i+=3*Math.random()*2)
			{
				var temp=i;
				end-=2;
				for(j=start;j<end;j+=3*Math.random()*2)
				{
					i=i-0.35;
					c.beginPath();
					c.moveTo(i,j);
					c.lineTo(i+Math.random()*2,j+Math.random()*2);
					c.stroke();
					c.closePath();
				
				}
				i=temp;
			
			}
			c.strokeStyle="white";
			c.fillStyle="white";
			c.beginPath();
			c.moveTo(x+128,y-120);
			c.lineTo(x+180,y-120);
			c.lineTo(x+176,y-50);
			c.fill();
			c.stroke();
			c.closePath();
			x=x+6;
			}
			else
			{
				cancelAnimationFrame(move1_right_id);
				x=x-6;
				z=y-120;
				k=x+180;
				
				reform1();
				
			}
	}
	function reform1()
	{   	
			if(z<y-50&&k>x+125)
			{
				reform1_id=requestAnimationFrame(reform1);
				c.clearRect(800,70,200,130);
				c.beginPath();
				c.strokeStyle="#8E7368";
				c.fillStyle="#8E7368";
				c.moveTo(x,y);
				c.lineTo(x+15,z);
				c.lineTo(x+130,z);
				c.lineTo(x+115,y);
				c.fill();
				c.lineTo(x+130,z);
				c.lineTo(k,y-40);
				c.lineTo(k-65,y);
				c.fill();
				c.stroke();
				c.strokeStyle="black";

			random=Math.random();
			for(i=x+17;i<x+128;i+=3*Math.random()*2)
			{
				var temp=i;
				for(j=z;j<y-2;j+=3*Math.random()*2)
				{
					i=i-0.35;
					c.beginPath();
					c.moveTo(i,j);
					c.lineTo(i+Math.random()*2,j+Math.random()*2);
					c.stroke();
					c.closePath();
				
				}
				i=temp;
			}
			random=Math.random();
			start=y-120;
			end=y-2;
			c.strokeStyle="white";
			c.fillStyle="white";
			c.beginPath();
			c.moveTo(x+128,y-120);
			c.lineTo(x+180,y-120);
			c.lineTo(x+176,y-50);
			c.fill();
			c.stroke();
			c.closePath();
			z=z+0.5;
			k=k-0.5;
	}
	else{
		cancelAnimationFrame(reform1_id);
		move1_down();
		
		}
	}
	function move1_down()
	{
		if(z<581)
	{
		
		move1_down_id=requestAnimationFrame(move1_down);
		c.clearRect(750,90,350,550);
		c.strokeStyle="black";
		c.fillStyle="gray";
		c.beginPath();
		c.moveTo(s_x,580);
		c.lineTo(s_x,520);
		c.lineTo(s_x+150,520);
		c.lineTo(s_x+150,580);
		c.lineTo(s_x,580);
		c.fillStyle="gray";
		c.globalAlpha=0.7;
		c.fill();
		c.stroke();
		
		c.strokeStyle="black";
		c.fillStyle="gray";
		c.beginPath();
		c.moveTo(s_x,520);
		c.lineTo(s_x,460);
		c.lineTo(s_x+150,460);
		c.lineTo(s_x+150,520);
		c.lineTo(s_x+150,520);
		c.fillStyle="gray";
		c.globalAlpha=0.7;
		c.fill();
		c.stroke();
		
		c.strokeStyle="black";
		c.fillStyle="gray";
		c.beginPath();
		c.moveTo(s_x,460);
		c.lineTo(s_x,400);
		c.lineTo(s_x+150,400);
		c.lineTo(s_x+150,460);
		c.lineTo(s_x+150,460);
		c.fillStyle="gray";
		c.globalAlpha=0.7;
		c.fill();
		c.stroke();
		
		c.strokeStyle="black";
		c.fillStyle="gray";
		c.beginPath();
		c.moveTo(s_x,400);
		c.lineTo(s_x,340);
		c.lineTo(s_x+150,340);
		c.lineTo(s_x+150,400);
		c.lineTo(s_x,400);
		c.fillStyle="gray";
		c.globalAlpha=0.7;
		c.fill();
		c.stroke();
		
		c.strokeStyle="black";
		c.fillStyle="gray";
		c.beginPath();
		c.moveTo(s_x,340);
		c.lineTo(s_x,280);
		c.lineTo(s_x+150,280);
		c.lineTo(s_x+150,340);
		c.lineTo(s_x,340);
		c.fillStyle="gray";
		c.globalAlpha=0.7;
		c.fill();
		c.stroke();
		
		c.strokeStyle="black";
		c.fillStyle="gray";
		c.beginPath();
		c.moveTo(s_x,280);
		c.lineTo(s_x,220);
		c.lineTo(s_x+150,220);
		c.lineTo(s_x+150,280);
		c.lineTo(s_x,280);
		c.fillStyle="gray";
		c.globalAlpha=0.7;
		c.fill();
		c.stroke();
		c.font="18px Arial";
		c.fillStyle="blue";
		c.fillText("2 mm",s_x+40,240);
		c.fillText("850 micron",s_x+30,300);
		c.fillText("425 micron",s_x+30,360);
		c.fillText("150 micron",s_x+30,420);
		c.fillText("75 micron",s_x+30,480);
		c.fillText("35 micron",s_x+30,540);
		c.beginPath();
		c.lineWidth="1";
		c.strokeStyle="white";
		c.fillStyle="gray";
		c.moveTo(s_x-50,600);
		c.lineTo(s_x-50,625);
		c.lineTo(s_x+125,625);
		c.lineTo(s_x+125,600);
		c.lineTo(s_x-50,600);
		c.fill();
		c.lineTo(s_x+45,540);
		c.lineTo(s_x+220,540);
		c.lineTo(s_x+125,600);
		c.fill();
		c.lineTo(s_x+125,625);
		c.lineTo(s_x+220,565);
		c.lineTo(s_x+220,540);
		c.fill();
		c.stroke();
		c.closePath();
			c.beginPath();
				c.strokeStyle="#8E7368";
				c.fillStyle="#8E7368";
				c.moveTo(s_x,y);
				c.lineTo(s_x+15,z);
				c.lineTo(s_x+130,z);
				c.lineTo(s_x+115,y);
				c.fill();
				c.stroke();
				c.strokeStyle="black";

			var random=Math.random();
			for(i=s_x+15;i<s_x+128;i+=3*Math.random()*2)
			{
				var temp=i;
				for(j=z;j<y-2;j+=3*Math.random()*2)
				{
					i=i-0.35;
					c.beginPath();
					c.moveTo(i,j);
					c.lineTo(i+Math.random()*2,j+Math.random()*2);
					c.stroke();
					c.closePath();
				
				}
				i=temp;
			}
			
			y++;
			z++;
			
			if(s_x>835)
				flag=-1;
			if(s_x<805)
				flag=1;
			s_x=s_x+flag*0.4;
		if(z>280)
		{
			c.fillRect(s_x,270,150,10);
			c.stroke();
			
		}
		if(z>340)
		{
			c.fillRect(s_x,330,150,10);
			c.stroke();
		}
		if(z>400)
		{
			c.fillRect(s_x,390,150,10);
			c.stroke();
		}
		if(z>460)
		{
			c.fillRect(s_x,450,150,10);
			c.stroke();
		}
		if(z>520)
		{
			c.fillRect(s_x,510,150,10);
			c.stroke();
			
		}
		if(z>540)
		{
			c.fillRect(s_x,570,150,10);
			c.stroke();
			cancelAnimationFrame(move1_down_id);
			exit("#8E7368",1);
			
		}
	}
}
function exit(color,num)
{		
		
		c.clearRect(700,520,380,125);
		c.beginPath();
		c.lineWidth="1";
		c.strokeStyle="white";
		c.fillStyle="gray";
		c.moveTo(s_x-50,600);
		c.lineTo(s_x-50,625);
		c.lineTo(s_x+125,625);
		c.lineTo(s_x+125,600);
		c.lineTo(s_x-50,600);
		c.fill();
		c.lineTo(s_x+45,540);
		c.lineTo(s_x+220,540);
		c.lineTo(s_x+125,600);
		c.fill();
		c.lineTo(s_x+125,625);
		c.lineTo(s_x+220,565);
		c.lineTo(s_x+220,540);
		c.fill();
		c.stroke();
		c.closePath();
		c.strokeStyle="gray";
		c.beginPath();
		c.moveTo(s_x,580);
		c.lineTo(s_x,520);
		c.lineTo(s_x+150,520);
		c.lineTo(s_x+150,580);
		c.lineTo(s_x,580);
		c.fillStyle="gray";
		c.globalAlpha=0.7;
		c.fill();
		c.stroke();
		c.fillStyle=color;
		c.fillRect(s_x,570,150,10);
		c.stroke();
		c.fillStyle="blue";
		if(num==0)
		c.fillText("4.75 mm",s_x+40,540);
		else
		c.fillText("35 micron",s_x+40,540);
		btn.disabled=false;
		
}

drawMain("#8C4527",0);