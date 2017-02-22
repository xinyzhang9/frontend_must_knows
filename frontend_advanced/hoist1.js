function test(){
	console.log(a);
	console.log(foo());

	var a = 1;
	function foo(){
		return 2;
	}
}

test();

// after hoisting

// function test(){
// 	function foo(){
// 		return 2;
// 	}
// 	var a;
// 	console.log(a);
// 	console.log(foo());
// 	a = 1;
// }
// test();