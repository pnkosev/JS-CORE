let add = (function() {
    let result = 0;

    function sumUp(val) {
        result += +val;
        return sumUp;
    }

    sumUp.toString = () => result;

    return sumUp;
})();

console.log(add(1)(6).toString());