function usernames(input) {
    let set = new Set();

    for (let username of input) {
        set.add(username);
    }
    
    let sortedNames = [...set]
        .sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(sortedNames.join('\n'));
}
usernames([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);