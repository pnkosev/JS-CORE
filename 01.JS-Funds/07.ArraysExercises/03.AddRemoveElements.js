function AddRemoveElements(commands) {
    let num = 1;
    let arr = [];

    for (let command of commands) {
        if (command === 'add') {
            arr.push(num);
        } else if (command === 'remove') {
            arr.pop();
        }
        num++;
    };
    if (arr.length !== 0) {
        arr.forEach(x => console.log(x));
    } else {
        console.log("Empty");
    };
}
AddRemoveElements(['add', 'add', 'add', 'add']);