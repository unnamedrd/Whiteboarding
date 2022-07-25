var maxProfit = function (prices) {
  //go through array
  //buy on the lowest price day, sell at the highest
  //check to make sure that the stock goes up from the day you buy it
  //you have to buy before you sell
  //sliding window - take each window starting at prices[0], determine if you buy on that day what the max profit will be
  //move to the next index, find out what the max profit is compare to the previous max profit, if higher then store as max profit

  //if the index is the highest or lowest value then skip

  let profit = 0;

  for (i = 0; i < prices.length - 1; i++) {
    let rest = prices.slice(i + 1);
    let maxVal = Math.max(...rest);
    let maxProfit = maxVal - prices[i];
    if (maxProfit > profit) {
      profit = maxProfit;
    }
  }
  return profit;
};
