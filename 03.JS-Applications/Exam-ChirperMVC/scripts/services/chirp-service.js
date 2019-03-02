let chirpService = (() => {

    function getChirpsByUser(username) {
        let endpoint = `chirps?query={"author":"${username}"}&sort={"_kmd.ect": 1}`;
        return requester.get('appdata', endpoint);
    }

    function getChirpsBySubs(subs) {
        let endpoint = `chirps?query={"author":{"$in": ${subs}}}&sort={"_kmd.ect": 1}`;
        return requester.get('appdata', endpoint);
    }

    function createChirp(text, author) {
        let data = {
            text,
            author
        }
        return requester.post('appdata', 'chirps', data);
    }

    function remove(chirpId) {
        return requester.remove('appdata', 'chirps/' + chirpId);
    }

    return {
        getChirpsByUser,
        getChirpsBySubs,
        createChirp,
        remove
    }
})();