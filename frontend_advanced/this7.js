function Person(name, age){
	this.name = name;
	this.age = age;
}

Person.prototype.getName = function(){
	return this.name;
}

var p1 = new Person('Xinyang',27);
var name = p1.getName();
console.log(name);

// 通过new操作符调用构造函数，会经历以下4个阶段。

// 创建一个新的对象；
// 将构造函数的this指向这个新对象；
// 指向构造函数的代码，为这个对象添加属性，方法等；
// 返回新对象。