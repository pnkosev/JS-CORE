function attachEvents() {

    $('#btnLoadTowns').click(loadTowns);

    function loadTowns() {
        let data = $('#towns').val()
            .split(", ")
            .reduce((acc, cur) => {
                acc.towns.push({
                    'town': cur
                });
                return acc;
            }, {
                'towns': []
            });

        renderTowns(data);
    }

    function renderTowns(towns) {

        // ---> 1st option
        // $.get("./template.hbs")
        //     .then(visualizeTowns)
        //     .catch(err => console.log(err));

        // function visualizeTowns(source) {
        //     let template = Handlebars.compile(source);
        //     $('#root').html(template(towns));
        //     $('#towns').val('');
        // }


        // ---> 2nd option
        $.get("./template.hbs")
            .then((source) => {
                let template = Handlebars.compile(source);
                $('#root').html(template(towns));
                $('#towns').val('');
            }).catch(err => console.log(err));

    }
}