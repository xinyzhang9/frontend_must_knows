var exchanges = [
  [
      { symbol: "XFX", price: 240.22, volume: 23432 },
      { symbol: "TNZ", price: 332.19, volume: 234 }
    ],
  [
      { symbol: "JXJ", price: 120.22, volume: 5323 },
      { symbol: "NYN", price: 88.47, volume: 98275 }
    ]
];


// exchanges.forEach((exchange)=>{
// 	exchange.forEach((stock)=>{
// 		console.log(JSON.stringify(stock));
// 	})
// })

Array.prototype.concatAll = function(){
	var results = [];
	this.forEach(function(subArray){
		subArray.forEach(function(item){
			results.push(item);
		})
	})
	return results;
}

var stocks = exchanges.concatAll();
stocks.forEach((x)=> console.log(JSON.stringify(x)) );