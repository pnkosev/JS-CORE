let auth = (() => {

    // user/register
    function register(username, password) {
        let userData = {
            username,
            password
        };

        return requester.post('user', '', userData, 'basic');
    }

    // user/login
    function login(username, password) {
        let userData = {
            username,
            password
        };

        return requester.post('user', 'login', userData, 'basic');
    }

    // user/logout
    function logout() {
        return requester.post('user', '_logout');
    }

    return {
        register,
        login,
        logout
    }
})();