let petService = (() => {

    function createPet(name, description, imageURL, category, likes) {
        const data = {
            name,
            description,
            imageURL,
            category,
            likes
        };
        return requester.post('appdata', 'pets', data);
    }

    function listAllPets() {
        const endpoint = `pets?query={}&sort={"likes": -1}`;

        return requester.get('appdata', endpoint);
    }

    function listMyPets(userId) {
        const endpoint = `pets?query={"_acl.creator":"${userId}"}`;

        return requester.get('appdata', endpoint);
    }

    function getById(petId) {
        return requester.get('appdata', 'pets/' + petId);
    }

    function getByCategory(category) {

        return requester.get('appdata', `pets?query={"category":"${category}"}&sort={"likes": -1}`);
    }

    function editPet(petId, name, description, imageURL, category, likes) {
        const data = {
            name,
            description,
            imageURL,
            category,
            likes
        };
        return requester.update('appdata', 'pets/' + petId, data);
    }

    function removePet(petId) {

        return requester.remove('appdata', 'pets/' + petId);
    }

    return {
        createPet,
        listAllPets,
        listMyPets,
        getById,
        getByCategory,
        editPet,
        removePet
    }
})();