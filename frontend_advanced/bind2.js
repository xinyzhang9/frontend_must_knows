var obj = {
	a: 20,
	getA: function(){
		setTimeout(function(){
			console.log(this.a)
		}.bind(this),1000)
	} 
}

obj.getA();

// after 1 seconds, console log 20.