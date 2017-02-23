// define parent constructor
var Person = function(name, age){
	this.name = name;
	this.age = age;
	this.gender = ['man','woman'];
}

// defind child constructor
var Student = function(name,age,high){
	Person.call(this,name,age);
	this.high = high;
}
Student.prototype.message = function(){
	console.log('name:'+this.name+', age:'+this.age+', high:'+this.high+', gender:'+this.gender[0]+';');
}

new Student('xinyang', 27, '176cm').message();

// name:xinyang, age:27, high:176cm, gender:man;