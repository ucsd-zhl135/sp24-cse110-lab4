function discountPrices(prices, discount){
    const discounted = [];
    const length = prices.length;
    for(let i = 0; i < length; i++){
        const discountedPrice = prices[i]*(1-discount);
        discounted.push(discountedPrice);
    }
    console.log(length);
    return discounted;
}

console.log(discountPrices([100,200,300],0.5));

let student = {
    name: 'Sarah'
};
console.log(student['name']);

console.log(1);
setTimeout(function() { console.log(2); }, 1000);
setTimeout(function() { console.log(3); }, 0);
console.log(4)
