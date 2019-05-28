function solve(arr) {
    let arrCopy = arr.slice(0);
    let n = arrCopy.pop();
    
    for (let i = 0; i < n; i++) {
        let num = arrCopy.pop();
        arrCopy.unshift(num);
    }
    console.log(arrCopy.join(' '));
}

solve(['1', '2', '3', '4', '2']);
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);