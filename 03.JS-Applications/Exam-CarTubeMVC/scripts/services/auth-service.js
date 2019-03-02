let auth = (() => {
    function isAuth() {
        return sessionStorage.getItem('authtoken') !== null;
    }

    function saveSession(userData) {
        sessionStorage.setItem('authtoken', userData._kmd.authtoken);
        sessionStorage.setItem('username', userData.username);
        sessionStorage.setItem('userId', userData._id);
    }

    function register(username, password) {
        let data = {
            username,
            password
        };

        return requester.post('user', '', data, 'basic');
    }

    function login(username, password) {
        let data = {
            username,
            password
        };

        return requester.post('user', 'login', data, 'basic')
    }

    function logout() {
        return requester.post('user', '_logout');
    }

    return {
        isAuth,
        saveSession,
        register,
        login,
        logout
    }
})();