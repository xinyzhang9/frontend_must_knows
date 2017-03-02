var Observable = Rx.Observable;

var parent = document.getElementById('parent');
var widget = document.getElementById('widget');

var mouseDowns = Observable.fromEvent(widget,'mousedown');
var parentMouseMoves = Observable.fromEvent(parent,'mousemove');
var parentMouseUps = Observable.fromEvent(parent,'mouseup');

var drag = mouseDowns.flatMap(function(md){
	var startX = md.offsetX;
	var startY = md.offsetY;
	return parentMouseMoves.map(function(mm){
		mm.preventDefault();

		return {
			left: mm.clientX-startX,
			top: mm.clientY-startY
		};
	}).takeUntil(parentMouseUps);
});

// update position
var subscription = drag.subscribe(function(pos){
	console.log(pos);
	widget.style.left = pos.left + 'px';
	widget.style.top = pos.top + 'px';
});