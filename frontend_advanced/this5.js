function foo(){
	console.log(this.a);
}

function active(fn){
	fn();
}

var a = 20;
var obj = {
	a: 10,
	getA: foo
}

active(obj.getA); //active函数独立调用，在非严格模式下自动转为全局变量window,输出a=20
obj.getA() //obj是调用者，this指向obj内部，输出a=10

//20 (when working with index.html, otherwise will be undefined)
//10