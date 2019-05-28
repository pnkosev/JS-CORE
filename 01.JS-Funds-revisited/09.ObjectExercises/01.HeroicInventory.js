function solve(arr) {
    let obj = arr
        .reduce((acc, cur) => {
            cur = cur.split(' / ');
            let name = cur[0];
            let level = +cur[1];
            let items = [];
            if (cur[2]) {
                items = cur[2].split(', ');
            }
            let hero = {
                name,
                level,
                items
            }
            acc.push(JSON.stringify(hero));
            return acc;
        }, []);
    console.log(obj);
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);