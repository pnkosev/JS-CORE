function renderCatTemplate() {
    $.get('./template.hbs')
        .then((hbs) => {
            let template = Handlebars.compile(hbs);
            $('#allCats').html(template({
                cats
            }));

            let btns = document.querySelectorAll("button");

            btns.forEach(item => $(item).click(showHideInfo));

            function showHideInfo() {

                let btn = $(this);

                if (btn.text() === "Show status code") {
                    btn.next().css('display', 'block');
                    btn.text("Hide status code");
                } else {
                    btn.next().css('display', 'none');
                    btn.text("Show status code");
                }
            }

        }).catch((err) => {
            console.log(err)
        });
}