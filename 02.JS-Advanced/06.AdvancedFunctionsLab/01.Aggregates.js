// function aggregate(arr) {
//     let copyArr = arr.slice(0);
//     let sum = arr.reduce((acc, cur) => {
//         acc += cur;
//         return acc;
//     });
//     console.log(sum);
//     let smallestNum = copyArr.sort((a, b) => a - b).shift();
//     console.log(smallestNum);
//     let largestNum = copyArr.sort((a, b) => a - b).pop();
//     console.log(largestNum);
//     let product = arr.reduce((acc, cur) => {
//         acc *= cur;
//         return acc;
//     });
//     console.log(product);
//     let joined = arr.reduce((acc, cur) => {
//         acc += cur;
//         return acc;
//     }, "");
//     console.log(joined);
// }

function aggregate(arr) {
    console.log("Sum = " + arr.reduce((a, b) => a + b));
    console.log("Min = " + arr.reduce((a, b) => Math.min(a,b)));
    console.log("Max = " + arr.reduce((a, b) => Math.max(a,b)));
    console.log("Product = " + arr.reduce((a, b) => a * b));
    console.log("Joined = " + arr.reduce((a, b) => '' + a + b));
}
aggregate([2,3,10,5]);