

var bubbles = [];

var cols = 3;
var rows = 3;
var grid = [];
var l = 100;
var n = 0;

var s;
var r, g, b;
var tr, tg, tb;
var passedr, passedg, passedb, passedn, passeds;
var targetr, targetg, targetb;

var gridSize = 300;

var chosen;




function setup() {
    createCanvas(windowWidth, windowHeight);
	background(255); 
	
	

	
	
	for (var j = 0; j < rows; j++) {
        index = 0;
		for (var i = 0; i < cols; i++) {
			
            
			//if(i%20==0){
			if ((i+j) % 2 == 0) { 
	

     var b = new Bubble(j, i, n++);
            bubbles.push(b);
    }else{
      var b = new Bubble(j-10, i, n++);
            bubbles.push(b);
    }
           
		}
	}

	

	
	
	
	
	
	//console.log("total = " + n);
}



function draw() {

for (var i = bubbles.length-1; i >= 0; i--) {
        bubbles[i].update();
        bubbles[i].display(); 
    }
    
}



function Bubble (i, j, n) {
    this.i = i;
	this.j = j;
	this.n = n;
	this.x = i*l;
	this.y = j*l;
	
	this.s = 0;
	
	this.r = round(random(255));
	this.g = round(random(255));
	this.b = round(random(255));
	this.col = color(this.r, this.g, this.b);
	
	
	
	this.tr = round(random(255));
	this.tg = round(random(255));
	this.tb = round(random(255));
	

	
	
	
    this.display = function () {
        //imageMode(CENTER);
        //image(img, this.x, this.y, 100, 100);
		
		
	
	fill(this.col);
    
		ellipse(this.x, this.y, 34, 34);

    }
	
	
	
	
	this.clicked = function () {
		//this.passeds = 0;
			this.s = 0;
		 this.tr = round(random(255));
	       this.tg = round(random(255));
	       this.tb = round(random(255));
		
		this.d = dist(mouseX, mouseY, this.x, this.y);
		//if(this.d < this.diameter/2) {
        if(this.d < 17) {
           
			this.col = color(this.tr, this.tg, this.tb);  
			fill(this.col);
			this.s = 1;
		}
		
		var data = {
				r: this.r,
				g: this.g,
				b: this.b,
				n: this.n,
				s: this.s,
			
			tr: this.tr,
			tg: this.tg,
			tb: this.tb,
			chosen: this.n

			
			
			}
			
			socket.emit("mouse", data);
			//console.log("sending " + r + " " + g + " " +  b + " " + n);
        console.log("sending " + this.s);
		
		
	}

    this.update = function () {
		
		
      /*if (this.n == chosen) {
		this.col = color(targetr, targetg, targetb);
			fill(this.col);
	  } else {
		  this.col = color(passedr, passedg, passedb);
			fill(this.col);
	  }
	console.log("chosen = " + chosen + "has " +targetr + targetg + targetb);*/
		
		if (this.passeds == 1) {
            console.log("target = " + this.targetr + this.targetg + this.targetb);
			this.col = color(this.targetr, this.targetg, this.targetb);
			fill(this.col);
            console.log("this.passeds == 1");
		} else {
            this.col = color(this.passedr, this.passedg, this.passedb);
			fill(this.col);
        }
        
        /*else if(this.n == passedn) {
			this.col = color(this.passedr, this.passedg, this.passedb);
			fill(this.col);
		}*/
		
		
		
		console.log("passed = " + this.passedr + this.passedg + this.passedb);
		
		console.log(this.passeds);
        
		//noLoop();
    }
 }
