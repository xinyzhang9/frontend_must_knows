function getStockSymbols(stocks){
	var symbols = [];

	stocks.forEach(function(stock){
		symbols.push(stock.symbol);
	})
	return symbols;
}

var obj = [
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
];

var symbols = getStockSymbols(obj);

console.log(JSON.stringify(symbols));