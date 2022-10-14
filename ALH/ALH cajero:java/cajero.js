function bank(i) {
	console.log('withdraw'+ i + 'money');

for (; i<0.01;) {
   
	if(i>=500){
  	i = i - 500;
		console.log('withdrawn a bill of 500');
		console.log('Remainder'+ i +'money');	
	}else if(i>=200 && i<500){
		i = i - 200;
		console.log('withdrawn a bill of 200');
		console.log('Remainder'+ i +'money');	
	}else if(i>=100 && i<200){
		i = i - 100;
		console.log('withdrawn a bill of 100');
		console.log('Remainder'+ i +'money');	
	}else if(i>=50 && i<100){
		i = i - 50;
		console.log('withdrawn a bill of 50');
		console.log('Remainder'+ i +'money');	
	}else if(i>=20 && i<50){
		i = i - 20;
		console.log('withdrawn a bill of 20');
		console.log('Remainder'+ i +'money');	
	}else if(i>=10 && i<20){
		i = i - 10;
		console.log('withdrawn a bill of 10');
		console.log('Remainder'+ i +'money');	
	}else if(i>=5 && i<10){
		i = i - 5;
		console.log('withdrawn a bill of 5');
		console.log('Remainder'+ i +'money');	
	}else if(i>=2 && i<5){
		i = i - 2;
		console.log('withdrawn a coin of 2');
		console.log('Remainder'+ i +'money');	
	}else if(i>=1 && i<2){
		i = i - 1;
		console.log('withdrawn a coin of 1');
		console.log('Remainder'+ i +'money');	
	}else if(i>=0.50 && i<1){
		i = i - 0.50;
		console.log('withdrawn a coin of 50 cents');
		console.log('Remainder'+ i +'money');	
	}else if(i>=0.20 && i<0.50){
		i = i - 0.20;
		console.log('withdrawn a coin of 20 cents');
		console.log('Remainder'+ i +'money');	
	}else if(i>=0.10 && i<0.20){
		i = i - 0.10;
		console.log('withdrawn a coin of 10 cents');
		console.log('Remainder'+ i +'money');	
	}else if(i>=0.05 && i<0.10){
		i = i - 0.05;
		console.log('withdrawn a coin of 5 cents');
		console.log('Remainder'+ i +'money');	
	}else if(i>=0.020 && i<0.050){
		i = i - 0.020;
		console.log('withdrawn a coin of 2 cents');
		console.log('Remainder'+ i +'money');	
	}else if(i>=0.010 && i<0.020){
		i = i - 0.010;
		console.log('withdrawn a coin of 1 cents');
		console.log('Remainder'+ i +'money');	
	}
}
}