// function isPlaindrome(str) {
//     str1 = str.split("").reverse().join("");
//     if (str === str1){
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// }

function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome("haha"));
    