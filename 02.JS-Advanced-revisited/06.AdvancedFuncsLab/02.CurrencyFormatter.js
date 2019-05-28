function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) {
        return symbol + ' ' + result;
    } else {
        return result + ' ' + symbol;
    }
}

function result(formatter) {
    return function getDollarFormatter(value) {
        return formatter(',', '$', 'true', value);
    }
}

let dollars = result(currencyFormatter);

console.log(dollars(5345));
console.log(dollars(3.1429));
console.log(dollars(2.709));  
