let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let bird = {
	bird: imgs.bd,
	
	X: 100,
	Y: 200,
	speed: 0,
	index: 0,
	alive: true,//check bird hit ground or pipe

	draw: function (bird) {
	  ctx.drawImage(bird,this.X,this.Y);
	},
	//bird fly
	birdfly: function () {
	  //change the Y coordinates by given speed
	  this.Y+=this.speed;
	  //accleration is 1
	  this.speed++;
	  //hit ground or top cellin, dead
	  if(this.Y >= 395){
		this.speed = 0;
		
		this.dead();
	  }
	  if(this.Y <= 0){
		this.speed = 0;
		this.dead();
	  }
		
		//if speed positionve, down, if speed negative,  birdup
	  if(this.speed>0){
		this.draw(this.bird);
	  }else if(this.speed<0){  
		this.draw(this.bird);
	  }else{
		this.draw(this.bird);
	  }
	  //make sure the down speed wont greater than 6
	  if(bird.speed > 6){
		bird.speed = 5;
	  }
	},
	
	dead: function() {
	  this.alive = false;
	}
  }















/*
function bird(x, y, image) {
	this.x = x,
	this.y = y,
	this.width = image.width / 2,
	this.height = image.height,
	this.image = image;
	this.draw = function(context, state) {
		if (state === "up")
			context.drawImage(image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
		else{
			context.drawImage(image, this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
		}
	}
};
*/


  