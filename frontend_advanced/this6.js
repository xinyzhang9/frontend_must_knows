// use call and apply to parse parameters

function fn(num1, num2){
	console.log(this.a + num1 + num2);
}

var obj = {
	a: 20
}

fn.call(obj,100,10);
fn.apply(obj,[20,10]);

// 130
// 50

// The only difference of call and apply is the parameters is an array or not.