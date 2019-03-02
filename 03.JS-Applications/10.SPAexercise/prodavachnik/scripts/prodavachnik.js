function startApp() {

    const templates = {};

    loadTemplates();

    async function loadTemplates() {
        const [adsCatalogTemplate, adBoxTemplate] = await Promise.all([
            $.get('./templates/ads-catalog.hbs'),
            $.get('./templates/ad-box-partial.hbs')
        ]);

        templates['catalog'] = Handlebars.compile(adsCatalogTemplate);
        Handlebars.registerPartial('adBox', adBoxTemplate);
    }

    // Attach click events
    (() => {
        $('header').find('a[data-target]').click(navigateTo);
        $('#buttonLoginUser').click(login);
        $('#buttonRegisterUser').click(register);
        $('#linkLogout').click(logout);
        $('#buttonCreateAd').click(createAd);
        $('#buttonEditAd').click(editAd);
        $('.notification').click(function () {
            $(this).hide();
        });
    })();

    let requester = (() => {
        const appKey = 'kid_B1rA7bYk4';
        const appSecret = 'f03568a429e2415aaa9f045c5fb47af7';
        const baseUrl = 'https://baas.kinvey.com/';

        // Creates the authentication header
        function makeAuth(type) {
            return type === 'basic' ?
                'Basic ' + btoa(appKey + ':' + appSecret) :
                'Kinvey ' + localStorage.getItem('authtoken');
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
        function post(module, url, auth, data) {
            let req = makeRequest('POST', module, url, auth);
            req.data = JSON.stringify(data);
            req.headers['Content-Type'] = 'application/json';
            return $.ajax(req);
        }

        // Function to return PUT promise
        function update(module, url, auth, data) {
            let req = makeRequest('PUT', module, url, auth);
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

    //showView('viewHome');

    if (localStorage.getItem('authtoken') !== null) {
        userLoggedIn();
    } else {
        userLoggedOut();
    }

    // Handle notifications
    $(document).on({
        ajaxStart: () => $("#loadingBox").show(),
        ajaxStop: () => $('#loadingBox').fadeOut()
    });

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
    }

    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    function showView(viewName) {
        // Hide all views and show the selected view only
        $('main > section').hide();
        $('#' + viewName).show();

        if (viewName === 'viewAds') {
            loadAds();
        }
    }

    // Shows only the correct links for a logged in user
    function userLoggedIn() {
        $('#linkHome').show();
        $('#linkLogin').hide();
        $('#linkRegister').hide();
        $('#linkListAds').show();
        $('#linkCreateAd').show();
        $('#linkLogout').show();
    }

    // Shows only the correct links for an anonymous user
    function userLoggedOut() {
        $('#linkHome').show();
        $('#linkLogin').show();
        $('#linkRegister').show();
        $('#linkListAds').hide();
        $('#linkCreateAd').hide();
        $('#linkLogout').hide();
    }

    function navigateTo() {
        let target = $(this).attr('data-target');
        showView(target);
    }

    // Saves username/id/authtoken to local storage
    function saveSession(data) {
        localStorage.setItem('username', data.username);
        localStorage.setItem('id', data._id);
        localStorage.setItem('authtoken', data._kmd.authtoken);
        userLoggedIn();
    }

    // Logs in the user
    async function login() {
        let form = $('#formLogin');
        let username = form.find('input[name="username"]').val();
        let password = form.find('input[name="passwd"]').val();

        try {
            let response = await requester.post('user', 'login', 'basic', {
                username,
                password
            });
            saveSession(response);
            showView('viewAds');
            showInfo('Successfully logged in!');
        } catch (e) {
            handleError(e);
        }
    }

    // Register a user
    async function register() {
        let form = $('#formRegister');
        let username = form.find('input[name="username"]').val();
        let password = form.find('input[name="passwd"]').val();

        try {
            let response = await requester.post('user', '', 'basic', {
                username,
                password
            });
            saveSession(response);
            showView('viewAds');
            showInfo('Successfully registered!');
        } catch (e) {
            handleError(e);
        }
    }

    // Logout a user
    async function logout() {
        try {
            await requester.post('user', '_logout');
            localStorage.clear(); // Clears all session storage on logout
            userLoggedOut();
            showView('viewHome');
            showInfo('Logout successful!')
        } catch (e) {
            handleError(e);
        }
    }

    // Load all ads
    async function loadAds() {
        let container = $('#content');
        container.empty();

        let ads = await requester.get('appdata', 'ads');

        if (ads.length === 0) {
            container.append('<p>No ads in database.</p>');
            return;
        } else {
            ads.forEach(a => {
                if (a._acl.creator === localStorage.getItem('id')) {
                    a.isAuthor = true;
                }
            });
            container.html(templates['catalog']({
                ads
            }));
        }

        $('.edit').click(openEditAd);
        $('.delete').click(deleteAd);
    }

    // Create an add
    async function createAd() {
        let form = $('#formCreateAd');
        let title = form.find($('input[name="title"]')).val();
        let description = form.find($('textarea[name="description"]')).val();
        let price = form.find($('input[name="price"]')).val();
        let image = form.find($('input[name="imageUrl"]')).val();
        let publisher = localStorage.getItem('username');

        let data = {
            title,
            description,
            price,
            image,
            publisher
        }

        try {
            await requester.post('appdata', 'ads', '', data);
            showInfo("Ad created successfully!");
            document.getElementById("formCreateAd").reset();
            showView('viewAds');
        } catch (err) {
            handleError(err);
        }
    }

    // Delete an add
    async function deleteAd() {
        let id = $(this).parent().attr('data-id');

        try {
            await requester.remove('appdata', 'ads/' + id);
            showInfo("Ad is now removed!");
        } catch (err) {
            handleError(err);
        }
        showView('viewAds');
    }

    // Edit an add
    async function editAd() {

        let form = $('#formEditAd');
        let title = form.find('input[name="title"]').val();
        let description = form.find('textarea[name="description"]').val();
        let price = form.find('input[name="price"]').val();
        let image = form.find('input[name="imageUrl"]').val();
        let id = form.find('input[name="id"]').val();
        let publisher = form.find('input[name="publisher"]').val();

        let newAd = {
            title,
            description,
            price,
            image,
            publisher
        };

        try {
            await requester.update('appdata', 'ads/' + id, '', newAd);
            showInfo("Ad successfully edited!");
            showView('viewAds');
        } catch (err) {
            handleError(err);
        }

    }

    // Open edit add view
    async function openEditAd() {
        let id = $(this).parent().attr('data-id');

        let ad = await requester.get('appdata', 'ads/' + id);

        let form = $('#formEditAd');
        form.find('input[name="title"]').val(ad.title);
        form.find('textarea[name="description"]').val(ad.description);
        form.find('input[name="price"]').val(Number(ad.price));
        form.find('input[name="imageUrl"]').val(ad.image);

        form.find('input[name="id"]').val(ad._id);
        form.find('input[name="publisher"]').val(ad.publisher);

        showView('viewEditAd');
    }
}