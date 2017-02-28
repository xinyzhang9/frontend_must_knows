Array.prototype.merge = function(fn, chars){
	return this.map(fn).join(chars);
}

var add = function(num){
	return function(item){
		return item+num;
	}
}

var red = function(num){
	return function(item){
		return item-num;
	}
}

var arr = [1,2,3,4,5];

var res1 = arr.merge(add(2),'~');

var res2 = arr.merge(red(1),'-');

var res3 = arr.merge((function(num){
	return function(item){
		return item * num;
	}
})(2),'*')

console.log(res1);
console.log(res2);
console.log(res3);