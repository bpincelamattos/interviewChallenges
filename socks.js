let socks = {};
let pairs = 0;

function sockMerchant(n, ar) {
    // Write your code here 
    for(let element of ar){
        socks[element] = socks[element] + 1 || 1;

        if (socks[element] % 2 === 0 ){
            pairs += 1;
        }
    }   
    return pairs
    
}

let pair = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])
console.log(pair)
