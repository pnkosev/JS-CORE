function captureNums(input) {
    let regex = /\d+/g;

    let text = input.join(' ');
    let result = text.match(regex);

    // for (let line of input) {
    //     let match = regex.exec(line);
    //     while (match) {                  // може и следния запис: while(match = regex.exec(line))
    //         result.push(match[0]);
    //         match = regex.exec(line);
    //     }
    // }

    console.log(result.join(' '));
}
captureNums(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);