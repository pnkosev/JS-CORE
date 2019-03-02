$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        // HOME
        this.get('index.html', displayHome);
        this.get('#/home', displayHome);

        // ABOUT
        this.get('#/about', function (ctx) {

            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');

            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/about/about.hbs');
            })
        });

        // LOGIN ---> to check if no ctx works
        this.get('#/login', function (ctx) {

            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');

            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                loginForm: './templates/login/loginForm.hbs'
            }).then(function () {
                this.partial('./templates/login/loginPage.hbs')
            })
        })

        this.post('#/login', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;

            auth.login(username, password)
                .then(function (userInfo) {
                    auth.saveSession(userInfo);
                    auth.showInfo(`Thank you for logging in, ${username}!`);
                    displayHome(ctx);
                }).catch(auth.handleError);
        })

        // LOGOUT
        this.get('#/logout', function (ctx) {
            auth.logout()
                .then(function () {
                    auth.showInfo(`Bye, hope to see you soon!`);
                    sessionStorage.clear();
                    displayHome(ctx);
                }).catch(auth.handleError);
        })

        // REGISTER
        this.get('#/register', function (ctx) {

            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');

            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                registerForm: './templates/register/registerForm.hbs'
            }).then(function () {
                this.partial('./templates/register/registerPage.hbs')
            })
        })

        this.post('#/register', function (ctx) {

            let username = ctx.params.username;
            let password = ctx.params.password;
            let repeatPassword = ctx.params.repeatPassword;

            if (password === repeatPassword) {
                auth.register(username, password)
                    .then(function (userInfo) {
                        auth.saveSession(userInfo);
                        auth.showInfo(`You are now registered, ${username}!`);
                        displayHome(ctx)
                    }).catch(auth.handleError);
            } else {
                auth.showError('Passwords do not match!');
            }
        })

        // CATALOG
        this.get('#/catalog', displayCatalog);

        // CREATE TEAM
        this.get('#/create', function (ctx) {

            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');

            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                createForm: './templates/create/createForm.hbs'
            }).then(function () {
                this.partial('./templates/create/createPage.hbs');
            })
        })

        this.post('#/create', function (ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');

            let teamName = ctx.params.name;
            let teamComment = ctx.params.comment;

            teamsService.createTeam(teamName, teamComment)
                .then(function (teamInfo) {
                    teamsService.joinTeam(teamInfo._id)
                        .then(function (userInfo) {
                            auth.saveSession(userInfo);
                            auth.showInfo(`Team ${teamName} has been created!`);
                            displayCatalog(ctx);
                        }).catch(auth.handleError);
                }).catch(auth.handleError);
        })

        // TEAM DETAILS
        this.get('#/catalog/:id', function (ctx) {
            let teamId = ctx.params.id.substr(1);

            teamsService.loadTeamDetails111(teamId)
                .then(function ([teamInfo, usersInfo]) {
                    ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
                    ctx.username = sessionStorage.getItem('username');
                    ctx.teamId = teamId;
                    ctx.name = teamInfo.name;
                    ctx.members = usersInfo; 
                    ctx.comment = teamInfo.comment;
                    ctx.isOnTeam = teamInfo._id === sessionStorage.getItem('teamId');
                    ctx.isAuthor = teamInfo._acl.creator === sessionStorage.getItem('userId');
                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        teamControls: './templates/catalog/teamControls.hbs',
                        teamMember: './templates/catalog/teamMember.hbs'
                    }).then(function () {
                        this.partial('./templates/catalog/details.hbs')
                    })
                }).catch(auth.handleError);
        })

        // JOIN TEAM
        this.get('#/join/:id', function (ctx) {
            let teamId = ctx.params.id.substr(1);

            teamsService.joinTeam(teamId)
                .then(function (userInfo) {
                    auth.saveSession(userInfo);
                    auth.showInfo(`Successfully joined team!`);
                    displayCatalog(ctx);
                }).catch(auth.handleError);
        })

        // LEAVE TEAM
        this.get('#/leave', function (ctx) {

            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');

            teamsService.leaveTeam()
                .then(function (userInfo) {
                    auth.saveSession(userInfo);
                    auth.showInfo(`Successfully left team!`);
                    displayCatalog(ctx);
                }).catch(auth.handleError);
        })

        // EDIT TEAM
        this.get('#/edit/:id', function (ctx) {

            let teamId = ctx.params.id.substr(1);
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');

            teamsService.loadTeamDetails(teamId)
                .then(function (teamInfo) {
                    ctx.teamId = teamId;
                    ctx.name = teamInfo.name;
                    ctx.comment = teamInfo.comment;

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        editForm: './templates/edit/editForm.hbs'
                    }).then(function () {
                        this.partial('./templates/edit/editPage.hbs');
                    })
                }).catch(auth.handleError);
        })

        this.post('#/edit/:id', function (ctx) {

            let teamId = ctx.params.id.substr(1);
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');

            teamsService.edit(teamId, ctx.params.name, ctx.params.comment)
                .then(function () {
                    auth.showInfo(`Team successfully updated !`);
                    displayCatalog(ctx);
                }).catch(auth.handleError);
        })

        // FUNCTIONS
        function displayHome(ctx) {

            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            ctx.hasTeam = sessionStorage.getItem('teamId') !== "undefined";
            ctx.teamId = sessionStorage.getItem('teamId');

            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/home/home.hbs');
            })
        }

        function displayCatalog(ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');

            teamsService.loadTeams()
                .then(function (teams) {
                    ctx.hasNoTeam = sessionStorage.getItem('teamId') === null ||
                        sessionStorage.getItem('teamId') === 'undefined';
                    ctx.teams = teams;

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        team: './templates/catalog/team.hbs'
                    }).then(function () {
                        this.partial('./templates/catalog/teamCatalog.hbs');
                    })
                }).catch(auth.handleError);
        }

    });

    app.run();
});