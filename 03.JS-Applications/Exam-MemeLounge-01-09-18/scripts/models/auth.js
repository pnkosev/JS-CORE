let auth = (() => {
    // user/login
    function login(username, password) {
        let userData = {
            username,
            password
        };

        return requester.post('user', 'login', userData, 'basic');
    }


    // user/register
    function register(username, password, email, avatarUrl) {
        let userData = {
            username,
            password,
            email,
            avatarUrl
        };

        return requester.post('user', '', userData, 'basic');
    }

    // user/logout
    function logout() {
        let logoutData = {
            authtoken: sessionStorage.getItem('authtoken')
        };

        return requester.post('user', '_logout', logoutData, 'kinvey');
    }

    // user/remove

    function remove() {
        let removalData = {
            authtoken: sessionStorage.getItem('authtoken')
        };

        let userId = sessionStorage.getItem('id');

        return requester.remove('user', userId, removalData, 'kinvey');
    }

    return {
        login,
        register,
        logout,
        remove
    }
})();