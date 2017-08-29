// Given an array of daily stock value. Make of suggest a transaction that would yield the highest profit and return the highest profit value. You have to buy before sell
//
// First make the array of prices: [14,34,12,20,43,22].
// There could be a situation where the stock price decline everyday: [52,43,34,23,15,10].
//

function profit(prices){
  var lowestPrice = prices[0];
  prices.map(function(value,i){
    
  });
  if((lowestIndex < highestIndex) &&(lowestPrice < highestPrice)){
    return highestPrice - lowestPrice;
  }
  return 0;
}

var prices = [52,43,100,23,15,10];

console.log(profit(prices));
