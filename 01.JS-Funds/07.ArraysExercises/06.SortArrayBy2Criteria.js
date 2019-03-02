function sortArr(input) {

    console.log(input.sort((a, b) => a.length - b.length || a > b).join('\n'));

    // input.sort((a, b) => sortByLengthAndAscending(a, b)).forEach(item => console.log(item));

    // function sortByLengthAndAscending(x, y) {
    //     return x.length - y.length || sortByName(x, y);
    // }

    // function sortByName(x, y) {
    //     return x > y;
    // }

    // function compare(a, b) {
    //     if (a.length > b.length) {
    //         return 1;
    //     } else if (a.length < b.length) {
    //         return -1;
    //     } else {
    //         if (a > b) {
    //             return 1;
    //         } else if (a < b) {
    //             return -1;
    //         } else {
    //             return 0;
    //         }
    //     }
    // }
    // console.log(input.sort(compare).join('\n'));
}
sortArr(['test', 
'Deny', 
'omen', 
'Default']
);