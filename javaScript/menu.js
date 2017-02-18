	var optionsObj = {
		player1: {
			fillStyle: "#ffffff",	
			strokeStyle:'#4678c8',
			eyesFillStyle: '#4678c8',
			eyesStrokeStyle: '#4678c8',
			eyesRadius: 2,
		},
		player2: {
			fillStyle: "#ffffff",	
			strokeStyle:'#4678c8',
			eyesFillStyle: '#4678c8',
			eyesStrokeStyle: '#4678c8',
			eyesRadius: 2,
		}
	}
	
	var containerBtn = document.getElementById("containerBtn");	
	var containerBtnWidth = window.getComputedStyle(containerBtn).width.split("")
	 containerBtnWidth.splice(-2,2);
	containerBtnWidth =  containerBtnWidth.join('')


	containerBtn.style.top = -(convas.height-50)+'px';
	containerBtn.style.left = (convas.width/2 - (containerBtnWidth/2) )+'px';
	
	var restart = document.getElementById("restart");
	restart.addEventListener('click',function(){
		 	
		restart.style.display = 'none';
	 clearAll()
	 startFn();
	},false);
	
	 
	
	var options = document.getElementById("options");
	var palayer_1 = document.getElementById("palayer_1");
	var palayer_2 = document.getElementById("palayer_2");
	options.addEventListener('click',function(){ 
		options.style.display = 'none';
		palayer_1.style.display = 'block';
		if(players == 2){
		palayer_2.style.display = 'block';
		}
		 two.style.display = 'none';
		 back.style.display = 'block';
	},false);
	
	var back = document.getElementById("back");
	back.addEventListener('click',function(){ 
		 two.style.display = 'block';
		 start.style.display = 'block';
		 options.style.display = 'block';
		 palayer_1.style.display = 'none';
		 palayer_2.style.display = 'none';
		 menuOptions.style.display = 'none';
		 back.style.display = 'none';
	},false);
	
	var start = document.getElementById("start");
	start.addEventListener('click',startModul,false);
	function startModul(){
		start.style.display = 'none';
		options.style.display = 'none';
		palayer_1.style.display = 'none';
		palayer_2.style.display = 'none';
		 back.style.display = 'none';
		two.style.display = 'none';
		startFn();
		document.getElementById("menuOptions").style.display = 'none';
	}
	var two = document.getElementById("two");
	two.addEventListener('click',setTwoBtn  ,false);
	 function setTwoBtn(){
		two.removeEventListener('click',setTwoBtn  ,false);
		players = 2;	 
		two.style.color = '#def';
		two.style.background = '#49a';
		two.addEventListener('click', clearTwoBtn ,false);
		function clearTwoBtn(){
			two.removeEventListener('click', clearTwoBtn ,false);
			players = 1;	 
			two.style.color = '#49a';
			two.style.background = '#def';	 
			two.addEventListener('click',setTwoBtn  ,false);
		}
	}
 	 
	
 
 //var p1 = returnPacShowP1(150,50)
   var palayer_1 = document.getElementById("palayer_1");
   palayer_1.addEventListener('click',function(){
	document.getElementById("feelColor").value = optionsObj.player1.fillStyle;
	document.getElementById("strokeColor").value = optionsObj.player1.strokeStyle 
    document.getElementById("eyesFeelColor").value = optionsObj.player1.eyesFillStyle;
	document.getElementById("eyesStrokeColor").value = optionsObj.player1.eyesStrokeStyle;
	document.getElementById("eyesRadius").value = optionsObj.player1.eyesRadius;
	var p1 = returnPacShowP1(200,50);
	document.getElementById("menuOptions").style.display = "block";
	document.getElementById("palayer_1").style.display = "none";
	document.getElementById("palayer_2").style.display = "none";
	var save = document.getElementById("save");
	save.addEventListener('click',saveFn,false);
		function saveFn(){
			save.removeEventListener('click',saveFn ,false);
			optionsObj.player1.fillStyle = document.getElementById("feelColor").value;
			optionsObj.player1.strokeStyle = document.getElementById("strokeColor").value;
			optionsObj.player1.eyesFillStyle = document.getElementById("eyesFeelColor").value;
			optionsObj.player1.eyesStrokeStyle = document.getElementById("eyesStrokeColor").value;
			optionsObj.player1.eyesRadius = document.getElementById("eyesRadius").value;
			var p1 = returnPacShowP1(200,50);
		}
	
   },false);
	
   var palayer_2 = document.getElementById("palayer_2");
   palayer_2.addEventListener('click',function(){
	document.getElementById("feelColor").value = optionsObj.player2.fillStyle;
	document.getElementById("strokeColor").value = optionsObj.player2.strokeStyle 
    document.getElementById("eyesFeelColor").value = optionsObj.player2.eyesFillStyle;
	document.getElementById("eyesStrokeColor").value = optionsObj.player2.eyesStrokeStyle;
	document.getElementById("eyesRadius").value = optionsObj.player2.eyesRadius;
	var p2 = returnPacShowP2(200,50);
	document.getElementById("menuOptions").style.display = "block";
	document.getElementById("palayer_1").style.display = "none";
	document.getElementById("palayer_2").style.display = "none";
	var save = document.getElementById("save");
	save.addEventListener('click',saveFn,false);
	function saveFn(){
		save.removeEventListener('click',saveFn ,false);
		optionsObj.player2.fillStyle = document.getElementById("feelColor").value;
		optionsObj.player2.strokeStyle = document.getElementById("strokeColor").value;
		optionsObj.player2.eyesFillStyle = document.getElementById("eyesFeelColor").value;
		optionsObj.player2.eyesStrokeStyle = document.getElementById("eyesStrokeColor").value;
		optionsObj.player2.eyesRadius = document.getElementById("eyesRadius").value;
		var p2 = returnPacShowP2(200,50);
	}
	
   },false);
   
 function returnPacShowP1(x,y){
	var mouthSize =0;	 
	var lineWidth = 2;	 
	var speed = 2; 	 
	var ctxShow = document.getElementById('showPac').getContext('2d');
 
	var Obj = {
		mouthSize:mouthSize,
		x_coord: x,
		y_coord: y,
		rotation: 1,
		speedMouth:2,
		speed: speed,
		rotate1: 115,
		rotate2: 65,
		collision: 0,
		drop: 0,
		rotSearch: 1,
		
		fillStyle: optionsObj.player1.fillStyle,	
		strokeStyle: optionsObj.player1.strokeStyle ,
		eyesFillStyle: optionsObj.player1.eyesFillStyle ,
		eyesStrokeStyle: optionsObj.player1.eyesStrokeStyle ,
		eyesRadius: optionsObj.player1.eyesRadius,
		
		xCoordRectArr: rectsCreate.xCoordRectArr,
		yCoordRectArr: rectsCreate.yCoordRectArr,
		 
		drowFace: function(){  
			this.eyesPositionX = 5; 
			this.eyesPositionY = 10; 
			 this.rotate1=25;
			 this.rotate2=-25;
			ctxShow.fillStyle  = '#def'; ctxShow.fillRect(0,0, 300, 100); 
			ctxShow.beginPath();
				ctxShow.arc(this.x_coord , this.y_coord, radius,((Math.PI/180)*(180+(mouthSize+10))),((Math.PI/180)*-(this.rotate1-this.mouthSize)), false);	
				ctxShow.lineTo(this.x_coord, this.y_coord);
				ctxShow.arc(this.x_coord, this.y_coord, radius,((Math.PI/180)*-(this.rotate2+this.mouthSize)),((Math.PI/180)*(180+(mouthSize+10))), false);
			ctxShow.lineWidth = lineWidth; 
			ctxShow.strokeStyle = this.strokeStyle;
			ctxShow.fillStyle  = this.fillStyle;
			ctxShow.fill();
			ctxShow.stroke();	
			ctxShow.closePath();
			
			//drow eyes  
			ctxShow.fillStyle  = this.eyesFillStyle;
			ctxShow.strokeStyle = this.eyesStrokeStyle;			
			ctxShow.beginPath();				 
				ctxShow.arc(this.x_coord+this.eyesPositionX, this.y_coord-this.eyesPositionY,  this.eyesRadius,((Math.PI/180)*0),((Math.PI/180)*360), false);
			ctxShow.fill();
		 
			ctxShow.stroke();	
			ctxShow.closePath();
 
		},	
		
	}
	Obj.drowFace()
	return Obj;
}
 
 function returnPacShowP2(x,y){
	var mouthSize =0;	 
	var lineWidth = 2;	 
	var speed = 2; 	 
	var ctxShow = document.getElementById('showPac').getContext('2d');
 
	var Obj = {
		mouthSize:mouthSize,
		x_coord: x,
		y_coord: y,
		rotation: 1,
		speedMouth:2,
		speed: speed,
		rotate1: 115,
		rotate2: 65,
		collision: 0,
		drop: 0,
		rotSearch: 1,
		
		fillStyle: optionsObj.player2.fillStyle,	
		strokeStyle: optionsObj.player2.strokeStyle ,
		eyesFillStyle: optionsObj.player2.eyesFillStyle ,
		eyesStrokeStyle: optionsObj.player2.eyesStrokeStyle ,
		eyesRadius: optionsObj.player2.eyesRadius,
		
		xCoordRectArr: rectsCreate.xCoordRectArr,
		yCoordRectArr: rectsCreate.yCoordRectArr,
		 
		drowFace: function(){  
			this.eyesPositionX = 5; 
			this.eyesPositionY = 10; 
			 this.rotate1=25;
			 this.rotate2=-25;
			ctxShow.fillStyle  = '#def'; ctxShow.fillRect(0,0, 300, 100); 
			ctxShow.beginPath();
				ctxShow.arc(this.x_coord , this.y_coord, radius,((Math.PI/180)*(180+(mouthSize+10))),((Math.PI/180)*-(this.rotate1-this.mouthSize)), false);	
				ctxShow.lineTo(this.x_coord, this.y_coord);
				ctxShow.arc(this.x_coord, this.y_coord, radius,((Math.PI/180)*-(this.rotate2+this.mouthSize)),((Math.PI/180)*(180+(mouthSize+10))), false);
			ctxShow.lineWidth = lineWidth; 
			ctxShow.strokeStyle = this.strokeStyle;
			ctxShow.fillStyle  = this.fillStyle;
			ctxShow.fill();
			ctxShow.stroke();	
			ctxShow.closePath();
			
			//drow eyes  
			ctxShow.fillStyle  = this.eyesFillStyle;
			ctxShow.strokeStyle = this.eyesStrokeStyle;			
			ctxShow.beginPath();				 
				ctxShow.arc(this.x_coord+this.eyesPositionX, this.y_coord-this.eyesPositionY,  this.eyesRadius,((Math.PI/180)*0),((Math.PI/180)*360), false);
			ctxShow.fill();
		 
			ctxShow.stroke();	
			ctxShow.closePath();
 
		},	
		
	}
	Obj.drowFace()
	return Obj;
}
 
