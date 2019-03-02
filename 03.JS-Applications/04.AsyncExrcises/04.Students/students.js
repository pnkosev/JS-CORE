function students() {
    const baseURL = "https://baas.kinvey.com/appdata/";
    const appKey = "kid_BJXTsSi-e";
    const username = "guest";
    const password = "guest";
    const base64 = btoa(`${username}:${password}`);
    const authHeaders = {
        "Authorization": "Basic " + base64
    };

    loadStudents();

    function loadStudents() {
        $.ajax({
                method: "GET",
                url: baseURL + appKey + "/students",
                headers: authHeaders
            }).then(displayStudents)
            .catch(handleError);
    }

    function displayStudents(students) {
        $('#results').find('tr').nextAll().remove();
        console.log(students)

        let sortedStudents = students.sort((a, b) => {
            return a.ID - b.ID || a.FirstName.localeCompare(b.FirstName);
        });

        $.get("./students.hbs").then((hbs) => {
            let template = Handlebars.compile(hbs);
            $('#results').append(template({
                students: sortedStudents
            }));
        });

        //for (let student of sortedStudents) {
        // let html = `<tr>
        //                 <td>${student.ID}</td>
        //                 <td>${student.FirstName}</td>
        //                 <td>${student.LastName}</td>
        //                 <td>${student.FacultyNumber}</td>
        //                 <td>${student.Grade}</td>
        //             </tr>`
        //$('#results').append(html);

        //$('#results');
        // .append($('<tr>')
        //     .append($('<td>').text(student.ID))
        //     .append($('<td>').text(student.FirstName))
        //     .append($('<td>').text(student.LastName))
        //     .append($('<td>').text(student.FacultyNumber))
        //     .append($('<td>').text(student.Grade)));
        //}
    }

    $('#addStudent').click(addStudent);

    function addStudent(ev) {
        ev.preventDefault();
        $.ajax({
                method: "POST",
                url: baseURL + appKey + "/students",
                headers: authHeaders,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    ID: Number($('#ID').val()),
                    FirstName: $('#FirstName').val(),
                    LastName: $('#LastName').val(),
                    FacultyNumber: $('#FacultyNumber').val(),
                    Grade: Number($('#Grade').val())
                })
            }).then(loadStudents)
            .catch(handleError);

        $('#ID').val('');
        $('#FirstName').val('');
        $('#LastName').val('');
        $('#FacultyNumber').val('');
        $('#Grade').val('');
    }

    function handleError(err) {
        console.log(err);
    }
}