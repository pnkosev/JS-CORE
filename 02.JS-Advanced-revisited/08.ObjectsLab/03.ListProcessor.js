function solve(arr) {
    let commandProcessor = (function () {
        let result = [];
        function add(element) {
            result.push(element);
        }
        function remove(element) {
            result = result.filter(e => e !== element);
        }
        function print() {
            console.log(result.join(','));
        }
        return {
            add,
            remove,
            print
        }
    })();
    arr.forEach(e => {
        let action = e.split(' ');
        commandProcessor[action[0]](action[1]);
    })
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);