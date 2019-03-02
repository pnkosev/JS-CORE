function solve([speed, zone]) {

    function getLimit(zone) {
        switch (zone) {
            case 'motorway' : return 130;
            case 'interstate' : return 90;
            case 'city' : return 50;
            case 'residential' : return 20;
        }
    }
    let limit = getLimit(zone);

    function getInfraction(speed, limit) {
        let overSpeed = speed - limit;
        if (overSpeed <= 0) {
            return false;
        } else {
            if (overSpeed <= 20) {
                return 'speeding';
            } else if (overSpeed <= 40) {
                return 'excessive speeding';
            } else {
                return 'reckless driving';
            }
        }
    }

    let infraction = getInfraction(speed, limit);
    if (infraction) {
        console.log(infraction);
    }
}
solve([21, 'residential']);