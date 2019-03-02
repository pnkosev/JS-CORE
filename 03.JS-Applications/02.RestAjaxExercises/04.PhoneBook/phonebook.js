function attachEvents() {
    let baseURL = "https://phonebook-nakov.firebaseio.com/phonebook`";
    let phonebook = $('#phonebook');
    let person = $('#person');
    let phone = $('#phone');

    $('#btnLoad').on('click', loadContacts);
    $('#btnCreate').on('click', createContact);

    function loadContacts() {
        phonebook.empty();
        $.ajax({
                method: "GET",
                url: baseURL + '.json'
            }).then(showContacts)
            .catch(handleError);
        //$.get(baseURL + '.json')
        //     .then(showContacts)
        //     .catch(handleError);
    }

    function showContacts(data) {
        let keys = Object.keys(data);
        keys.sort((a, b) => data[a].person.localeCompare(data[b].person));
        keys.forEach((key) => {
            $('#phonebook')
                .append($('<li>').text(`${data[key]['person']}: ${data[key]['phone']} `)
                    .append($('<button>').text('Delete').click(function () {
                        deleteContact(key);
                    })));
        });
    }

    function createContact() {
        let newContact = JSON.stringify({
            person: person.val(),
            phone: phone.val()
        });

        $.ajax({
                method: "POST",
                url: baseURL + '.json',
                data: newContact
            }).then(loadContacts)
            .catch(handleError);

        person.val('');
        phone.val('');

        // $.post(baseURL + '.json', newContact)
        //     .then(function () {
        //         person.val('');
        //         phone.val('');
        //     }).catch(handleError);
    }

    function deleteContact(key) {
        let request = {
            method: 'DELETE',
            url: baseURL + '/' + key + '.json'
        };

        $.ajax(request)
            .then(loadContacts)
            .catch(handleError);
    }

    function handleError(err) {
        console.log(err);
    }
}