var fn = null;
function foo(){
	var a = 2;
	function innerFoo(){
		console.log(a);
	}
	fn = innerFoo; // assign innerFoo reference to global variable fn
}

function bar(){
	fn(); // retain reference to innerFoo
}

foo();
bar();

// because of fn = innerFoo, we can still visit foo(){...}