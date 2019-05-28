function solve(arr) {
    let arrCopy = arr.slice(0);
    let delimiter = arrCopy.pop();
    console.log(arrCopy.join(delimiter));
}

solve(['One', 'Two', 'Three', 'Four', 'Five', '-']);