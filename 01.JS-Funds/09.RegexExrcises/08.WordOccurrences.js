function findVariables(text, name) {
    let result = text
        .match(new RegExp(`\\b${name}\\b`, 'gi'));

    console.log(result === null ? 0 : result.length);

    // let count = 0;
    // let regex = new RegExp("\\b" + name + "\\b", "gi");
    // let match = regex.exec(text);

    // while (match) {
    //     count++;
    //     match = regex.exec(text);
    // }

    // console.log(count);
}
findVariables('The waterfall was so high, that the child couldn’t see its peak.', 'the');