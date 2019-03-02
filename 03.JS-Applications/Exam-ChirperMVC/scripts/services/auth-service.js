let auth = (() => {
    function isAuth() {
        return sessionStorage.getItem('authtoken') !== null;
    }

    function saveSession(userData) {
        sessionStorage.setItem('authtoken', userData._kmd.authtoken);
        sessionStorage.setItem('username', userData.username);
        sessionStorage.setItem('userId', userData._id);
        sessionStorage.setItem('subs', userData.subscriptions);
    }

    function register(username, password) {
        let data = {
            username,
            password,
            subscriptions: []
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

    function discover() {
        return requester.get('user', '');
    }

    function getById(userId) {
        return requester.get('user', userId);
    }

    function follow(userId, username) {
        let newSubs = [];
        newSubs.push(username);
        return requester.update('user', sessionStorage.getItem('userId'), {subscriptions:newSubs});
    }

    return {
        isAuth,
        saveSession,
        register,
        login,
        logout,
        discover,
        getById,
        follow
    }
})();