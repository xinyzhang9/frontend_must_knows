// function test(){
// 	console.log(foo);
// 	console.log(bar);

// 	var foo = 'Hello';
// 	console.log(foo);

// 	var bar = function(){
// 		return 'world';
// 	}

// 	function foo(){
// 		return 'hello';
// 	}
// }

// test();

// after hositing

function test(){
	function foo(){
		return 'hello';
	}
	// var foo; //js will skip this because of the same name
	var bar;
	console.log(foo);
	console.log(bar);
	foo = 'Hello';
	console.log(foo);
	bar = function(){
		return 'world';
	}

}
test();