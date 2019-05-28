function solve(arr) {
    let result = [];
    arr.forEach(line => {
        line.toLowerCase()
            .split(/\W+/)
            .filter(w => w !== '')
            .forEach(w => {
                if (!result.includes(w)) {
                    result.push(w);
                }
            });
    });

    console.log(result.join());
}

solve([
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'
]);