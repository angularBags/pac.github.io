//animate(callback-fn,miliseconds);  ------- старт
//animate(0) - внутри callback-функции ------ останов
	function animate(callbackFn,ms){
		if(callbackFn>=0){cancelAnimationFrame(callbackFn); return;}
		if(!callbackFn){console.log('return'); return}
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
			callbackFn.breakId = nextFrame(standart);
			callbackFn();	// Drawing code goes here	
			 
		}
		function slow(){	 	
			callbackFn.breakId = nextFrame(slow);
			countIteration++;
			if((countIteration%crat)==0){callbackFn()}	
		}
		 
	 }  
	 
//animate(q3,2000); 
  /*   var q=0;
	function q3(){	
		if (q>=5){animate(0)}
		console.log(q++);
	 } */
	