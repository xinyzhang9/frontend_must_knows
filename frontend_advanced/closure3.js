// wrong output 6,6,6,6,6

// for(var i = 1; i <=5; i++){
// 	setTimeout(function timer(){
// 		console.log(i);
// 	},i*1000);
// }

// correct output 1,2,3,4,5
for(var i = 1; i <=5; i++){
	(function(i){setTimeout(function timer(){
		console.log(i);
	},i*1000)})(i)
}
