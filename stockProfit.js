// Given an array of daily stock value. Make of suggest a transaction that would yield the highest profit and return the highest profit value. You have to buy before sell
// First make the array of prices: [14,34,12,20,43,22].
// There could be a situation where the stock price decline everyday: [52,43,34,23,15,10].
// There might be some edge cases

function profit(prices){
  if(prices.length < 2) {
    return "The list should have atleast two values";
  }
  var minPrice = prices[0];
  var maxProfit = prices[1] - minPrice;
  
  for(var i=1;i<prices.length;i++){
    var compareProfit = prices[i]-minPrice;
    maxProfit = Math.max(maxProfit,compareProfit);
    minPrice = Math.min(minPrice,prices[i]);
    
  }
  return maxProfit;
}

var prices = [52,43,100,23,15,10];

console.log(profit(prices));
