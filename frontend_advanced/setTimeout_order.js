// write the results in correct order

setTimeout(function(){
	console.log(a);
},0);

var a = 10;

console.log(b);
console.log(fn);

var b = 20;

function fn(){
	setTimeout(function(){
		console.log('setTimeout 10ms');
	},10);
}

fn.toString = function(){
	return 30;
}

console.log(fn);

setTimeout(function(){
	console.log('setTimeout 20ms');
},20);

fn();

//-------------------
// undefined
// function fn(){
// 	setTimeout(function(){
// 		console.log('setTimeout 10ms');
// 	},10);
// }
// 30
// setTimeout 10ms
// setTimeout 20ms