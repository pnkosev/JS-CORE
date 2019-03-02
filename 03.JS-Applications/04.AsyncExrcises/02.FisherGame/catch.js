function attachEvents() {
    let serviceUrl = "https://baas.kinvey.com/appdata/kid_HkZeJJoCX/biggestCatches";
    let username = "guest";
    let password = "guest";
    let base64auth = btoa(username + ':' + password);
    let authHeaders = {
        "Authorization": "Basic " + base64auth
    };

    $('.load').click(loadCatches);
    $('.add').click(addCatch);

    function loadCatches() {
        let request = {
            url: serviceUrl,
            method: "GET",
            headers: authHeaders
        };

        $.ajax(request)
            .then(displayCatches);

        function displayCatches(catches) {
            $('#catches').empty();

            for (let catche of catches) {
                $('#catches')
                    .append($('<div>').addClass("catch").attr("data-id", catche._id)
                        .append($('<label>').text("Angler"))
                        .append($('<input>').attr("type", "text").addClass("angler").val(catche.angler))
                        .append($('<label>').text("Weight"))
                        .append($('<input>').attr("type", "number").addClass("weight").val(catche.weight))
                        .append($('<label>').text("Species"))
                        .append($('<input>').attr("type", "text").addClass("species").val(catche.species))
                        .append($('<label>').text("Location"))
                        .append($('<input>').attr("type", "text").addClass("location").val(catche.location))
                        .append($('<label>').text("Bait"))
                        .append($('<input>').attr("type", "text").addClass("bait").val(catche.bait))
                        .append($('<label>').text("Capture Time"))
                        .append($('<input>').attr("type", "number").addClass("captureTime").val(catche.captureTime))
                        .append($('<button>').addClass("update").text("Update").click(updateCatch))
                        .append($('<button>').addClass("delete").text("Delete").click(deleteCatch))
                    );
            }
        }
    }

    function addCatch() {
        let inputs = $(this).parent().find('input');
        //inputs = document.getElementsByTagName('input');

        $.ajax({
            method: "POST",
            url: serviceUrl,
            headers: {
                "Authorization": "Basic " + base64auth,
                "Content-type": "application/json"
            },
            data: JSON.stringify({
                angler: $(inputs[0]).val(),
                weight: Number($(inputs[1]).val()),
                species: $(inputs[2]).val(),
                location: $(inputs[3]).val(),
                bait: $(inputs[4]).val(),
                captureTime: Number($(inputs[5]).val()),
            })
        }).then(loadCatches);

        for (let input of inputs) {
            $(input).val('');
        }
    }

    function updateCatch() {
        let inputs = $(this).parent().find('input');
        let catchId = $(this).parent().attr('data-id');

        $.ajax({
            method: "PUT",
            url: serviceUrl + '/' + catchId,
            headers: {
                "Authorization": "Basic " + base64auth,
                "Content-type": "application/json"
            },
            data: JSON.stringify({
                angler: $(inputs[0]).val(),
                weight: $(inputs[1]).val(),
                species: $(inputs[2]).val(),
                location: $(inputs[3]).val(),
                bait: $(inputs[4]).val(),
                captureTime: $(inputs[5]).val(),
            })
        }).then(loadCatches);
    }

    function deleteCatch() {
        let catchId = $(this).parent().attr('data-id');

        $.ajax({
            method: "DELETE",
            url: serviceUrl + '/' + catchId,
            headers: authHeaders
        }).then(loadCatches);
    }
}