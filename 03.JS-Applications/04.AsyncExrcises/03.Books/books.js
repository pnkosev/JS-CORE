function attachEvents() {
    const baseURL = "https://baas.kinvey.com/appdata/";
    const appKey = "kid_r17TtwbkN";
    const username = "guest";
    const password = "guest";
    const base64 = btoa(`${username}:${password}`);
    const authHeaders = {
        "Authorization": "Basic " + base64
    };

    $('.load').click(loadAllBooks);
    $('.add').click(addBook);

    function loadAllBooks() {
        $('#books').empty();
        $.ajax({
                method: "GET",
                url: baseURL + appKey + "/books",
                headers: authHeaders
            }).then(displayBooks)
            .catch(handleError);

        function displayBooks(books) {
            $.get("./books.hbs")
                .then((hbs) => {
                    let template = Handlebars.compile(hbs);
                    $('#books').html(template({
                        books
                    }));
                    $('.update').each((index, item) => $(item).click(updateBook));
                    $('.delete').each((index, item) => $(item).click(deleteBook));
                })
        }
    }

    function addBook() {
        let data = {
            title: $('#title').val(),
            author: $('#author').val(),
            isbn: $('#isbn').val()
        };

        $.ajax({
                method: "POST",
                url: baseURL + appKey + "/books",
                headers: authHeaders,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(data)
            }).then(loadAllBooks)
            .catch(handleError);

        $('#title').val('');
        $('#author').val('');
        $('#isbn').val('');
    }

    function updateBook() {
        let inputs = $(this).parent().find('input');
        let bookID = $(this).parent().attr('data-id');

        let data = {
            title: $(inputs[0]).val(),
            author: $(inputs[1]).val(),
            isbn: $(inputs[2]).val(),
        };

        $.ajax({
                method: "PUT",
                url: baseURL + appKey + "/books/" + bookID,
                headers: authHeaders,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(data)
            }).then(loadAllBooks)
            .catch(handleError);
    }

    function deleteBook() {
        let bookID = $(this).parent().attr('data-id');

        $.ajax({
                method: "DELETE",
                url: baseURL + appKey + "/books/" + bookID,
                headers: authHeaders,
                contentType: "application/json; charset=utf-8"
            }).then(loadAllBooks)
            .catch(handleError)
    }

    function handleError(err) {
        console.log(err);
    }
}