// Say "Hello."
console.log("Hello.");
// Say "Goodbye" two seconds from now.
let promise = new Promise(function (resolve, reject) {
    resolve('Goodbye!');
});
promise
    .then(function (data) {
        console.log(data);
    }).catch (function (err) {
        console.log(err);
    })
// Say "Hello again!"
console.log("Hello again!");