function usernames(input) {
    let result = [];

    for (let email of input) {
        let tokens = email.split('@');
        let username = tokens[0] + '.';
        let domain = tokens[1];
        domain.split('.').forEach(x => username += x[0]);
        result.push(username);
    }
    console.log(result.join(', '));
}
usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);