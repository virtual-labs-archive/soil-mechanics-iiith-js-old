//javascript code using p5.js 
let k = 0;
let counter = 0;
let transperency = 0;
class contain//class for 1 2 4 figs
{
	constructor(x,y,cond)
	{
		this.x = x;
		this.y = y;
		this.cond = cond;
	}
	display()
	{
		strokeWeight(4);
		
    	fill(255,255,255);
    	rect(420*width/1920+this.x*width/1920,180*height/1080+this.y*height/1080,130*width/1920,100*height/1080,20*height/1080);
    	fill(104,118,129);
    	rect(395*width/1920+ this.x*width/1920,280*height/1080+ this.y*height/1080,180*width/1920,50*height/1080);
    	fill(25, 68, 102);
    	quad(395*width/1920+ this.x*width/1920,330*height/1080+ this.y*height/1080,575*width/1920+ this.x*width/1920,330*height/1080+ this.y*height/1080,620*width/1920+ this.x*width/1920,380*height/1080+ this.y*height/1080,360*width/1920+ this.x*width/1920,380*height/1080+ this.y*height/1080);
    	fill(255,255,255);
    	ellipse(485*width/1920+ this.x*width/1920,190*height/1080+ this.y*height/1080,130*width/1920,30*height/1080);
		rect(450*width/1920+ this.x*width/1920,300*height/1080+ this.y*height/1080,60*width/1920,10*height/1080);
		//general template for figure
		// strokeWeight(3);
		// fill(255,255,255);
		// rect(width/4.57 + this.x*width/1920,height/6 + this.y*height/1080,width/14.769,height/10.8,20);
		// fill(104,118,129);
		// rect(width/4.877 + this.x*width/1920,height/3.85+ this.y*height/1080,width/10.66,height/21.6);
		// fill(25, 68, 102);
		// quad(width/4.86 + this.x*width/1920,height/3.27+ this.y*height/1080,width/3.339+ this.x*width/1920,height/3.272+ this.y*height/1080,width/3.09+ this.x*width/1920,height/2.84+ this.y*height/1080,width/5.33+ this.x*width/1920,height/2.84+ this.y*height/1080);
		// fill(255,255,255);
		// ellipse(width/3.95+ this.x*width/1920,height/5.68+ this.y*height/1080,width/14.7,height/36);
		// rect(width/4.26+ this.x*width/1920,height/3.6+ this.y*height/1080,width/32,height/108);
		if(this.cond == 2 && counter > 100)//fig 2 
		{
			noStroke();
		fill(160,82,45,transperency);
		rect(width/4.57 + this.x*width/1920,height/6 + this.y*height/1080+50*height/1080,width/14.769,height/10.8/2,20);
		fill(0);
		stroke(0);
		strokeWeight(0);
		textSize(20*width/1920);
      	text('WET SOIL', width/1.18, height/4);
      	strokeWeight(2);	
      	let i = 0;
    	let v = 0;
    	  while(v!=4)  //animation for fig 2
      	{
        	while(i!=13)
       	 {
        	  strokeWeight(4);
        	  stroke(54,81,94,transperency);
          	point((1425+10*i)*width/1920,(240+10*v)*height/1080);
          	stroke(54,81,94);
          	i++;
        	}
       	 v++;
       	 i = 0;		
		}
		transperency = transperency + 2;
		}
		if(this.cond == 4 && counter > 500) //fig 4
		{
			stroke(0);
		strokeWeight(0);
		fill(160,82,45,300);
		rect(width/4.57 + this.x*width/1920,height/6 + this.y*height/1080+50*height/1080,width/14.769,height/10.8/2,20);
		stroke(0);
		strokeWeight(0);
		textSize(20*width/1920);
		fill(0);
      	text('DRY SOIL', width/1.18, height/1.33);
		strokeWeight(2);
		}
	}
}
class oven
{
	display()//fig 3 ie oven
	{
    strokeWeight(7);
    fill(255,255 - k*3,255 - k*3);//gradually makes red
    rect(380*width/1920,610*height/1080,200*width/1920,200*height/1080);
    fill(255,255,255);
    strokeWeight(3);
    rect(420*width/1920,680*height/1080,130*width/1920,100*height/1080,20);
    fill(255,255,255);
    ellipse(485*width/1920,690*height/1080,130*width/1920,30*height/1080);
    fill(255,0,0);
    rect(378*width/1920,815*height/1080,205*width/1920,50*height/1080);
    fill(255,255,255);
    rect(450*width/1920,830*height/1080,60*width/1920,10*height/1080);
    rect(420*width/1920,820*height/1080,10*width/1920,10*height/1080);
    rect(420*width/1920,840*height/1080,10*width/1920,10*height/1080);
    fill(160 ,82,45)
    rect(420*width/1920,730*height/1080,130*width/1920,50*height/1080,20);
    strokeWeight(0.1)
    ellipse((420+130/2)*width/1920,(730+50/2-15)*height/1080,130*width/1920,(70-k)*height/1080);
    let i = 0;
    let v = 0;
      while(v!=4) //animation for oven
      {
        while(i!=12)
        {
          strokeWeight(4);
          stroke(54,81,94);
          point((425+10*i)*width/1920,(740+10*v)*height/1080);
          i++;
        }
        v++;
        i = 0;
      }
      stroke(0);
      strokeWeight(0);
      fill(0);
      textSize(20*width/1920);
      text('OVEN', 620*width/1920, 750*height/1080);
      strokeWeight(2);
      if(counter > 200 && counter < 450)//animation for oven (soil goes down)
      {
      k = k + 0.2;
      if(k > 55)
      {
      	k = 0;      
      }
  		}
	  }
}
function setup() { 
	frameRate(60);
  createCanvas(windowWidth, windowHeight);
  background(255,255,255);
  a = new contain(0,0,1);     //new object for fig 1
  b = new contain(1000,0,2);  //new object for fig 2
  c = new oven();             //new object for oven
  d = new contain(1000,500,4);//new object for fig 4
} 
function draw() { 	
background(255,255,255);					//main drawing function
  		a.display();            
  		b.display();
  		d.display();
  		c.display();
  		counter++;              //counter for scheduling events
  		if(counter == 600)
  		{
  			counter = 0;         //reset counter
  			k = 0;
  			transperency = 0;
  		}
}
//returns window width and height at that instance
function windowResized() {						//resises the window
	resizeCanvas(windowWidth, windowHeight);
}