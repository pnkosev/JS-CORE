function solve(arr) {

    function getLocation(x, y) {
        if ((x >= 1 && x <= 3) && (y >= 1 && y <= 3)) {
            return 'Tuvalu';
        } else if ((x >= 8 && x <= 9) && (y >= 0 && y <= 1)) {
            return 'Tokelau';
        } else if ((x >= 5 && x <= 7) && (y >= 3 && y <= 6)) {
            return 'Samoa';
        } else if ((x >= 0 && x <= 2) && (y >= 6 && y <= 8)) {
            return 'Tonga';
        } else if ((x >= 4 && x <= 9) && (y >= 7 && y <= 8)) {
            return 'Cook';
        } else {
            return 'On the bottom of the ocean';
        }
    }

    for (let i = 0; i < arr.length; i += 2) {
        const x = arr[i];
        const y = arr[i + 1];
        let location = getLocation(x, y);
        console.log(location);
    }
}

solve([4, 2, 1.5, 6.5, 1, 3]);