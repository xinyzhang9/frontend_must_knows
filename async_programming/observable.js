var Observable = Rx.Observable;

var button = document.getElementById('button');

var clicks = Observable.fromEvent(button,'click');

var subscription = clicks.forEach(
		function onNext(e){
			alert('clicked!');
			subscription.dispose();
		},
		function onError(error){
			console.log('ERROR!');
		},
		function onCompleted(){
			console.log('done');
		}
	);