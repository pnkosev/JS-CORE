function initializeTable() {
    let table = $('#countriesTable');

    $('#createLink').on('click', createElement);

    function createElement() {
        let newCountry = $('#newCountryText').val();
        let newCapital = $('#newCapitalText').val();

        if (newCountry && newCapital && newCountry.trim() !== '' && newCapital.trim() !== '') {
            let row = $('<tr>')
                .append($('<td>').text(newCountry))
                .append($('<td>').text(newCapital))
                .append($('<td>')
                    .append($('<a href="#">Up</a>').on('click', moveUp))
                    .append($('<a href="#">Down</a>').on('click', moveDown))
                    .append($('<a href="#">Delete</a>').on('click', remove)));

            row.css('display', 'none');
            row.appendTo(table);
            $(row).fadeIn();

            $('#newCountryText').val('');
            $('#newCapitalText').val('');

            fixRows();
        }

    }

    function moveUp() {
        let row = $(this).parent().parent();
        $(row).fadeOut(() => {
            $(row).insertBefore(row.prev());
            $(row).fadeIn();
            fixRows();
        });

    }

    function moveDown() {
        let row = $(this).parent().parent();
        $(row).fadeOut(() => {
            $(row).insertAfter(row.next());
            $(row).fadeIn();
            fixRows();
        });

    }

    function remove() {
        let row = $(this).parent().parent();

        $(row).fadeOut(() => {
            $(row).remove();
            fixRows();
        });

    }

    function fixRows() {
        $('#countriesTable a').css('display', 'inline');
        let rows = $('#countriesTable tr:nth-child(2)~');
        $(rows[0]).find("a:contains('Up')").css('display', 'none');
        $(rows[rows.length - 1]).find("a:contains('Down')").css('display', 'none');
    }
}


// function initializeTable() {
//     $('#createLink').on('click', createCountry);

//     function addCountry(country, capital) {
//         let tr = $('<tr>')
//             .append($('<td>').text(country))
//             .append($('<td>').text(capital))
//             .append($('<td>')
//                 .append($('<a href="#">[Up]</a>').on('click', moveUp))
//                 .append($('<a href="#">[Down]</a>').on('click', moveDown))
//                 .append($('<a href="#">[Delete]</a>').on('click', deleteRow)));

//         tr.appendTo($('#countriesTable'));
//     }

//     addCountry('Bulgaria', 'Sofia');
//     addCountry('Germany', 'Berlin');
//     addCountry('Russia', 'Moscow');
//     fixRowLinks();

//     function createCountry() {
//         let country = $('#newCountryText').val();
//         let capital = $('#newCapitalText').val();

//         let tr = $('<tr>')
//             .append($('<td>').text(country))
//             .append($('<td>').text(capital))
//             .append($('<td>')
//                 .append($('<a href="#">[Up]</a>').on('click', moveUp))
//                 .append($('<a href="#">[Down]</a>').on('click', moveDown))
//                 .append($('<a href="#">[Delete]</a>').on('click', deleteRow)));

//         tr.css('display', 'none');
//         $("#countriesTable").append(tr);
//         tr.fadeIn();


//         $('#newCountryText').val("");
//         $('#newCapitalText').val("");
//         fixRowLinks();
//     }

//     function deleteRow() {
//         $(this).parent().parent().fadeOut(function () {
//             $(this).remove();
//         });
//         fixRowLinks();
//     }

//     function moveUp() {
//         let row = $(this).parent().parent();
//         row.fadeOut(function () {
//             row.prev().before(row); //row.insertBefore(row.prev());
//             row.fadeIn();
//             fixRowLinks();
//         });
//     }

//     function moveDown() {
//         let row = $(this).parent().parent();
//         row.fadeOut(function () {
//             row.next().after(row); //row.insertAfter(row.next());
//             row.fadeIn();
//             fixRowLinks();
//         });
//     }

//     function fixRowLinks() {
//         $('#countriesTable a').css('display', 'inline');
//         let rows = $('#countriesTable tr');
//         $(rows[2]).find("a:contains('Up')").css('display', 'none');
//         $(rows[rows.length - 1]).find("a:contains('Down')").css('display', 'none');
//     }

//     // function fixRowLinks() {
//     //     $('#countriesTable a').css('display', 'inline');
//     //     $('#countriesTable tr:nth-child(3) td a:contains("Up")').css('display', 'none');
//     //     $('#countriesTable tr:last-child td a:contains("Down")').css('display', 'none');
//     // }
// }