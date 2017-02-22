var a = 20;

function test(){
	var b = a + 10;

	function innerTest(){
		var c = 10;
		return b + c;
	}
	return innerTest();
}

var result = test();
console.log(result);