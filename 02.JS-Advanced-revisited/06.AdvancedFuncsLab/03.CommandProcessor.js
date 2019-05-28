// function solve(arr) {
//     let command = (function () {
//         let result = '';
//         return {
//             append: function(str) { result += str; },
//             removeStart: function(n) { result = result.slice(n); },
//             removeEnd: function(n) { result = result.slice(0, result.length - n); },
//             print: function() { console.log(result) }
//         }
//     })();

//     arr.forEach(element => {
//         let line = element.split(' ');
//         command[line[0]](line[1]);
//     });
// }

// solve([
//     'append hello',
//     'append again',
//     'removeStart 3',
//     'removeEnd 4',
//     'print'
// ]);

let obj = {
    result: '',
    append: function (str) { this.result += str; },
    removeStart: function (n) { this.result = this.result.slice(n); },
    removeEnd: function (n) { this.result = this.result.slice(0, this.result.length - n); },
    print: function () { console.log(this.result) },
    execute: function (arr) {
        arr.forEach(element => {
            let line = element.split(' ');
            this[line[0]](line[1]);
        });
    }
}

obj.execute([
    'append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print'
]);