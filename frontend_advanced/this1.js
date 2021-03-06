var a = 20;
function fn(){
	// 'use strict'
	console.log(this.a);
}
fn();
// window.fn();
// undefined

// 在一个函数上下文中，this由调用者提供，由调用函数的方式来决定。
// 如果调用者函数，被某一个对象所拥有，那么该函数在调用时，内部的this指向该对象。
// 如果函数独立调用，那么该函数内部的this，则指向undefined。但是在非严格模式中，
// 当this指向undefined时，它会被自动指向全局对象。

