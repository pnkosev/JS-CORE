let msgService = (() => {

    function loadMsgs(username) {
        let endPoint = `messages?query={"recipient_username":"${username}"}`;

        return requester.get('appdata', endPoint);
    }

    function archiveMsg(username) {
        let endPoint = `messages?query={"sender_username":"${username}"}`;

        return requester.get('appdata', endPoint);
    }

    function deleteMsg(msgId) {
        return requester.remove('appdata', 'messages/' + msgId);
    }

    function getAllUsers() {
        return requester.get('user', '');
    }

    return {
        loadMsgs,
        archiveMsg,
        deleteMsg,
        getAllUsers
    }
})();