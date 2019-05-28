(() => {
    Array.prototype.last = function() {
        return this[this.length - 1];
    }

    Array.prototype.skip = function(n) {
        let arr = this.slice(n);
        return arr;
    }

    Array.prototype.take = function(n) {
        let arr = this.slice(0, n);
        return arr;
    }

    Array.prototype.sum = function() {
        let sum = this.reduce((acc, cur) => acc + cur, 0);
        return sum;
    }

    Array.prototype.average = function() {
        let average = this.sum() / this.length;
        return average;
    }
})();