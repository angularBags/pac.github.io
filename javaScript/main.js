 
 var fps = "";
 var pacArr = [];
 var ghostArr = [];
 var vulnerableTime = 7000;
 var ghostCount = 2;
  var food;
 var players = 1;
document.onkeydown = function checkKeycode(event){ 
	 switch(event.which){	
				case 87: pacArr[0].rotSearch=1; break;
				case 68: pacArr[0].rotSearch=2; break;
				case 83: pacArr[0].rotSearch=3; break;
				case 65: pacArr[0].rotSearch=4; break;
		
				/* case 87: enemy.rotSearch=1; break;
				case 68: enemy.rotSearch=2; break;
				case 83: enemy.rotSearch=3; break;
				case 65: enemy.rotSearch=4; break; */
			}
	if(players == 2){
			 switch(event.which){	
				case 38: pacArr[1].rotSearch=1; break;
				case 39: pacArr[1].rotSearch=2; break;
				case 40: pacArr[1].rotSearch=3; break;
				case 37: pacArr[1].rotSearch=4; break;
			}	
	}
	if(window.getComputedStyle(start).display == 'block'){
		  
			 if(event.which == 13 || event.which == 32){	
				startModul()
			 }		
	} 

}

function go(){		 
		ctx.fillStyle  = '#def'; ctx.fillRect(0,0, convas.width, convas.height);
		collisionGhostPac();
		collisionFoodPac();
		drowRect();	 
		setTimeout(theEnd,1000) ;	
		 
	 }
	 
 function clearAll(){
	for(var i = 0; i < ghostArr.length; i++ ){  ghostArr[i].drop = 1; ghostArr[i] = "";}
	for(var j = 0; j < pacArr.length; j++ ){  pacArr[j].drop = 1;  pacArr[j] = ""; }
	if(food){food.drop = 1; food="" }
	animate(go.breakId)
 }
 
 function startFn(){
	 animate(go,fps); 

	 food = returnFood(80,80);
	 createPac(players);
	 createGhost();
 
	 pacArr[0].fillStyle = optionsObj.player1.fillStyle;
	 pacArr[0].strokeStyle = optionsObj.player1.strokeStyle 
	 pacArr[0].eyesFillStyle =  optionsObj.player1.eyesFillStyle;
	 pacArr[0].eyesStrokeStyle = optionsObj.player1.eyesStrokeStyle;
	 pacArr[0].eyesRadius = optionsObj.player1.eyesRadius;
	 
	 if(pacArr[1]){
		 pacArr[1].fillStyle = optionsObj.player2.fillStyle;
		 pacArr[1].strokeStyle = optionsObj.player2.strokeStyle 
		 pacArr[1].eyesFillStyle =  optionsObj.player2.eyesFillStyle;
		 pacArr[1].eyesStrokeStyle = optionsObj.player2.eyesStrokeStyle;
		 pacArr[1].eyesRadius = optionsObj.player2.eyesRadius;
	 }

 }
 
	function collisionGhostPac(){
		for(var i = 0; i < ghostArr.length; i++ ){ 
			for(var j = 0; j < pacArr.length; j++ ){  
				if( (( (pacArr[j].x_coord+(radius*2))>=ghostArr[i].x_coord )&&(  pacArr[j].x_coord<=(ghostArr[i].x_coord+(radius*2))))&&
					((pacArr[j].y_coord+(radius*2)>=ghostArr[i].y_coord )&&(  pacArr[j].y_coord<=(ghostArr[i].y_coord+(radius*2)) ) ) ){
					 
					if(ghostArr[i].vulnerable == 1){
					 
						ghostArr[i].drop = 1; ghostArr[i] = ""; 
						 
						for(var i = 0; i<ghostCount; i++){ createGhost() }
						
					}else{
						pacArr[j].drop = 1;  pacArr[j] = "";
					}
					 
				}
			}
		}
	}	 
	function collisionFoodPac(){ 
		for(var i = 0; i < pacArr.length; i++ ){ 
			if( (( (pacArr[i].x_coord+(radius*2))>=food.xFood )&&(  pacArr[i].x_coord<=(food.xFood+(radius*2))))&&((pacArr[i].y_coord+(radius*2)>=food.yFood )&&(  pacArr[i].y_coord<=(food.yFood+(radius*2)) ) ) ){ console.log('qqqq');	//console.log(pacArr.x_coord,food.xFood);		
				food.drop = 1; food = "";
				
				for(var j = 0; j < ghostArr.length; j++ ){ 
					ghostArr[j].vulnerable = 1;
					 
				}
				food = returnFood();
				console.log('food',food);	
				pacArr[i].speed += 0.3
				 
			 
				  
				setTimeout(function setVaribleBack(){ 
					for(var i = 0; i < ghostArr.length; i++ ){ ghostArr[i].vulnerable = 0; }					 
				 }, vulnerableTime);
				  
			}
		}
		 
	}	 
	
	function theEnd(){ 
		if(!(pacArr[0]||pacArr[1])){
			for(var i = 0; i < ghostArr.length; i++ ){ 
				ghostArr[i].drop = 1;
				ghostArr[i] = "";
			}
			
			showBtn();
			function showBtn(){
				var restart = document.getElementById("restart");
				restart.style.display = 'block';
			} 
			
			 
		}
	}
	
	function createPac(quantity){
		for(var i = 0; i < quantity; i++){
			pacArr[i] = returnPac(0,0)
		}
	};	 
		 
	function createGhost(){
			ghostArr[ghostArr.length] = returnEnemy((convas.width-radius*2),(convas.height-radius*2)); 
	};	 
 
  
 
 
 
 