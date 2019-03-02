let carService = (() => {

    function create(seller, title, description, imageUrl, brand, model, fuel, year, price) {
        const data = {
            seller,
            title,
            description,
            imageUrl,
            brand,
            model,
            fuel,
            year,
            price
        };
        return requester.post('appdata', 'cars', data);
    }

    function getAllListings() {
        const endpoint = `cars?query={}&sort={"_kmd.ect": -1}`;

        return requester.get('appdata', endpoint);
    }

    function getMyCarsListings(username) {
        const endpoint = `cars?query={"seller":"${username}"}&sort={"_kmd.ect": -1}`;

        return requester.get('appdata', endpoint);
    }

    function getById(carId) {
        return requester.get('appdata', 'cars/' + carId);
    }

    function editCar(carId, seller, title, description, imageUrl, brand, model, fuel, year, price) {
        const data = {
            seller,
            title,
            description,
            imageUrl,
            brand,
            model,
            fuel,
            year,
            price
        };
        return requester.update('appdata', 'cars/' + carId, data);
    }

    function remove(carId) {
        const endpoint = `cars/${carId}`;

        return requester.remove('appdata', endpoint);
    }

    return {
        create,
        getAllListings,
        getMyCarsListings,
        getById,
        editCar,
        remove
    }
})();