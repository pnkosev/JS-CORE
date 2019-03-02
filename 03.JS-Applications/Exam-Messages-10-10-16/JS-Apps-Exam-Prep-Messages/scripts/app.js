$(() => {
    showView('appHome');

    function navigateTo() {
        let target = $(this).attr('data-target');
        showView(target);
    }

    function showView(viewName) {
        $('main > section').hide();
        $('#view' + viewName).show();
    }

    if (sessionStorage.getItem('authtoken') !== null) {
        userLoggedIn();
    } else {
        userLoggedOut();
    }

    function userLoggedOut() {
        $('.anonymous').show();
        $('.useronly').hide();
        $('#spanMenuLoggedInUser').text('');
        showView('AppHome');
    }

    function userLoggedIn() {
        $('.anonymous').hide();
        $('.useronly').show();
        let username = sessionStorage.getItem('username');
        $('#spanMenuLoggedInUser').text(`Welcome, ${username}!`);
        $('#viewUserHomeHeading').text(`Welcome, ${username}!`);
        showView('UserHome');
    }

    // Attach events
    (() => {
        $('#main').find($('a[data-target]').click(navigateTo));
        $('#formRegister').submit(registerUser);
        $('#formLogin').submit(loginUser);
        $('#linkMenuLogout').click(logoutUser);
        $('#linkMenuMyMessages').click(renderMyMsgs);
        $('#linkUserHomeMyMessages').click(renderMyMsgs);
        $('#linkMenuArchiveSent').click(renderMySentMsgs);
        $('#linkUserHomeArchiveSent').click(renderMySentMsgs);
        $('#linkUserHomeSendMessage').click(loadAllUsers);
        $('#linkMenuSendMessage').click(loadAllUsers);
        $('#formSendMessage').submit(sendMsg);
        $('.notification').click(function () {
            $(this).hide();
        })
    })();

    function registerUser(ev) {
        ev.preventDefault();

        let usernameInput = $('#registerUsername');
        let passwordInput = $('#registerPasswd');
        let nameInput = $('#registerName');

        let username = usernameInput.val();
        let password = passwordInput.val();
        let name = nameInput.val();

        auth.register(username, password, name)
            .then(function (userInfo) {
                usernameInput.val('');
                passwordInput.val('');
                nameInput.val('');
                saveSession(userInfo);
                showInfo('User registration successful.');
            }).catch(handleError);
    }

    function loginUser(ev) {
        ev.preventDefault();

        let usernameInput = $('#loginUsername');
        let passwordInput = $('#loginPasswd');

        let username = usernameInput.val();
        let password = passwordInput.val();

        auth.login(username, password)
            .then(function (userInfo) {
                saveSession(userInfo);
                usernameInput.val('');
                passwordInput.val('');
                showInfo('Login successful.')
            }).catch(handleError);
    }

    function logoutUser() {
        auth.logout()
            .then(function () {
                sessionStorage.clear();
                showInfo('Logout successful.');
                userLoggedOut();
            })
    }

    function renderMyMsgs() {
        let username = sessionStorage.getItem('username');

        msgService.loadMsgs(username)
            .then(function (msgs) {
                displayMsg(msgs);
            }).catch(handleError);
    }

    function displayMsg(msgs) {
        let msgContainer = $('#myMessages');
        msgContainer.empty();

        let table = $('<table>')
            .append($('<thead>')
                .append($('<tr>')
                    .append($('<th>From</th>'))
                    .append($('<th>Message</th>'))
                    .append($('<th>Date</th>'))));
        msgContainer.append(table);
        let tableBody = $('<tbody>');

        for (let msg of msgs) {
            let row = $(`<tr>`);
            let sender = formatSender(msg['sender_name'], msg['sender_username']);
            let message = msg['text'];
            let date = formatDate(msg['_kmd']['lmt']);

            row
                .append($(`<td>${sender}</td>`))
                .append($(`<td>${message}</td>`))
                .append($(`<td>${date}</td>`));
            tableBody.append(row);
        }

        table.append(tableBody);
        msgContainer.append(table);
    }

    function renderMySentMsgs() {
        let username = sessionStorage.getItem('username');

        msgService.archiveMsg(username)
            .then(function (msgs) {
                displaySentMsgs(msgs);
            }).catch(handleError);
    }

    function displaySentMsgs(msgs) {
        let msgContainer = $('#sentMessages');
        msgContainer.empty();

        let table = $('<table>')
            .append($('<thead>')
                .append($('<tr>')
                    .append($('<th>To</th>'))
                    .append($('<th>Message</th>'))
                    .append($('<th>Date Sent</th>'))
                    .append($('<th>Actions</th>'))));
        msgContainer.append(table);
        let tableBody = $('<tbody>');

        for (let msg of msgs) {
            let row = $(`<tr>`);
            let recipient = formatSender(msg['recipient_name'], msg['recipient_username']);
            let message = msg['text'];
            let date = formatDate(msg['_kmd']['lmt']);
            let deleteBtn = $(`<button value="${msg._id}">Delete</button>`)
                .click(deleteMessage);

            row
                .append($(`<td>${recipient}</td>`))
                .append($(`<td>${message}</td>`))
                .append($(`<td>${date}</td>`))
                .append($('<td>').append(deleteBtn));
            tableBody.append(row);
        }

        table.append(tableBody);
        msgContainer.append(table);
    }

    function deleteMessage() {
        let msgId = $(this).val();

        msgService.deleteMsg(msgId)
            .then(function () {
                showInfo('Message deleted.');
                renderMySentMsgs();
            }).catch(handleError);
    }

    function loadAllUsers() {
        msgService.getAllUsers()
            .then(function (users) {
                displayAllUsers(users);
            }).catch(handleError);
    }

    function displayAllUsers(users) {
        let usersContainer = $('#msgRecipientUsername');
        usersContainer.empty();

        for (let user of users) {
            let username = user['username'];
            let fullName = formatSender(user['name'], username);
            if (username !== sessionStorage.getItem('username')) {
                usersContainer.append($(`<option value="${username}">${fullName}</option>`));
            }
        }
    }

    function sendMsg(ev) {
        ev.preventDefault();

        let sender_username = sessionStorage.getItem('username');
        let sender_name = sessionStorage.getItem('name');
        let recipient_username = $('#msgRecipientUsername').val();
        let text = $('#msgText').val();

        let msg = {
            sender_username,
            sender_name,
            recipient_username,
            text
        }

        requester.post('appdata', 'messages', 'kinvey', msg)
            .then(function () {
                showInfo('Message successfully sent!');
                $('#msgRecipientUsername').val('');
                $('#msgText').val('');
                showView('SendMessage');
            }).catch(handleError);
    }


    function formatDate(dateISO8601) {
        let date = new Date(dateISO8601);
        if (Number.isNaN(date.getDate()))
            return '';
        return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
            "." + date.getFullYear() + ' ' + date.getHours() + ':' +
            padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());

        function padZeros(num) {
            return ('0' + num).slice(-2);
        }
    }

    function formatSender(name, username) {
        if (!name)
            return username;
        else
            return username + ' (' + name + ')';
    }


    function saveSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authtoken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('name', userInfo['name']);
        userLoggedIn();
    }

    // Handle notifications
    $(document).on({
        ajaxStart: () => $("#loadingBox").show(),
        ajaxStop: () => $('#loadingBox').fadeOut()
    });

    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.text(message);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showError(message) {
        let errorBox = $('#errorBox');
        errorBox.text(message);
        errorBox.show();
        setTimeout(() => errorBox.fadeOut(), 3000);
    }
})