function solve(arr) {
    let carFactory = (() => {
        let cars = [];
        function create(name) {
            let car = {
                'name': name
            };
            cars.push(car);
        }
        function inherit(name1, name2) {
            let fatherCar = cars.find(e => e.name === name2);
            let car = Object.create(fatherCar);
            car.name = name1;
            cars.push(car);
        }
        function set(name, key, value) {
            let car = cars.find(e => e.name === name);
            car[key] = value;
        }
        function print(name) {
            let car = cars.find(e => e.name === name);
            let result = [];
            for (const key in car) {
                if (key !== 'name') {
                    result.push(`${key}:${car[key]}`);
                }
            }
            console.log(result.join(', '));
        }
        return {
            create,
            inherit,
            set,
            print
        }
    })();
    arr.forEach(e => {
        let line = e.split(' ');
        if (line[0] === 'create' && line.length === 2) {
            carFactory[line[0]](line[1]);
        } else if (line[0] === 'create' && line.length === 4) {
            carFactory[line[2]](line[1], line[3]);
        } else if (line[0] === 'set') {
            carFactory[line[0]](line[1], line[2], line[3]);
        } else if (line[0] === 'print') {
            carFactory[line[0]](line[1]);
        }
    });
}

solve([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);