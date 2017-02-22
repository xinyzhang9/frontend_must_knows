function test(){
	function bar(str){
		console.log(str);
	}

	function foo(fn, string){
		fn(string);
	}

	foo(bar,'this is a closure');
}

test();

// bar is a closure and also a callback function. so callback is often a closure.