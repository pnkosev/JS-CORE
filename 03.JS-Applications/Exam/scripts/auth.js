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
    function register(username, password) {
        let userData = {
            username,
            password
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

    return {
        login,
        register,
        logout
    }
})();

// function saveSession(userInfo) {
//     let userAuth = userInfo._kmd.authtoken;
//     sessionStorage.setItem('authtoken', userAuth);
//     let userId = userInfo._id;
//     sessionStorage.setItem('userId', userId);
//     let username = userInfo.username;
//     sessionStorage.setItem('username', username);
//     sessionStorage.setItem('name', userInfo['name']);
//     userLoggedIn();
// }