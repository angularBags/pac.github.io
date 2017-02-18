 
 var radius = 20;
 
var convas = document.getElementById('convas');
var ctx = convas.getContext('2d');
  
 
 rectsCreate(radius);	 
function rectsCreate(radius){
	var quantityRect =  Math.floor( (convas.width/(radius*2))*1 )
 
	xCoordRectArr = [radius*2];
	yCoordRectArr = [radius*2];
 
	for(var i = 0; i<quantityRect*2; ){ 
		var xCoordRect = Math.floor(Math.random()*convas.width);
		var yCoordRect = Math.floor(Math.random()*convas.height);
		xCoordRect -= xCoordRect%(radius*2);
		yCoordRect -= yCoordRect%(radius*2);
		var fix = 0;
		for(var j = 0; j< xCoordRectArr.length; j++){	//console.log(    ); 
			if( (( (this.x_coord+(radius*2))>=this.xCoordRectArr[i]  )&&(  (this.x_coord)<=(this.xCoordRectArr[i]+(radius*2)) ))&&((this.y_coord+(radius*2)>=this.yCoordRectArr[i]  )&&(  (this.y_coord)<=(this.yCoordRectArr[i]+(radius*2))) ) ){fix = 1} // 1== collapse true
			if( (xCoordRect==0)||(xCoordRect==convas.width-(radius*2)) ){fix = 1} 
			if( (yCoordRect==0)||(yCoordRect==convas.height-(radius*2)) ){fix = 1} 		 
		} 
		if(fix == 0){
			ctx.fillRect(xCoordRect, yCoordRect, radius*2, radius*2);
			xCoordRectArr[i] = xCoordRect;
			yCoordRectArr[i] = yCoordRect;
			i++;
		}
	
	} 
	
	
	rectsCreate.xCoordRectArr = xCoordRectArr;
	rectsCreate.yCoordRectArr = yCoordRectArr;
}
drowRect();
function drowRect(){
	var sceneColor = 'rgb(80,150,230)';
	for(var i = 0; i<rectsCreate.xCoordRectArr.length; i++){		 
		ctx.fillStyle  = sceneColor; 
		ctx.fillRect(rectsCreate.xCoordRectArr[i], rectsCreate.yCoordRectArr[i], radius*2, radius*2); 
	}
}


function returnPac(x,y){
	var mouthSize =25;	 
	var lineWidth = 2;
	 
	var speed = 2; 
	 
	 
 
	var Obj = {
		mouthSize:mouthSize,
		x_coord: x ,
		y_coord: y ,
		rotation: 1,
		speedMouth:2,
		speed: speed,
		rotate1: 115,
		rotate2: 65,
		collision: 0,
		drop: 0,
		rotSearch: 1,
		
		fillStyle: "#fff",	
		strokeStyle:'#4678c8',
		eyesFillStyle: '#4678c8',
		eyesStrokeStyle: '#4678c8',
		eyesRadius: 2,
		
		xCoordRectArr: rectsCreate.xCoordRectArr,
		yCoordRectArr: rectsCreate.yCoordRectArr,
		 
		drowFace: function(){   
			this.x_coord +=radius;
			this.y_coord +=radius;
			this.rotate(this.rotation);
			 		//ctx.fillStyle  = '#def'; ctx.fillRect(0,0, convas.width, convas.height);
			ctx.beginPath();
				ctx.arc(this.x_coord , this.y_coord, radius,((Math.PI/180)*(180+(mouthSize+10))),((Math.PI/180)*-(this.rotate1-this.mouthSize)), false);	
				ctx.lineTo(this.x_coord, this.y_coord);
				ctx.arc(this.x_coord, this.y_coord, radius,((Math.PI/180)*-(this.rotate2+this.mouthSize)),((Math.PI/180)*(180+(mouthSize+10))), false);
			ctx.lineWidth = lineWidth; 
			ctx.strokeStyle = this.strokeStyle;
			ctx.fillStyle  = this.fillStyle;
			ctx.fill();
			ctx.stroke();	
			ctx.closePath();
			
			//drow eyes  
			ctx.fillStyle  = this.eyesFillStyle;
			ctx.strokeStyle = this.eyesStrokeStyle;			
			ctx.beginPath();				 
				ctx.arc(this.x_coord+this.eyesPositionX, this.y_coord-this.eyesPositionY,  this.eyesRadius,((Math.PI/180)*0),((Math.PI/180)*360), false);
			ctx.fill();
		 
			ctx.stroke();	
			ctx.closePath();
			
			
			this.x_coord -=radius;
			this.y_coord -=radius;	
			this.move(this.rotation);
			this.mouthAnim();
			this.collisionReaction(this.rotation);
			this.searchTurning(); 		
		},
		rotate: function(rotatation){
			switch(rotatation){
				case 1: this.rotate1=115; this.rotate2=65;   this.eyesPositionX = 10; this.eyesPositionY = 5; break;
				case 2: this.rotate1=25; this.rotate2=-25;	 this.eyesPositionX = 5; this.eyesPositionY = 10; break;
				case 3: this.rotate1=-65; this.rotate2=-115;	this.eyesPositionX = 10; this.eyesPositionY = -5; break;
				case 4: this.rotate1=-155; this.rotate2=-204;	this.eyesPositionX = -5; this.eyesPositionY = 10; break;
			}
		},
		sign:1,
		 
		mouthAnim: function(){
			if( mouthSize <= this.mouthSize  ){
				this.sign = -this.speedMouth; 
			}else if(this.mouthSize <= 0){
				this.sign = this.speedMouth; 
			}
			this.mouthSize += (1*this.sign);				
		},
		move: function(rotatation){
			switch(rotatation){
				case 1: this.y_coord -= this.speed; break;
				case 2: this.x_coord += this.speed; break;
				case 3: this.y_coord += this.speed; break;
				case 4: this.x_coord -= this.speed; break;
			}
		},
		collision: function(){  
			var add = 3;
			if((this.y_coord<0)||(this.x_coord<0)||(this.x_coord>(convas.width-radius*2))||(this.y_coord>(convas.height-radius*2))){
				 
				return 1;
			}
			 for(var i = 0 ; i < this.xCoordRectArr.length; i++){
			 if( (( (this.x_coord+(radius*2))>=this.xCoordRectArr[i]+add  )&&(  (this.x_coord)<=(this.xCoordRectArr[i]+(radius*2))-add ))&&((this.y_coord+(radius*2)>=this.yCoordRectArr[i]+add  )&&(  (this.y_coord)<=(this.yCoordRectArr[i]+(radius*2))-add) ) ){
					 
					return 1;
				}
			}  
		},
		speedMouthFn: function(){
			this.speedMouth *= 2;
			setTimeout(function(){  Obj.speedMouth /=5 },500);			
		},
		collisionReaction: function(rot){ 
			if(this.collision()){
				switch(rot){
					case 1:	this.y_coord += this.speed; break;
					case 2:	this.x_coord -= this.speed; break;
					case 3:	this.y_coord -= this.speed; break;
					case 4:	this.x_coord += this.speed; break;
				}
			}		
		},
		searchTurning: function(){	
			var add = 3;
			var check = 0;
			switch(this.rotSearch){
				case 1:  
				for(var i = 0 ; i < this.xCoordRectArr.length; i++){
		if((((this.x_coord+(radius*2))>=this.xCoordRectArr[i]+add)&&((this.x_coord)<=(this.xCoordRectArr[i]+(radius*2))-add ))&&
		((this.y_coord+(radius*2)>=this.yCoordRectArr[i]+add )&&((this.y_coord)-this.speed<=(this.yCoordRectArr[i]+(radius*2))-add))){		check = 1;
		} 
				 } 
				 if(check == 1){/* console.log('no') */}else{/* console.log('ok'), */ this.rotation = 1}
					break;
					
				case 2: 
				for(var i = 0 ; i < this.xCoordRectArr.length; i++){
				if(  (( (this.x_coord+(radius*2))+this.speed>=this.xCoordRectArr[i]+add  )&&(  (this.x_coord)<=(this.xCoordRectArr[i]+(radius*2))-add ))&&((this.y_coord+(radius*2)>=this.yCoordRectArr[i]+add )&&(  (this.y_coord)<=(this.yCoordRectArr[i]+(radius*2))-add) ) ){check = 1;} 
				 } 
				 if(check == 1){/* console.log('no') */}else{/* console.log('ok'), */ this.rotation = 2}
					break;
				
				case 3: 
				 for(var i = 0 ; i < this.xCoordRectArr.length; i++){
				 if(  (( (this.x_coord+(radius*2))>=this.xCoordRectArr[i]+add  )&&(  (this.x_coord)<=(this.xCoordRectArr[i]+(radius*2))-add ))&&((this.y_coord+(radius*2)+this.speed>=this.yCoordRectArr[i]+add )&&(  (this.y_coord)<=(this.yCoordRectArr[i]+(radius*2))-add) ) ){check = 1;} 				 
				 } 
				 if(check == 1){/* console.log('no') */}else{/* console.log('ok'),  */this.rotation = 3}
					break;
					
				case 4: 
				 for(var i = 0 ; i < this.xCoordRectArr.length; i++){
				 if(  (( (this.x_coord+(radius*2))>=this.xCoordRectArr[i]+add  )&&(  (this.x_coord)-this.speed<=(this.xCoordRectArr[i]+(radius*2))-add ))&&((this.y_coord+(radius*2)>=this.yCoordRectArr[i]+add )&&(  (this.y_coord)<=(this.yCoordRectArr[i]+(radius*2))-add) ) ){check = 1;} 				 
				 } 
				 if(check == 1){/* console.log('no') */}else{/* console.log('ok'), */ this.rotation = 4}
					break;
			}
		},
		animate: function(callbackFn,ms){ 
			var nextFrame = window.requestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.msRequestAnimationFrame;
			var countIteration = 1;
			if(ms){
				var crat = Math.floor(ms/16.6);
				slow();
			}else{
				standart();
			}	
			function standart(){
				animate.id = nextFrame(standart);
				callbackFn();	// Drawing code goes here	
				 if(Obj.drop){cancelAnimationFrame(animate.id);  Obj = '';}
			}
			function slow(){	 	
				animate.id = nextFrame(slow);
				countIteration++;
				if((countIteration%crat)==0){callbackFn()}	;
				if(Obj.drop){cancelAnimationFrame(animate.id);	Obj = '';}
			}
			
		}  
		 
		 
	}
	Obj.animate(function(){  Obj.drowFace( )  },fps);
	return Obj;
}
 

function returnEnemy(x,y){
	var ghostFog = 8;
	var speedFog = 1;
	var lineWidth = 2;
	var color = 'rgb(70,120,200)';
	var  eyesRadius = 3;
	
	
	var enemy = returnPac();
	enemy.speed = 0.5;
	enemy.x_coord = x;
	enemy.y_coord = y;
	enemy.ghostFog = ghostFog;
	enemy.fillStyle = 'rgb(255,255,255)';
	enemy.eyesColor = 'rgb(100,120,200)';
	enemy.vulnerable = 0;
	enemy.start = 0;
	enemy.drowFace = function(){  
			enemy.x_coord +=20;
			enemy.y_coord +=20;
 
			ctx.beginPath();
				ctx.arc(this.x_coord, this.y_coord, radius,((Math.PI/180)*180),((Math.PI/180)*0), false);	
				ctx.lineTo(this.x_coord+(radius+this.ghostFog/2), this.y_coord+radius);
					ctx.lineTo(this.x_coord+(3*(radius+this.ghostFog/2)/4), this.y_coord+radius/2);
					ctx.lineTo(this.x_coord+(2*(radius+this.ghostFog)/4), this.y_coord+radius);
					ctx.lineTo(this.x_coord+((radius+this.ghostFog)/4), this.y_coord+radius/2);
					ctx.lineTo(this.x_coord+(this.ghostFog/2), this.y_coord+radius);
					ctx.lineTo(this.x_coord-(radius-this.ghostFog)/4, this.y_coord+radius/2);
					ctx.lineTo(this.x_coord-2*(radius-this.ghostFog)/4, this.y_coord+radius);
					ctx.lineTo(this.x_coord-3*(radius-this.ghostFog/2)/4, this.y_coord+radius/2);
				ctx.lineTo(this.x_coord-(radius-this.ghostFog/2), this.y_coord+radius);
				ctx.lineTo(this.x_coord-radius, this.y_coord);
			ctx.lineWidth = lineWidth; 
			ctx.strokeStyle = this.fillStyle;
			ctx.fillStyle  = this.fillStyle;
			ctx.fill();
			ctx.stroke();	
			ctx.closePath();
 
			this.eyesPosition(this.rotation);
			 
			//var  eyesPosition = 0;
		 	ctx.beginPath();
				ctx.arc(this.x_coord+(radius/3-1)-this.eyesPositionX, this.y_coord-this.eyesPositionY,  eyesRadius,((Math.PI/180)*0),((Math.PI/180)*360), false);						
			ctx.strokeStyle = this.eyesColor; 
			ctx.stroke(); 
			ctx.closePath();
			
			ctx.beginPath();
				ctx.arc(this.x_coord-(radius/3-1)-this.eyesPositionX, this.y_coord-this.eyesPositionY,  eyesRadius,((Math.PI/180)*0),((Math.PI/180)*360), false);	
			ctx.strokeStyle = this.eyesColor; 
			ctx.stroke(); 
			ctx.closePath();
			
			enemy.x_coord -=20;
			enemy.y_coord -=20;
			
			this.move(this.rotation);
			this.fogAnim();	
			this.vulnerability(this.vulnerable);
			this.collisionReaction(this.rotation);
			this.searchTurning();
			var myRand = Math.floor((Math.random()*10000));
			if( myRand%500 == 0){ enemy.rechangeRotation(); /* console.log('enemy.rechangeRotation: ',myRand); */}
		}
	enemy.eyesPosition = function(rotatation){ 
			switch(rotatation){ 
				case 1: this.eyesPositionX = 0; this.eyesPositionY = 9; break;
				case 2: this.eyesPositionX = -5; this.eyesPositionY = 5; break;
				case 3: this.eyesPositionX = 0; this.eyesPositionY = 1; break;
				case 4: this.eyesPositionX = 5; this.eyesPositionY = 5; break;
			}
		}
	enemy.fogAnim = function(){
			if( ghostFog <= this.ghostFog  ){
				this.sign = -speedFog; 
			}else if(this.ghostFog <= (-ghostFog)){
				this.sign = speedFog; 
			}
			this.ghostFog += (0.5*this.sign);				
		}
	 
	enemy.vulnerability = function(vulnerable){ 
			if(vulnerable){
				this.fillStyle = 'rgb(70,120,200)';
				this.eyesColor = 'rgb(255,255,255)';
			}else{
				this.fillStyle = 'rgb(120,170,250)';
				this.eyesColor = 'rgb(255,255,255)';
			}  			
		},
	enemy.collisionReaction = function(rot){ 
			if(this.collision()){
				switch(rot){
					case 1:	this.y_coord += this.speed; break;
					case 2:	this.x_coord -= this.speed; break;
					case 3:	this.y_coord -= this.speed; break;
					case 4:	this.x_coord += this.speed; break;
				}
				enemy.rechangeRotation()  
			}
		},
	enemy.rechangeRotation = function(rot){ 
		  this.rotSearch = Math.floor(Math.random()*4)+1;
	},
	enemy.animateEn = function(callbackFn,ms){
			var id;
			var nextFrame = window.requestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.msRequestAnimationFrame;
			var countIteration = 1;
			if(ms){
				var crat = Math.floor(ms/16.6);
				slow();
			}else{
				standart();
			}	
			function standart(){
				id = nextFrame(standart);
				callbackFn();	// Drawing code goes here	
				 if(enemy.drop){cancelAnimationFrame(id);enemy = '';}
			}
			function slow(){	 	
				id = nextFrame(slow);
				countIteration++;
				if((countIteration%crat)==0){callbackFn()}	;
				if(enemy.drop){cancelAnimationFrame(id);enemy = '';}
			}
			
		}	 	
	enemy.animateEn(function(){enemy.drowFace();},fps);
	 
	return enemy;
}

function returnFood(xFood,yFood){
	var xFood = 0;
	var yFood = 0;
	function emptyCoord(){ 
			var xCoordRect = Math.floor(Math.random()*convas.width);
			var yCoordRect = Math.floor(Math.random()*convas.height);
			xCoordRect -= xCoordRect%(radius*2);
			yCoordRect -= yCoordRect%(radius*2);
			//console.log(rectsCreate.xCoordRectArr,rectsCreate.yCoordRectArr);
			//console.log(xCoordRect, yCoordRect);
			for(var i = 0; i < rectsCreate.xCoordRectArr.length; i++){	
	if( (( xCoordRect+(radius*2)>=rectsCreate.xCoordRectArr[i] )&&(  xCoordRect<=rectsCreate.xCoordRectArr[i]+(radius*2) ))&&
		((yCoordRect+(radius*2)>=rectsCreate.yCoordRectArr[i]  )&&( yCoordRect<=rectsCreate.yCoordRectArr[i]+(radius*2) ) ) ){
					emptyCoord();
					break;
				}
			}
			xFood = xCoordRect;
			yFood = yCoordRect;
		}
	emptyCoord();
	 
	var food = {
		 
		xFood: xFood,
		yFood: yFood,
		drowFood: function(){
			ctx.fillStyle  = '#159';
			ctx.fillRect(this.xFood, this.yFood, radius*2, radius*2);
			console.log(1)
		},
		animate: function(callbackFn,ms){ 
			var nextFrame = window.requestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.msRequestAnimationFrame;
			var countIteration = 1;
			if(ms){
				var crat = Math.floor(ms/16.6);
				slow();
			}else{
				standart();
			}	
			function standart(){
				animate.id = nextFrame(standart);
				callbackFn();	// Drawing code goes here	
				 if(food.drop){cancelAnimationFrame(animate.id);  food = '';}
			}
			function slow(){	 	
				animate.id = nextFrame(slow);
				countIteration++;
				if((countIteration%crat)==0){callbackFn()}	;
				if(food.drop){cancelAnimationFrame(animate.id);	food = '';}
			}
			
		}
	}
	console.log('food to be created')
	food.animate(function(){  food.drowFood( )  });
	return food;
}

 
 
 
 
 
 