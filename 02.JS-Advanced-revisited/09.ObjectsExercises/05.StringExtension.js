(() => {
    String.prototype.ensureStart = function (startStr) {
        let current = this.valueOf();
        let newStr = this.startsWith(startStr) ? current.slice(0) : startStr.trim() + ' ' + current.slice(0);
        return newStr;
    };

    String.prototype.ensureEnd = function (endStr) {
        let current = this.valueOf();
        let newStr = this.endsWith(endStr) ? current.slice(0) : current.slice(0) + ' ' + endStr.trim();
        return newStr;
    };

    String.prototype.isEmpty = function () {
        return this.valueOf().length === 0;
    };

    String.prototype.truncate = function (n) {
        let current = this.valueOf();
        if (!current.length <= n) {
            current = removingWords(current, n);
        }
        return current;
    };

    String.format = function (str, ...params) {
        for (let i = 0; i < params.length; i++) {
            str = str.replace(`{${i}}`, params[i]);
        }
        return str;
    };

    function removingWords(str, n) {
        let result = str.slice(0);
        if (n <= 3) {
            result = '.'.repeat(n);
        } else {
            while (result.length > n) {
                let arr = result.split(' ');
                if (arr.length !== 1) {
                    arr.pop();
                    result = arr.join(' ') + '...';
                } else {
                    result = result.slice(0, n - 3) + '...';
                }
            }
        }
        return result;
    }
})();

let str = 'my string';
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox', 'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}', 'dog');
console.log(str);

