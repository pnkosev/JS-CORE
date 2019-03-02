handlers.getAllChirps = function (ctx) {
    ctx.isLoggedIn = auth.isAuth();

    const username = sessionStorage.getItem('username');
    const subs = sessionStorage.getItem('subs');

    let loadChirpsByUser = chirpService.getChirpsByUser(username);
    let loadChirpsBySubs = chirpService.getChirpsByUser(subs);

    Promise.all([loadChirpsByUser, loadChirpsBySubs])
        .then(function (allChirps) {

            let chirps = allChirps.reduce((acc, cur) => {
                return acc.concat(cur);
            }, []);

            chirps.forEach((c) => {
                c.time = calcTime(c._kmd.lmt);
            });

            chirps.forEach((c) => {
                c.isAuthor = c._acl.creator === sessionStorage.getItem('userId') ? true : false;
            });

            ctx.subing = (sessionStorage.getItem('subs')).length;
            ctx.nbChirps = chirps.length;
            ctx.username = sessionStorage.getItem('username');
            ctx.chirps = chirps;
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                chirp: './templates/partials/chirp.hbs'
            }).then(function () {
                this.partial('./templates/viewChirps.hbs');
            })
        })
};

handlers.postChirp = function (ctx) {
    ctx.isLoggedIn = auth.isAuth();

    let text = ctx.params.text;
    let author = sessionStorage.getItem('username');

    if (text.length === 0) {
        notify.showError('Text field should not be empty!');
    } else if (text.length > 150) {
        notify.showError('Text field should not contain more than 150 symbols!');
    } else {
        chirpService.createChirp(text, author)
            .then(function () {
                notify.showInfo('Chirp published.');
                ctx.redirect('#/');
            }).catch(notify.handleError);
    }
};

handlers.removeChrip = function (ctx) {
    const chirpId = ctx.params.chirpId;
    chirpService.remove(chirpId)
        .then(function () {
            notify.showInfo('Chirp successfully deleted!');
            ctx.redirect('#/');
        }).catch(notify.handleError);
};


function calcTime(dateIsoFormat) {
    let diff = new Date - (new Date(dateIsoFormat));
    diff = Math.floor(diff / 60000);
    if (diff < 1) return 'less than a minute';
    if (diff < 60) return diff + ' minute' + pluralize(diff);
    diff = Math.floor(diff / 60);
    if (diff < 24) return diff + ' hour' + pluralize(diff);
    diff = Math.floor(diff / 24);
    if (diff < 30) return diff + ' day' + pluralize(diff);
    diff = Math.floor(diff / 30);
    if (diff < 12) return diff + ' month' + pluralize(diff);
    diff = Math.floor(diff / 12);
    return diff + ' year' + pluralize(diff);

    function pluralize(value) {
        if (value !== 1) return 's';
        else return '';
    }
}