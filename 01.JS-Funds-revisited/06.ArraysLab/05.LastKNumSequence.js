function solve(n, k) {
    let arr = new Array(n).fill(0);
    arr[0] = 1;
    let result = arr
        .reduce((acc, cur, index) => {
            if (index === 0) {
                acc.push(cur);
                return acc;
            }
            let startIndex = Math.max(0, index - k);
            cur = acc.slice(startIndex, index).reduce((acc, cur) => acc += cur);
            acc[index] = cur;
            return acc;
        }, [])
        .join(' ');
    console.log(result);
}

solve(6, 3);