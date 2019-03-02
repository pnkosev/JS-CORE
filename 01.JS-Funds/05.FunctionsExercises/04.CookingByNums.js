function cooking(input) {

    let num = +input[0];

    let chop = () => num / 2;
    let dice = () => Math.sqrt(num);
    let spice = () => num + 1;
    let bake = () => num * 3;
    let fillet = () => num * 0.8;

    for (let i = 1; i <= input.length; i++) {
        let method = input[i];

        switch (method) {
            case 'chop':
                num = chop();
                console.log(num);
                break;
            case 'dice':
                num = dice();
                console.log(num);
                break;
            case 'spice':
                num = spice();
                console.log(num);
                break;
            case 'bake':
                num = bake();
                console.log(num);
                break;
            case 'fillet':
                num = fillet();
                console.log(num);
                break;
        }
    }
}
cooking(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);