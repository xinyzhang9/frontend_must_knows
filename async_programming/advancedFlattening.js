var exchanges = [
  { 
    name: "NYSE",
    stocks: [
      { 
        symbol: "XFX", 
        closes: [
          { date: new Date(2014,11,24), price: 240.10 },
          { date: new Date(2014,11,23), price: 232.08 },
          { date: new Date(2014,11,22), price: 241.09 }
        ]
      },
      { 
        symbol: "TNZ", 
        closes: [
          { date: new Date(2014,11,24), price: 521.24 },
          { date: new Date(2014,11,23), price: 511.00 },
          { date: new Date(2014,11,22), price: 519.29 }     
        ]
      },
    ]
  },
  { 
    name: "TSX",
    stocks: [
      { 
        symbol: "JXJ", 
        closes: [
          { date: new Date(2014,11,24), price: 423.22 },
          { date: new Date(2014,11,23), price: 424.84 },
          { date: new Date(2014,11,22), price: 419.72 }
        ]
      },
      { 
        symbol: "NYN", 
        closes: [
          { date: new Date(2014,11,24), price: 16.82 },
          { date: new Date(2014,11,23), price: 16.12 },
          { date: new Date(2014,11,22), price: 15.77 }
        ]
      },
    ]
  }
];

Array.prototype.concatAll = function(){
  var results = [];
  this.forEach((subArray)=>{
    subArray.forEach((item)=>{
      results.push(item);
    });
  });

  return results;
}

var christmasEveCloses = 
  exchanges.map((exchange)=>{
    return exchange.stocks.map((stock)=>{
      return stock.closes.filter((close)=>{
        return close.date.getMonth() === 11 && close.date.getDate() === 24;
      }).map((close)=>{
        return {
          symbol: stock.symbol,
          price: close.price
        };
      });
    }).concatAll();
  }).concatAll();

christmasEveCloses.forEach((c)=> console.log(c));

