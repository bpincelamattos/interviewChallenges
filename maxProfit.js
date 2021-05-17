var maxProfit = function(prices) {
    let minPrice = prices[0]; 
    let maxProfit = 0;

    for(let price of prices){
        minPrice = Math.min(price, minPrice); 
        maxProfit = Math.max(maxProfit, price - minPrice)
    }

    return maxProfit
};
let prices = [7,6,4,3,1]
let result = maxProfit(prices);
console.log(result);