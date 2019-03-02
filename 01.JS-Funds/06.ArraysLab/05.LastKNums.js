function lastKNums(n, k) {
    let arr = [1];
    
    for (let i = 1; i < n; i++) {

        let startIndex = Math.max(0, i - k);
        let currentElement = arr.slice(startIndex, i)
        .reduce((a, b) => a + b, 0);
        arr[i] = currentElement;
    }
    console.log(arr.join(" "));
}
lastKNums(6, 3);