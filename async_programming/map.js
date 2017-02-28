// parse a function called projection as a parameter
Array.prototype.map = function(projection){
	var results = [];

	this.forEach(function(item){
		results.push(projection(item));
	});

	return results;
}

// write in this way is easier for understanding
var projection = function(stock){
		return stock.symbol;
	};

function getStockSymbols(stocks){
	return stocks.map(projection);
}
var obj = [
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
];

var symbols = getStockSymbols(obj);

console.log(JSON.stringify(symbols));