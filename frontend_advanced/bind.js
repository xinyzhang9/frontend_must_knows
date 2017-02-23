function bind(fn,obj){
	return function(){
		return fn.apply(obj,arguments);
	}
}

var obj = {
	a: 20,
	getA: function(){
		setTimeout(bind(function(){
			console.log(this.a)
		},this),1000)
	}
}

obj.getA();

// after 1 seconds, console log 20.