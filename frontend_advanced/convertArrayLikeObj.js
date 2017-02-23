function test(a,b,c,d,e){
	console.log(arguments);
	var arg = [].slice.call(arguments);
	console.log(arg);
}

test('a','b','c','d','e');

// { '0': 'a', '1': 'b', '2': 'c', '3': 'd', '4': 'e' }
// [ 'a', 'b', 'c', 'd', 'e' ]