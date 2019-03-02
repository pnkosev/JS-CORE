let requester = (() => {
    const appKey = 'kid_HkqRPdak4';
    const appSecret = '18bbd97d868e49fab2b69924b5ec819e';
    const baseUrl = 'https://baas.kinvey.com/';

    // Creates the authentication header
    function makeAuth(type) {
        return type === 'basic' ?
            'Basic ' + btoa(appKey + ':' + appSecret) :
            'Kinvey ' + sessionStorage.getItem('authtoken');
    }

    // Creates request object to kinvey
    function makeRequest(method, module, endpoint, auth) {
        return req = {
            method,
            url: baseUrl + module + '/' + appKey + '/' + endpoint,
            headers: {
                'Authorization': makeAuth(auth)
            }
        };
    }

    // Function to return GET promise
    function get(module, endpoint, auth) {
        return $.ajax(makeRequest('GET', module, endpoint, auth));
    }

    // Function to return POST promise
    function post(module, endpoint, data, auth) {
        let req = makeRequest('POST', module, endpoint, auth);
        req.data = JSON.stringify(data);
        req.headers['Content-Type'] = 'application/json';
        return $.ajax(req);
    }

    // Function to return PUT promise
    function update(module, endpoint, data, auth) {
        let req = makeRequest('PUT', module, endpoint, auth);
        req.data = JSON.stringify(data);
        req.headers['Content-Type'] = 'application/json';
        return $.ajax(req);
    }

    // Function to return DELETE promise
    function remove(module, endpoint, auth) {
        return $.ajax(makeRequest('DELETE', module, endpoint, auth));
    }

    return {
        get,
        post,
        update,
        remove
    }
})();