
var stocks = [
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
];

var filteredStockSymbols = stocks
								.filter((stock)=> stock.price >= 150.00)
								.map((stock)=> stock.symbol);

filteredStockSymbols.forEach((symbol) => {
	console.log(symbol);
})