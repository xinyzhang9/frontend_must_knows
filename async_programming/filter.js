

function getStockOver(stocks, minPrice){
	return stocks.filter(function(stock){
		return stock.price >= minPrice;
	})
}
var obj = [
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
];

var expensiveStocks = getStockOver(obj,150);

console.log(JSON.stringify(expensiveStocks));