function listProcessor(input) {
    let commandProcessor = (function () {
        let list = [];
        return {
            add: (newItem) => list.push(newItem),
            remove: (item) => list = list.filter((el) => el != item),
            print: () => console.log(list.join(','))
        }
    })();

    for (let cmd of input) {
        [cmdName, string] = cmd.split(' ');
        commandProcessor[cmdName](string);
    }
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);

// let listProcessor = (function () {
//     let arr = [];

//     function add(item) {
//         arr.push(item);
//     }
//     function remove(item) {
//         arr = arr.filter((el) => {
//             return el != item;
//         })
//     }
//     function print(){
//         console.log(arr.join(','));
//     }

//     return {
//         add,
//         remove,
//         print
//     }
// })();

// let args = ['add hello', 'add again', 'remove hello', 'add again', 'print'];

// args.forEach((el) => {
//     let tokens = el.split(' ');
//     listProcessor[tokens[0]](tokens[1]);
// });