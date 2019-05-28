function solve([speed, place]) {
    
    function getZone(place) {
        switch(place) {
            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }

    function getInfraction(speed, limit) {
        const overSpeed = speed - limit;
        
        if (overSpeed <= 0) {
            return;
        } else if (overSpeed >= 40) {
            return 'reckless driving';
        } else if (overSpeed >= 20) {
            return 'excessive speeding';
        } else if (overSpeed > 0) {
            return 'speeding';
        }
    }

    let infraction = getInfraction(speed, getZone(place));
    
    if (infraction) {
        console.log(infraction);
    }
}

solve([120, 'interstate']);