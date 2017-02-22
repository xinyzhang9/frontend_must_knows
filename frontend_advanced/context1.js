var color = 'blue';
function changeColor(){
	var anotherColor = 'red';

	function swapColors(){
		var tmpColor = anotherColor;
		anotherColor = color;
		color = tmpColor;
	}
	swapColors();
}

changeColor();
console.log('color: ',color);