var a = 20;
var foo = {
	a: 10,
	getA: function(){
		return this.a;
	}
}
console.log(foo.getA());

var test = foo.getA;
console.log(test());

// 10
// 20 (when working with index.html, otherwise it will be undefined)