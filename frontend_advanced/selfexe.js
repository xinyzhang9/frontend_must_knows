// 在ES5中，没有块级作用域，因此我们常常使用函数自执行的方式来模仿块级作用域，这样就提供了一个独立的执行上下文，结合闭包，就为模块化提供了基础。

(function(){
	// private vars
	var age = 20;
	var name = 'Tom';

	// private methods
	function getName(){
		return `your name is ${name}`;
	}

	function getAge(){
		return age;
	}

	window.getAge = getAge;
})();