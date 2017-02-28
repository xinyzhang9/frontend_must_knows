var currying = function(fn){
	console.log(arguments);
	var args = [].slice.call(arguments,1);
	console.log(args);
	return function(){
		var _args = args.concat([].slice.call(arguments));
		return fn.apply(null, _args);
	}
}

var sum = currying(function(){
	var args = [].slice.call(arguments);
	return args.reduce(function(a,b){
		return a+b;
	})
},3,4,5)

console.log(sum(1,2));